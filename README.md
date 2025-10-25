# 🌐 Full-Stack Portfolio Project

This is my **personal portfolio website**, built using a modern full-stack architecture:
- **Frontend:** Next.js 15 (React + TypeScript + Tailwind CSS)
- **Backend:** Spring Boot 3 (Java 17)
- **Database:** (Optional – can be MySQL/PostgreSQL in the future)

---

## 🚀 Features

- 🧑‍💻 About Me section with personal intro
- 📚 Blog section (served from Spring Boot REST API)
- 🛠 Projects showcase with live demos and GitHub links
- 🔒 Contact form (secured API endpoint)
- 🎨 Responsive UI built with Tailwind CSS

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### ☕ Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- [Spring Web](https://spring.io/guides/gs/rest-service/)
- [Spring DevTools](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.devtools)
- (Optional) [Spring Security](https://spring.io/projects/spring-security)

---

## 🧩 Project Structure

portfolio-project/
│
├─ backend/ # Spring Boot backend
│ ├─ src/
│ │ ├─ main/java/com/pushkar/backend/
│ │ │ ├─ controller/
│ │ │ ├─ model/
│ │ │ ├─ service/
│ │ │ └─ BackendApplication.java
│ │ └─ resources/application.properties
│ ├─ pom.xml
│ └─ .gitignore
│
├─ frontend/ # Next.js frontend
│ ├─ app/
│ │ ├─ page.tsx
│ │ └─ blogs/page.tsx
│ ├─ public/
│ ├─ styles/
│ ├─ package.json
│ ├─ tailwind.config.mjs
│ └─ .gitignore
│
└─ README.md

---

## 🏃‍♂️ Getting Started

### 1️⃣ Clone this Repository

```bash
git clone https://github.com/Pushkar745/portfolio-project.git
cd portfolio-project
