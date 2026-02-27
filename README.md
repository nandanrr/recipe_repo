# 🍽️ Recipe Repository Application  

A Full Stack Recipe Management Web Application built using **Node.js, Express.js, MongoDB, and EJS**.

This project was developed as a **team collaboration project** to implement full-stack development concepts using MVC architecture, RESTful APIs, and secure session-based authentication.

---

## 🚀 Features  

- 🔐 User Authentication (Session-based login)  
- ➕ Add New Recipes (Login Required)  
- ✏️ Edit & Delete Own Recipes Only  
- 📖 Public Recipe Viewing  
- 👤 User-specific Recipe Ownership Validation  
- 🗂 MVC Architecture  
- 🌐 RESTful API Structure  
- 📦 Modular Folder Structure (app_api & app_server)  

---

## 🔐 Security Model  

- Public users can **view recipes**.  
- Only authenticated users can:
  - Add recipes  
  - Edit their own recipes  
  - Delete their own recipes  
- Ownership validation ensures users cannot modify other users’ data.  

---

## 🛠 Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Frontend:** EJS, HTML, CSS  
- **Authentication:** express-session  
- **Other Tools:** dotenv, morgan, cors  

---

## 📂 Project Structure  

```
recipe_repo/
│
├── app_api/        # API routes and controllers  
├── app_server/     # Server-side routes and views  
├── config/         # Database configuration  
├── public/         # Static files  
├── server.js       # Entry point  
├── package.json  
└── README.md  
```

---

## ⚙️ Installation  

1. Clone the repository:
```
git clone https://github.com/nandanrr/recipe_repo.git
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file:
```
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

4. Run the application:
```
npm start
```

5. Open in browser:
```
http://localhost:3000
```

---

## 👥 Team Members  

- Nandan R  
- Niharika B L  

---

## 🎯 Learning Outcomes  

- Practical implementation of MVC architecture  
- Backend API development  
- MongoDB integration using Mongoose  
- Session-based authentication  
- Route protection & ownership validation  
- Full-stack team collaboration  