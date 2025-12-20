# 🌌 AssetVerse

**Corporate Asset Management System**  

[ Live Demo]()

---

## 🚀 Project Overview
**AssetVerse** is a full-stack B2B HR & Asset Management platform designed for companies to efficiently track and manage physical assets (laptops, mouse, keyboards, etc.) and employee assignments. It streamlines asset assignment, approvals, returns, and employee affiliations while providing clear visibility and reducing HR overhead.

---

## 🎯 Purpose
- Prevent asset loss and improve accountability  
- Streamline asset request, approval, and return workflows  
- Provide visibility into company inventory  
- Support employees affiliated with multiple companies  
- Allow HR managers to manage assets, employees, and subscription packages  

---

## ⭐ Key Features

### HR Manager Dashboard
- View, add, edit, and delete company assets  
- Approve or reject employee asset requests  
- Auto-affiliate employees on first request  
- Upgrade packages with Stripe payment integration  
- Analytics with Recharts: Pie & Bar Charts  

### Employee Dashboard
- View all assigned assets across companies  
- Request new assets with notes  
- Return returnable assets  
- View team members by company  
- Profile management with image upload  

### Authentication & Security
- Email/password login & optional Google login  
- JWT token-based authentication  
- Role-based protected routes for HR & Employee  

### Other Features
- Fully responsive design (mobile, tablet, desktop)  
- DaisyUI components for professional UI  
- Server-side pagination for asset/employee lists  

---

## 🧑‍💼 User Roles & Permissions
| Role | Permissions |
|------|-------------|
| HR Manager | Manage assets & employees, approve/reject requests, upgrade packages, view analytics, direct assignments |
| Employee | View assigned assets, request assets, return items, view team, update profile |

---

## 📄 Pages & Layout

**Public Pages:**  
- Home, Login, Registration (Employee & HR), 404 Error  

**Employee Dashboard:**  
- My Assets, Request Asset, My Team, Profile  

**HR Manager Dashboard:**  
- Asset List, Add Asset, All Requests, Employee List, Upgrade Package, Profile  

---

## 🗄️ Database Schema (Collections)

- `users`  
- `employeeAffiliations`  
- `assets`  
- `requests`  
- `assignedAssets`  
- `packages`  
- `payments`  

---

## 🛠️ Technologies & Packages
- **Frontend:** React, React Router, DaisyUI, Framer Motion, react-to-print,sweper 
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Authentication:** Firebase Auth / JWT  
- **Payment:** Stripe  
- **Charts & Analytics:** Recharts  
- **Utilities:** Axios, dotenv, bcrypt, nodemon  

---

## ⚡ Setup Instructions

1. **Clone the repositories:**  
```bash
git clone https://github.com/tangilakhatun/Corporate-Asset-Management-System.git
git clone https://github.com/tangilakhatun/assetverse-server-site.git
