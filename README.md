# 🩺 SmartSaathi – Secure Medical Ecosystem

SmartSaathi is a lightweight emergency medical web application designed to help users store critical health information and quickly contact guardians during emergencies.

The system allows users to register their identity, store medical details, check possible diseases from symptoms, and trigger an SOS alert when emergency assistance is required.

---

## 🚀 Features

- 👤 User Identity Registration
- 🏥 Medical Profile Storage
- 🩺 Symptom-Based Disease Checker
- 📞 Emergency Guardian Contact
- 🚨 One-Tap SOS Emergency Alert
- 📍 Live GPS Location Tracking
- ❤️ Simulated Health Vitals
- ⚙️ Profile Settings

---

## 🛠 Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- LocalStorage API  
- Geolocation API  
- Font Awesome Icons  

---

## ⚙️ How the Application Works

1. User enters **personal identity details**.
2. User stores **basic medical information**.
3. User adds **guardian contact details**.
4. All data is saved using **browser LocalStorage**.
5. The dashboard displays:
   - Health summary
   - Simulated heart rate
   - Current GPS location
6. User can open the **Disease Checker** and enter symptoms.
7. The system searches the medical dataset and predicts a **possible disease**.
8. The app displays:
   - Disease name
   - Description
   - Safety precautions
9. In case of emergency, the user presses the **SOS button** to call the guardian.

---

## 🩺 Disease Checker System

The Disease Checker allows users to identify possible illnesses based on symptoms.

### How It Works
1. User enters a symptom (example: itching, headache).
2. The system scans the symptom dataset.
3. A matching disease is predicted.
4. The application displays:
   - Disease name
   - Description
   - Recommended precautions.

### Datasets Used

- `dataset_yourgpt.json`
- `symptom_Description_yourgpt.json`
- `symptom_precaution_yourgpt.json`
- `Symptom-severity_yourgpt.json`

---

## 🚨 Emergency SOS System

When the SOS button is activated:

- Emergency alert mode starts
- Primary guardian contact is called
- User location is detected using GPS
- Emergency status is displayed on screen

---

## 💾 Data Storage

All user data is stored locally in the browser using the **LocalStorage API**.  
No external database is required for this application.

---

## 📂 Project Structure

SmartSaathi
│
├── index.html
├── emergency.html
├── dashboard.html
├── alarm_disease.html
├── dataset_yourgpt.json
├── symptom_Description_yourgpt.json
├── symptom_precaution_yourgpt.json
└── Symptom-severity_yourgpt.json

---

## 🎯 Purpose of the Project

SmartSaathi aims to provide a simple and accessible emergency medical support system that allows users to:

- store medical information
- predict possible diseases from symptoms
- contact guardians quickly during emergencies.

---


## 📜 License

This project is created for educational and research purposes.
