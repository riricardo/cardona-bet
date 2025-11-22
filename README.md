# CardonaBet 🎡💰

CardonaBet is an online roulette betting experience powered by **Firebase** and **Stripe**.  
Users can register, deposit funds, place bets in real time, and cash out securely.

---

## 🚀 Overview

CardonaBet offers a smooth and secure betting flow:

- Create an account using **Firebase Authentication**
- Deposit money using **Stripe Checkout**
- Bet on roulette spins with real-time results
- Track wallet balance instantly through Firestore listeners
- Cash out at any time through a secure withdrawal flow
- Access betting history and transaction logs

All payouts, and money handling are fully server-side for maximum security.

---

## 🧱 Tech Stack

### **Frontend**

- React + Vite
- TailwindCSS / DaisyUI / FontAwesome
- Firebase Web SDK

### **Backend**

- **Firebase Authentication**
- **Cloud Firestore**
- **Firebase Cloud Functions**
- **Firebase Hosting**
- **Stripe Payments API**
- **Stripe Webhooks via Firebase Functions**

---

## 🔥 Firebase Features

### **Authentication**

- Google Sign-in
- Secure token validation inside Functions

### **Firestore**

- Wallet balances
- Bets, transactions
- Real-time updates for instant UI response

### **Cloud Functions**

- Secure roulette engine logic
- Processing bets and payouts
- Creating Stripe Checkout Sessions
- Handling Stripe Webhooks
- Validating cash-out requests

### **Hosting**

- Hosts the full web application
- Integrates with Cloud Functions for dynamic backend features

---

## 💳 Stripe Integration

CardonaBet uses Stripe for all real-money operations.

### **Deposits**

1. User chooses deposit amount
2. Cloud Function creates a **Stripe Checkout Session**
3. User completes payment
4. Stripe webhook updates user balance inside Firestore

### **Cash Out**

1. User requests withdrawal
2. Cloud Function verifies identity, balance, and limits
3. Stripe processes the payout back to the user

All sensitive operations run server-side—never exposed to the client.

---

## 🎡 Betting System

Roulette operations are fully handled in backend Firebase Functions:

- Bet validation
- Secure random outcome generation
- Calculation of winnings
- Updating wallet balance atomically
- Storing results and bet history
- Broadcasting the result to the UI in real time

This ensures fairness, prevents tampering, and creates a seamless user experience.

---

## 🛡️ Security

CardonaBet is built with a strong security model:

- Firebase App Check
- Firestore Security Rules
- Auth token validation in Functions
- Stripe secret keys stored securely with Firebase Config
- All financial actions done server-side

---

## 🙌 Author

**Ricardo Cardona**  
Creator & Developer of CardonaBet
