Subvilla Technology
===================
Welcome to Subvilla Technology! A home where you can buy quality gadgets, including phones and laptop.
-----------------------------------------------------------------------------------------------------

Table of Contents
-----------------
Features
Technologies Used
Installation
Usage
API Endpoints
Contributing
License

Features
--------
User-Friendly Interface: A responsive design that works on both desktop and mobile devices.
Product Categories: Browse through different categories of gadgets and phones.
Admin Panel: Secure admin functionalities for adding, updating, and deleting products.
Seamless Transactions: Easily purchase gadgets and services with a imple checkout process.

Technologies Used
-----------------
Frontend: React, Axios
Admin: Vite, Axios
Backend: Node.js, Express, MongoDB
Styling: CSS 
Version Control: Git

Installation
------------
To set up the project locally, follow these steps:
Clone the Repository
git clone https://github.com/Kdamzy/Subvilla.git
Navigate to the Backend Directory
cd Subvilla/backend
Install Backend Dependencies
npm install
Run the Backend Server
npm start

Navigate to the Frontend Directory
cd ../frontend
Install Frontend Dependencies
npm install
Run the Frontend Development Server
npm start
Access the Website
Open your browser and go to http://localhost:3000 to view the website.

Navigate to the admin Directory
cd ../admin
Install admin Dependencies
npm install
Run the Frontend Development Server
npm run dev
Access the Website
Open your browser and go to http://localhost:5173 to view the website.

API Endpoints
-------------

User Authentication
Register User
Method: POST
URL: /api/user/register

Login User
Method: POST
URL: /api/user/login

Get All Users(admin only)
Method: GET
URL: /api/user/all-users

Get User by ID(admin only)
Method: GET
URL: /api/user/:id

Delete User(admin only)
Method: DELETE
URL: /api/user/:id

Update User(admin only)
Method: PUT
URL: /api/user/edit-user

Product API Endpoints(admin only)

Upload Product Image
Method: POST
URL: /api/products/upload

Add New Product
Method: POST
URL: /api/products

Get All Products
Method: GET
URL: /api/products


Get Product by ID
Method: GET
URL: /api/products/:id

Delete Product
Method: DELETE
URL: /api/products/:id

Update Product
Method: PUT
URL: /api/products/:id

Contribution
------------
We welcome contributions! If you'd like to contribute, please follow these steps:

Fork the repository.
-------------------
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.