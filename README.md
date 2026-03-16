# 🩺 SmartSaathi – Secure Medical Ecosystem

SmartSaathi is a lightweight emergency medical web application designed to help users store important health information and quickly contact guardians during emergencies.

The system allows users to register their identity, store medical details, manage medicine reminders, check possible diseases from symptoms, and trigger an SOS alert when emergency assistance is required.

---

# 🚀 Features

- 👤 User Identity Registration
- 📞 Emergency Guardian Contact Management
- 🩺 Symptom-Based Disease Checker
- ⏰ Medicine Reminder System
- 🚨 One-Tap SOS Emergency Alert
- 📍 Live GPS Location Tracking
- ❤️ Simulated Health Vitals Monitoring
- 🎵 Music Player for Relaxation
- ⚙️ Profile Settings Management

---

# 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage API
- Geolocation API
- Web Speech API
- Font Awesome Icons

---

# ⚙️ How the Application Works

1. User registers personal identity information.
2. User adds emergency guardian and doctor contacts.
3. User can add medicine reminders with time scheduling.
4. All data is stored securely using the browser LocalStorage.
5. The dashboard displays:
   - Health summary
   - Simulated heart rate
   - Current GPS location
6. Users can search and play music for relaxation.
7. The **Disease Checker** allows users to enter symptoms.
8. The system searches the dataset and predicts a possible disease.
9. The application displays:
   - Disease name
   - Description
   - Recommended precautions.
10. In case of emergency, the user can press the **SOS button** to contact guardians.

---

# 🩺 Disease Checker System

The Disease Checker helps users identify possible illnesses based on symptoms.

### How It Works

1. User enters a symptom (example: itching, headache).
2. The system scans the symptom dataset.
3. A matching disease is predicted.
4. The system displays:
   - Disease name
   - Disease description
   - Precautions to follow.

---

# 📊 Datasets Used

- `dataset_yourgpt.json`
- `symptom_Description_yourgpt.json`
- `symptom_precaution_yourgpt.json`
- `Symptom-severity_yourgpt.json`

These datasets help map symptoms to diseases and provide medical descriptions and precautions.

---

# 🚨 Emergency SOS System

When the SOS button is activated:

- Emergency alert mode is triggered
- Primary guardian contact is called
- User location is detected using GPS
- Emergency status is displayed on the screen

---

# 💾 Data Storage

All user information is stored locally in the browser using the **LocalStorage API**.

No external database is required for this application.

---

# 📂 Project Structure
SmartSaathi
│
├── index.html
├── emergency.html
├── Alaram and Music.html
├── Check Diseases.html
├── dataset_yourgpt.json
├── symptom_Description_yourgpt.json
├── symptom_precaution_yourgpt.json
├── Symptom-severity_yourgpt.json
└── README.md

---


# 🎯 Purpose of the Project

SmartSaathi aims to provide a simple and accessible digital health support system that helps users:

- Store essential medical information
- Manage medicine reminders
- Predict possible diseases from symptoms
- Contact emergency guardians quickly
- Access basic health monitoring tools

This project demonstrates how web technologies can be used to build a **lightweight healthcare assistance platform**.

---

# 📜 License

This project is developed for **educational and research purposes**.
