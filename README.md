# 🚀 Flipr Fullstack Assignment — MERN Project
Landing Page + Admin Panel + Dynamic Content Management

This is a complete MERN stack application built for the Flipr Fullstack Placement Assignment.
It includes a modern landing page, API-powered content sections, admin panel with authentication, database storage, and image upload support.

# ✨ Features Overview
🟦 Landing Page (User Side)
✔ Hero Section (Option A Chosen)
✔ Our Projects Section

Dynamic list fetched from backend:
Each project includes:

Image

Name

Description

Non-functional “Read More” button

# ✔ Happy Clients Section

Fetched from backend. Each client includes:

Image

Name

Designation

Description

# ✔ Contact Form

Collects:

Full Name

Email

Mobile Number

City

Data is sent to backend and visible inside the Admin Panel.

# ✔ Newsletter Subscription

Collects email → stored in backend → admin can view.

🟩 Admin Panel (Admin Side)
🔐 Admin Authentication

Secure login using JWT token stored in localStorage.

🛠️ Project Management

Admin can:

Add project

Upload image

Delete project

View all projects

🧑‍🤝‍🧑 Client Management

Admin can:

Add client

Upload image

Add designation

Delete client

View all clients

✉ Contact Form Management

Admin sees:

Name

Email

Mobile

City

📧 Subscriber Management

Admin can view:

All newsletter subscriber emails

# 🗂️ Tech Stack
## 🌐 Frontend

React.js

React Router

TailwindCSS

Axios

Framer Motion (optional)

## 🖥 Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Bcrypt

Multer (file upload)

Sharp (image processing)

CORS

dotenv

# 📁 Folder Structure
project/
│
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   ├── seedAdmin.js
│   ├── package.json
│   ├── .env
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── LandingPage.jsx
    │   │   ├── ProjectsStyled.jsx
    │   │   ├── HappyClients.jsx
    │   │   ├── AdminPanel.jsx
    │   ├── components/
    │   ├── api/apiClient.js
    │   ├── App.js
    │   └── index.js
    ├── package.json

# ▶️ Installation Guide
## 1️⃣ Clone the repository
git clone <your-repo-url>

## 2️⃣ Backend Setup
cd backend
npm install

## Start Backend
npm run dev


## Backend runs at:

http://localhost:5000

## 3️⃣ Frontend Setup
cd ../frontend
npm install
npm start


## Frontend runs at:

http://localhost:3000