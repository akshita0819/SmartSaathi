require("dotenv").config();
const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/smartsaathi");

// schema
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  age: String,
  disease: String
});

const User = mongoose.model("User", userSchema);

// routes
app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/user", async (req, res) => {
  await User.deleteMany();
  const user = new User(req.body);
  await user.save();
  res.json(user);
});
// ================= OTP SYSTEM =================


let otpStore = {};

// SEND OTP
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[phone] = otp;
  console.log("OTP:", otp);
  console.log("Phone:", phone);

  try {
    await axios.get("https://www.fast2sms.com/dev/bulkV2", {
      params: {
        authorization: process.env.API_KEY,
        variables_values: otp,
        route: "q",
        numbers: phone
      }
    });

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false });
  }
});
// VERIFY OTP
app.post("/verify-otp", (req, res) => {
  const { phone, otp } = req.body;

  if (otpStore[phone] == otp) {
    delete otpStore[phone];
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});


app.get("/user", async (req, res) => {
  const user = await User.findOne();
  res.json(user);
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});