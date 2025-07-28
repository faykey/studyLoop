# 📚 StudyLoop

**StudyLoop** is a full-stack MERN (MongoDB, Express, React, Node.js) web app that helps users learn in an interactive environment, earn achievements, connect with study partners, and build consistent learning streaks.

---

## 🚀 Features

- ✅ **User Authentication** (via Clerk custom auth)
- 🧠 **Ask & Answer Questions**
- 🔁 **Daily Streak Tracking**
- 🏆 **Achievements System**
- 🤝 **Study Partner Matching**
- 📬 **Notifications & Waitlist**
- 📊 **User Dashboard** with activity overview

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Auth |
|----------|---------|----------|------|
| React.js + Vite | Express.js (Node.js) | MongoDB (Mongoose) | |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/faykey/studyloop.git
cd studyloop

```
### 2.  Backend Setup

### Environment Variables (.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

```bash
npm run dev

```
### 3. Frontend Setup
```bash
cd client
npm install

```
### Environment Variables (.env)
VITE_API_BASE_URL=https://your-backend-url.com/api

```bash
npm run dev

```

### 🌐 Deployment
🔹 Frontend: Vercel
Point to /client folder

Add VITE_API_BASE_URL to Vercel environment settings

🔹 Backend: Render, Railway, or Fly.io
Deploy your server folder

Ensure CORS is allowed for your Vercel domain

### 🧪 API Routes Overview
Method	Endpoint	Description
GET	/api/streaks/full	Get full streak and achievements
POST	/api/questions	Create a question
POST	/api/answers	Submit an answer
GET	/api/achievements	List achievements
POST	/api/study-partners	Request a partner
...	...	Full REST routes available in /routes

### ✨ Folder Structure
studyloop/
├── client/               # React frontend (Vite)
│   ├── src/
│   └── ...
├── server/               # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js

### 📈 Todo & Improvements
 Leaderboard page

 Email notifications

 Real-time messaging for partners

 Light/dark theme toggle

### 🤝 Contributing
Pull requests and forks are welcome! For major changes, please open an issue first to discuss what you’d like to change.

### 📜 License
MIT © 2025 StudyLoop
