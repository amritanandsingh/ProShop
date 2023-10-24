# ProShop - MERN Stack eCommerce Platform

ProShop is a full-featured eCommerce platform built using the MERN (MongoDB, Express, React, Node) stack. This project is designed to help you learn how to develop a real-world eCommerce application from the ground up, and it includes a wide range of features such as JWT authentication, a shopping cart, product reviews, search functionality, an admin area, and integration with PayPal and credit card payments.

![ProShop Screenshot](https://your-screenshot-url-here.com)

## Features

- **Full-Featured Shopping Cart**: Users can add and manage products in their shopping cart, adjust quantities, and proceed to checkout.

- **Product Reviews and Ratings**: Customers can leave product reviews and ratings to help others make informed decisions.

- **Top Products Carousel**: Showcase top-selling products in a carousel for easy access.

- **Product Pagination**: Display products with pagination to improve user experience.

- **Product Search**: Implement a powerful product search feature to quickly find items.

- **User Profile with Orders**: Registered users can view their order history and track their orders.

- **Admin Area**: Admins have access to an admin dashboard for managing customers, products, and orders.

- **Admin Product Management**: Add, update, and delete products, manage their details, and mark items as out of stock.

- **Admin User Management**: Admins can view and manage user accounts.

- **Admin Order Details Page**: Access detailed order information.

- **Mark Orders as Delivered**: Admins can mark orders as delivered when they are shipped.

- **Checkout Process**: Manage the checkout process, including shipping options and payment methods.

- **PayPal / Credit Card Integration**: Support PayPal and credit/debit card payments.

- **Custom Database Seeder Script**: Populate the database with initial data.

## Course Overview

This is a hands-on course where you will build the ProShop platform from the ground up. You will learn the following key topics:

- Building a front-end using React, including functional components and hooks.

- Implementing routing with React Router.

- Utilizing the React-Bootstrap UI library for a sleek and responsive design.

- Structuring components effectively, managing component-level state and props.

- Managing global state with Redux (Actions & Reducers) and using Redux state in components (useDispatch & useSelector).

- Creating a robust back-end with Express and working with a MongoDB database using the Mongoose ODM.

- Implementing JWT authentication (JSON web tokens) with HTTP-Only cookies.

- Creating custom authentication middleware and handling errors.

- Integrating the PayPal API for payment processing.

- Using environment variables for configuration.

- Deploying the project for production use.

This course is not just about documentation; it's a practical, hands-on experience that will leave you with a real-world project for your portfolio.

## Getting Started

1. Clone the repository: `git clone https://github.com/your/repo.git`

2. Install the required dependencies for both the client and server:
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up your environment variables as needed, including your MongoDB connection string, JWT secret, and PayPal API credentials.

4. Seed the database with sample data:
   ```
   cd server
   npm run data:import
   ```

5. Start the development server:
   ```
   cd client
   npm start
   cd ../server
   npm run dev
   ```

## Deployment

To deploy this project for production, follow the deployment steps outlined in the course.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Enjoy building your own eCommerce platform with ProShop! If you have any questions or encounter any issues, feel free to reach out to us.

**Happy Coding!** 🚀