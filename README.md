# 🚗 CarGo Rentals

CarGo Rentals is a full-stack Car Rental Management System developed using **Spring Boot**, **React**, and **MySQL**. The application allows users to browse cars, register and log in, make bookings, complete payments, and manage their booking history through a clean and responsive interface.

---

## ✨ Features

### 👤 User Module
- User Registration
- User Login
- User Profile Management
- Local Storage based Authentication

### 🚘 Car Module
- Browse Available Cars
- View Car Details
- Dynamic Routing for Individual Cars
- Car Availability Status
- Under Maintenance Status

### 📅 Booking Module
- Booking Summary
- Booking Confirmation
- Minimum One-Day Booking Validation
- Automatic Total Price Calculation
- My Bookings Page

### 💳 Payment Module
- Payment Processing
- Transaction ID Generation
- Payment Status Tracking
- Booking Status Update After Payment

### 🛠 Backend Features
- RESTful API Design
- DTO-based Request Handling
- Layered Architecture (Controller → Service → Repository)
- Global Exception Handling
- JPA Entity Relationships
- MySQL Database Integration

---

# 🛠 Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Bootstrap 5
- CSS

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

### Development Tools
- VS Code
- Spring Tool Suite (STS)
- MySQL Workbench
- Postman
- Git & GitHub

---

# 🏗 Project Architecture

```
React UI
      │
Axios API Calls
      │
Spring Boot REST APIs
      │
Controller Layer
      │
Service Layer
      │
Repository Layer (JPA)
      │
MySQL Database
```

---

# 📂 Database Tables

- Users
- Companies
- Variants
- Cars
- Bookings
- Payments

---

# 📸 Screenshots

Look at the screenshots for website samples in folder: car-rental-frontend/frontend/public/screenshots
---

# 🚀 How to Run the Project

## Kindly note to configure applications.properties.

## 1. Clone the repositories

```
git clone [<frontend-repository-url>](https://github.com/Kalpana-17/Car-Rental-Management-System.git)

```

---

## 2. Start Backend

```
cd car-rental-backend

mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

## 3. Start Frontend

```
cd car-rental-frontend/frontend

npm install

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📌 Project Highlights

- Full Stack Application Development
- End-to-End Booking Workflow
- Dynamic Routing using React Router
- Layered Spring Boot Architecture
- DTO Pattern
- Exception Handling
- Responsive User Interface
- Payment Workflow
- Authentication Flow
- CRUD Operations
- JPA Relationships

---

# 🔮 Future Improvements

- 🎨 Further UI/UX polishing for a more premium user experience.
- 🔍 Functional search bar with filtering based on location and dates.
- 📞 Functional contact page with backend integration.
- 🧾 Booking invoice generation and downloadable PDF receipt.
- 🚪 Logout confirmation dialog for better user experience.
- 🔐 JWT Authentication and Role-Based Authorization.
- 👨‍💼 Admin Dashboard for managing cars, bookings, and users.
- 🚗 Automatic car availability update after booking completion/return.
- 💳 Integration with payment gateways such as Razorpay or Stripe.
- 📧 Email notifications for booking confirmations and payment receipts.

---

# 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Building a complete Full Stack Application
- Designing RESTful APIs
- Spring Boot Layered Architecture
- React Component-Based Development
- State Management using React Hooks
- Database Design and Relationships
- Exception Handling
- Payment Workflow Design
- API Integration using Axios
- Git and GitHub Workflow

---

# 👩‍💻 Author

**Kalpana Kyama**

GitHub: https://github.com/Kalpana-17

LinkedIn: https://www.linkedin.com/in/kalpana-kyama-931670232

---

⭐ If you found this project useful, feel free to star the repository and give your suggestions too!
