# Car Rental Hub 🚗

Your one-stop solution for seamless car rentals.

## 📝 Project Description

Car Rental Hub is a full-stack MERN application that provides a comprehensive platform for managing car rentals. It caters to both customers looking to rent vehicles and administrators managing the fleet and bookings. The application offers a user-friendly interface for browsing cars, managing reservations, and a dedicated admin dashboard for complete control over the platform's assets and users.

- **Who it's for:** Customers seeking a straightforward car rental experience and administrators needing a powerful management tool.
- **Key benefits:** Streamlines the rental process, provides a centralized management system, and offers a responsive experience across all devices.

---

## 🎥 Video Showcase

A full walkthrough and explanation of the project is available on YouTube. Click the thumbnail below to watch the video.

[![Car Rental Hub Project Showcase](https://img.youtube.com/vi/SA4CmNVCuWA/0.jpg)](https://youtu.be/SA4CmNVCuWA)

---

## 🛠️ Tech Stack

This project is built with the MERN stack and other modern technologies.

| Category      | Technology / Library                                                              |
|---------------|-----------------------------------------------------------------------------------|
| **Frontend**  | React.js, React Router, Reactstrap, Bootstrap, Slick Carousel                     |
| **Backend**   | Node.js, Express.js                                                               |
| **Database**  | MongoDB with Mongoose                                                             |
| **Authentication** | JSON Web Tokens (JWT)                                                         |
| **API**       | REST                                                                              |
| **Build Tool**| npm                                                                               |

---

## ✨ Features

- **User Authentication:** Secure user registration, login, and logout functionality using JWT.
- **Car Listings:** Browse, search, and filter available cars.
- **Booking System:** Easy-to-use booking form to reserve a car for specific dates.
- **User Profile:** View and manage personal booking history.
- **Admin Dashboard:**
  - Manage Cars (Create, Read, Update, Delete)
  - Manage Bookings (View all, update status)
  - Manage Users (View all, manage roles)
- **Responsive Design:** Fully functional and visually appealing on both desktop and mobile devices.

---

## 📂 Folder Structure

The project is organized into a monorepo structure with two main folders: `backend` and `frontend`.

```
.
├── backend/
│   ├── controllers/  # Contains the logic for handling requests and responses.
│   ├── models/       # Defines the Mongoose schemas for the database collections (Users, Cars, Bookings).
│   ├── routes/       # Defines the API endpoints and links them to controller functions.
│   └── utils/        # Contains utility functions, such as JWT verification middleware.
└── frontend/
    ├── components/   # Contains reusable UI components (Header, Footer, CarItem, etc.).
    ├── context/      # Contains React context for global state management (e.g., AuthContext).
    ├── hooks/        # Contains custom React hooks (e.g., useFetch).
    ├── pages/        # Contains the main page components for each route (Home, Cars, Login, etc.).
    └── routers/      # Defines the client-side routing for the application.
```

---

## ⚙️ Installation & Setup

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local instance or a cloud service like MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/car-rental-website.git
cd car-rental-website
```

### 2. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the backend directory
touch .env
```

Add the following environment variables to your `backend/.env` file.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 3. Frontend Setup

```bash
# Navigate to the frontend directory from the root
cd frontend

# Install dependencies
npm install

# Create a .env file in the frontend directory
touch .env
```

Add the following environment variable to your `frontend/.env` file. This should point to your backend server's address.

```env
REACT_APP_API_URL=http://localhost:5000/api/v1
```

### 4. Running the Application

You will need two separate terminals to run the backend and frontend servers concurrently.

- **Terminal 1: Run the Backend Server**
  ```bash
  cd backend
  npm run start-dev
  ```
  The backend server will start on `http://localhost:5000` (or the port you specified).

- **Terminal 2: Run the Frontend Server**
  ```bash
  cd frontend
  npm start
  ```
  The React development server will start, and your browser should open to `http://localhost:3000`.

---

## 🌐 API Endpoints Overview

The backend server exposes the following REST API endpoints.

| Endpoint                  | Method | Access  | Description                               |
|---------------------------|--------|---------|-------------------------------------------|
| **/api/v1/auth/register** | `POST` | Public  | Register a new user.                      |
| **/api/v1/auth/login**    | `POST` | Public  | Log in a user and get a JWT token.        |
| **/api/v1/cars**          | `GET`  | Public  | Get a list of all cars.                   |
| **/api/v1/cars/:id**      | `GET`  | Public  | Get details of a single car.              |
| **/api/v1/cars**          | `POST` | Admin   | Create a new car.                         |
| **/api/v1/cars/:id**      | `PUT`  | Admin   | Update an existing car.                   |
| **/api/v1/cars/:id**      | `DELETE`| Admin  | Delete a car.                             |
| **/api/v1/users**         | `GET`  | Admin   | Get a list of all users.                  |
| **/api/v1/users/:id**     | `GET`  | User    | Get details of a single user.             |
| **/api/v1/users/:id**     | `PUT`  | User    | Update a user's information.              |
| **/api/v1/users/:id**     | `DELETE`| User   | Delete a user account.                    |
| **/api/v1/bookings**      | `POST` | User    | Create a new booking.                     |
| **/api/v1/bookings/:id**  | `GET`  | User    | Get details of a specific booking.        |
| **/api/v1/bookings**      | `GET`  | Admin   | Get a list of all bookings.               |

---

## 🧪 Testing

- **Frontend:** The frontend is set up with React Testing Library. You can run the test suite with:
  ```bash
  cd frontend
  npm test
  ```

- **Backend:** There are currently no automated tests configured for the backend.

---

## 🚀 Deployment

While deployment can vary based on your provider (e.g., Heroku, Vercel, AWS), here is a general approach:

- **Backend:** Deploy the `backend` folder as a Node.js application. Ensure your environment variables are set in the deployment service.
- **Frontend:** Build the static files for the React app (`npm run build` in the `frontend` directory) and serve them using a static hosting provider like Netlify, Vercel, or GitHub Pages. Make sure to set the `REACT_APP_API_URL` to your live backend URL.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 🙌 Contributing

Contributions are welcome! If you have suggestions for improvements or want to fix a bug, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

Please make sure to update tests as appropriate.
