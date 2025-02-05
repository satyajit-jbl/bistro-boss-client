# Bistro Boss Client

Bistro Boss is a restaurant management web application that allows users to browse the menu, place orders, and manage their cart efficiently.
![Image](https://github.com/user-attachments/assets/905e9bc0-760d-4433-91dc-f320e605bcce)

## 🚀 Features

- 🍽️ **Dynamic Menu** - View a variety of dishes categorized for easy navigation.
- 🛒 **Cart Management** - Add, remove, and update items in your cart.
- 🔐 **Authentication** - Secure login and registration using Firebase authentication.
- 💳 **Payment Integration** - Stripe-powered payment processing for seamless transactions.
- 📊 **Admin Dashboard** - Manage menu items, user roles, and orders with an interactive admin panel.

## NPM Packages Used

- **axios**: A promise-based HTTP client for making requests to a server.
- **firebase**: A platform for creating mobile and web applications, providing cloud services and APIs.
- **framer-motion**: A production-ready motion library for React, for creating animations.
- **localforage**: A storage library for using IndexedDB, WebSQL, or localStorage with a simple API.
- **lottie-react**: A React library to use Lottie animations in your projects.
- **match-sorter**: A simple, expected, and deterministic best-match sorting of an array in JavaScript.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: The entry point to the DOM and server renderers for React.
- **react-helmet-async**: A reusable React component to manage changes to the document head asynchronously.
- **react-hook-form**: A performant, flexible, and extensible forms library for React Hooks.
- **react-icons**: Include popular icons in your React projects easily.
- **react-loading-skeleton**: A loading skeleton to improve user experience while waiting for data to load.
- **react-modal**: Accessible modal dialog component for React.
- **react-quill**: A React component for Quill, a rich text editor.
- **react-router-dom**: DOM bindings for React Router, enabling routing in web applications.
- **react-select**: A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async, and creatable support.
- **react-table**: A lightweight and fast table library for React with no dependencies.
- **sort-by**: A utility to sort an array of objects by multiple properties.
- **sweetalert2**: A beautiful, responsive, customizable replacement for JavaScript's popup boxes.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Payment Gateway:** Stripe

## 🎯 Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/satyajit-jbl/bistro-boss-client.git
   ```
2. Navigate to the project folder:
   ```sh
   cd bistro-boss-client
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add the required environment variables:
   ```env
   REACT_APP_API_URL=your_backend_api_url
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## 📌 Project Structure

```
├── src
│   ├── components  # Reusable UI components
│   ├── pages       # Page components (Home, Menu, Login, etc.)
│   ├── hooks       # Custom React hooks
│   ├── context     # Context API for global state management
│   ├── utils       # Utility functions
│   ├── assets      # Images and other static files
│   └── styles      # Tailwind CSS custom styles
├── public          # Static assets
├── .env            # Environment variables
├── package.json    # Dependencies and scripts
└── README.md       # Project documentation
```

## 🚀 Deployment

The application can be deployed on Vercel, Netlify, or Firebase Hosting.

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using Vercel:
   ```sh
   vercel deploy
   ```
## 🌐 Live Demo

Check out the live application here: [Bistro Boss](https://bistro-boss-d70c3.web.app/)

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to the branch and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

---

💡 **Stay connected!** Feel free to reach out for discussions and improvements.
