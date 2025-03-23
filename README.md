# Firebase-auth-login

This project is a simple authentication system built with **React** and **Firebase-auth-login**. It includes **user registration** and **login**

## Features

✅ User Registration (Email & Password)  
✅ User Login  
✅ Firebase Authentication Integration  
✅ Toast Notifications for User Feedback  
✅ Input Validation & Loading States

---

## Tech Stack

- **React** (Frontend)
- **Firebase Authentication** (User Management)
- **React Toastify** (Notifications)
- **Bootstrap** (Styling)

---

## Project Setup

📦 src  
┣ 📂 components  
┃ ┣ 📜 Login.js  
┃ ┣ 📜 Register.js  
┣ 📜 firebase.js  
┣ 📜 App.js  
┣ 📜 index.js  
┣ 📜 README.md

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/shaheencodex/firebase-auth-login.git
cd firebase-auth-login

npm install

npm start
```

---

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In the **Authentication** section, enable **Email/Password** authentication.
3. Navigate to **Project Settings** → **General** → **Your Apps**.
4. Register your app and get the Firebase config object.
5. Replace the configuration inside `firebase.js` with your Firebase credentials:

```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

## Usage

- Open `http://localhost:3000` in your browser.
- Visit `http://localhost:3000/register` to sign up.
- Visit `http://localhost:3000/login` to log in.
- Explore the different services and features.

---
