
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { saveOTP, verifyOTP, sendOTPViaSMS } = require('../utils/otp');
const { protect } = require('../middleware/auth');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' });
};

router.post('/send-otp', [
  body('phone').matches(/^[6-9]\d{9}$/).withMessage('Enter a valid 10-digit Indian mobile number')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
    const { phone, purpose = 'login' } = req.body;
    const otp = await saveOTP(phone, purpose);
    const result = await sendOTPViaSMS(phone, otp);
    const responseData = {
      success: true,
      message: `OTP sent to +91-${phone.slice(0, 5)}XXXXX`,
      expiresIn: `${process.env.OTP_EXPIRE_MINUTES || 10} minutes`
    };
    if (result.mode === 'development' || result.otp) {
      responseData.devOTP = result.otp || otp;
      responseData.devNote = 'Dev mode: OTP shown for testing only';
    }
    res.json(responseData);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send OTP. Please try again.' });
  }
});

router.post('/register', [
  body('phone').matches(/^[6-9]\d{9}$/).withMessage('Invalid phone number'),
  body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits'),
  body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('age').isInt({ min: 1, max: 120 }).withMessage('Enter a valid age'),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
    const { phone, otp, name, age, gender, email, bloodGroup } = req.body;
    const existingUser = await User.findOne({ phone });
    if (existingUser) return res.status(400).json({ success: false, message: 'Phone number already registered. Please login.' });
    const otpResult = await verifyOTP(phone, otp, 'register');
    if (!otpResult.valid) return res.status(400).json({ success: false, message: otpResult.message });
    const user = await User.create({ name, phone, age, gender, email, bloodGroup, isVerified: true });
    const token = generateToken(user._id);
    res.status(201).json({ success: true, message: `Welcome to SmartSaathi, ${name}!`, token, user: user.toPublicJSON() });
  } catch (error) {
    if (error.code === 11000) return res.status(400).json({ success: false, message: 'Phone number already exists.' });
    res.status(500).json({ success: false, message: 'Registration failed. Please try again.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const result = await verifyOTP(phone, otp, 'login');
    if (!result.valid) {
      return res.status(400).json({ message: result.message });
    }
    // your JWT or session logic here
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error); // This will show the real error
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({ success: true, user: user.toPublicJSON() });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.post('/logout', protect, (req, res) => {
  res.json({ success: true, message: 'Logged out successfully.' });
});

module.exports = router;