# 🩺 SmartSaathi – Secure Medical Ecosystem (Full-Stack Version)

SmartSaathi is a lightweight emergency medical web application designed to help users store important health information and quickly contact guardians during emergencies.

The system allows users to register their identity, store medical details, manage medicine reminders, check possible diseases from symptoms, and trigger an SOS alert when emergency assistance is required.

---

# 🚀 Features

* 👤 User Identity Registration (with backend storage)
* 📧 Email + OTP Verification System
* 📞 Emergency Guardian Contact Management
* 🩺 Symptom-Based Disease Checker
* ⏰ Medicine Reminder System
* 🚨 One-Tap SOS Emergency Alert
* 📍 Live GPS Location Tracking
* ❤️ Simulated Health Vitals Monitoring
* 🎵 Music Player for Relaxation
* 🎤 Voice Assistant Control
* ⚙️ Profile Settings Management

---

# 🛠 Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript
* Web Speech API
* Geolocation API
* Font Awesome Icons

## Backend

* Node.js
* Express.js
* File System (JSON-based database)

---

# ⚙️ How the Application Works

1. User registers personal identity information along with email verification.
2. Data is sent to the backend and stored in a local JSON database.
3. User adds emergency guardian and doctor contacts.
4. Medicine reminders can be scheduled with time alerts.
5. Dashboard displays:

   * Health summary
   * Simulated heart rate
   * Current GPS location
6. Voice assistant allows hands-free control.
7. Music system enables relaxation through YouTube integration.
8. Disease Checker allows users to input symptoms.
9. Backend-connected system processes and displays:

   * Disease name
   * Description
   * Precautions
10. SOS button triggers emergency call to guardian.

---

# 🩺 Disease Checker System

The Disease Checker helps users identify possible illnesses based on symptoms.

### How It Works

1. User enters a symptom (example: itching, headache).
2. System scans the dataset.
3. A matching disease is predicted.
4. The application displays:

   * Disease name
   * Description
   * Precautions

---

# 📊 Datasets Used

* dataset_yourgpt.json
* symptom_Description_yourgpt.json
* symptom_precaution_yourgpt.json
* Symptom-severity_yourgpt.json

These datasets are used to map symptoms to diseases and provide descriptions and precautions.

---

# 🚨 Emergency SOS System

When the SOS button is activated:

* Emergency alert is triggered
* Guardian contact is called automatically
* User location is fetched using GPS
* Voice alert confirms activation

---

# 💾 Data Storage

All user data is stored using a backend system:

* Stored in: `database.json`
* Managed via Node.js + Express API
* No browser dependency (unlike localStorage)

---

# 📂 Project Structure

SmartSaathi
│
├── server.js
├── database.json
├── update2.html
├── emergency.html
├── disease.html
├── alarm.html
├── dataset_yourgpt.json
├── symptom_Description_yourgpt.json
├── symptom_precaution_yourgpt.json
├── Symptom-severity_yourgpt.json
├── package.json
└── README.md

---

# ▶️ How to Run the Project

## 1. Install Dependencies

```
npm install express cors
```

## 2. Start Backend Server

```
node server.js
```

Server runs on:

```
http://localhost:3000
```

## 3. Run Frontend

* Open HTML files using Live Server (VS Code)

---

# 🎯 Purpose of the Project

SmartSaathi aims to provide a simple and accessible digital health support system that helps users:

* Store essential medical information
* Manage medicine reminders
* Predict possible diseases
* Enable emergency communication
* Use voice-based interaction

This project demonstrates how web technologies can be used to build a **full-stack healthcare assistance platform**.

---

# 🔮 Future Enhancements

* ☁️ Cloud database (MongoDB)
* 📱 Mobile app (Android APK)
* 🤖 AI-based disease prediction model
* 📩 Real Email/SMS OTP system
* 🧠 Personalized health recommendations
* 📊 Health analytics dashboard

---

# 📜 License

This project is developed for **educational and research purposes only**.
