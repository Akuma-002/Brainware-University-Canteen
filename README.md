# Food Ordering Application

A full-stack food ordering application built with MERN stack (MongoDB, Express, React, Node.js).

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/food-ordering
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```

4. Start MongoDB:
   - If you have MongoDB installed locally, make sure the MongoDB service is running
   - Or use MongoDB Atlas and update the MONGO_URI in .env file

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- User authentication (register/login)
- Menu management (admin only)
- Food ordering
- Cart functionality
- Order history
- Responsive design

## API Endpoints

### Auth
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user

### Food
- GET /api/food - Get all food items
- GET /api/food/:id - Get single food item
- POST /api/food - Add new food item (admin only)
- PUT /api/food/:id - Update food item (admin only)
- DELETE /api/food/:id - Delete food item (admin only)

### Orders
- GET /api/orders - Get all orders
- POST /api/orders - Create new order
- GET /api/orders/:id - Get single order
- PUT /api/orders/:id - Update order status

## Project Structure

```
food-ordering/
├── frontend/              # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux store and slices
│   │   └── ...
│   └── ...
├── backend/              # Node.js backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── controllers/     # Route controllers
│   └── ...
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 