# 📖 Blog Application – Frontend

Frontend UI for the **Blog Application**.  
Built with **React + TypeScript**, supporting post and comment creation, editing, deletion, and display.  

---

## 🛠 Tech Stack
- ⚛️ **React 19 + TypeScript**
- 🏗 **Redux Toolkit** – global state management  
- 🔄 **React Query** – async data fetching & caching  
- 📝 **React Hook Form + Zod** – form handling & validation  
- 🎨 **Tailwind CSS** – styling  
- 🔔 **React Hot Toast** – notifications  
- 🛣 **React Router v6** – routing  
- ⚡ **Vite** – build & dev server  

---

## ⚙️ Setup & Run

### 1. Clone the project
```bash
git clone https://github.com/YOUR_USERNAME/blog_application.git
cd blog_application/frontend_blog
2. Install dependencies
bash
Копировать код
npm install
3. Configure API
Set your backend server URL in the .env file:

ini
Копировать код
VITE_API_URL=http://localhost:5000
4. Run the dev server
bash
Копировать код
npm run dev
The frontend will be available at:
👉 http://localhost:5173

📌 Features
🔹 Core Requirements
CRUD for posts:

create

update

delete

view

Comments on posts

Global state with Redux Toolkit

Async requests with React Query

Form validation with React Hook Form + Zod

🔹 Optional Enhancements (implemented)
🔍 Search & sort posts (A–Z, Z–A)

📑 Pagination for post lists

🔔 Notifications for success/error (toast)

📂 Project Structure
bash
Копировать код
frontend_blog/
├── src/
│   ├── components/       # UI components (forms, buttons, lists)
│   ├── features/         # Redux slices
│   ├── hooks/            # custom hooks
│   ├── interfaces/       # TypeScript types & interfaces
│   ├── pages/            # pages (Posts, Create, Update)
│   ├── store/            # Redux store
│   ├── utils/            # helper functions
│   ├── App.tsx           # routing
│   ├── main.tsx          # entry point
│   └── index.css         # Tailwind styles
├── package.json
├── tsconfig.json
└── vite.config.ts
✅ Evaluation Criteria
Functionality: All requirements are met

Code Quality: Clean and structured code

Best Practices: Modern libraries and patterns used

Architecture: Clear abstractions via features, interfaces, hooks

User Experience: Simple and intuitive UI

🚀 Notes
The backend API is fully ready and this frontend communicates with it

TypeScript utility types are used to minimize code duplication

The project is easily extendable and scalable with new features