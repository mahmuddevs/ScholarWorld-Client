# Project Name: ScholarWorld - Scholarship Management System (Frontend)

## Link: [ScholarWorld](https://scholar-world-by-mahmud.netlify.app/)

## Description:

ScholarWorld is a comprehensive scholarship management platform designed to help users discover, apply for, and manage scholarships effortlessly. Built with React and styled using Tailwind CSS, the platform offers a seamless user experience with interactive features, role-based access, and real-time updates. The website includes powerful admin and moderator functionalities, as well as user-specific tools for managing applications.

## Key Features of the Project:

- **Authentication & Roles:**

  - **User Authentication:** Secure login and registration via Firebase Authentication.
  - **Role-Based Access:** Supports three user roles—Admin, Moderator, and User.
  - **Private Routes:** Protects sensitive pages for authenticated users only.

- **Home Page:**

  - Features a dynamic slider powered by SwiperJS to showcase highlights.
  - Displays information about featured scholarships and universities.

- **Scholarship Management:**

  - **All Scholarships Page:** Displays detailed information about scholarships, including name, university details, and application deadlines.
  - **Scholarship Details Page:** Allows users to view in-depth scholarship information and apply with a single click.

- **Dashboard Features:**

  - **Admin/Moderator Dashboard:**
    - Add, edit, and delete scholarships.
    - Monitor user activity and application statistics.
    - View detailed graphs and charts implemented using Recharts.
  - **User Dashboard:**
    - Track submitted applications.
    - Access personalized features like application history and status.

- **Payment Integration:**

  - Stripe payment integration for secure and seamless checkout of service and application fees.

- **User Experience Enhancements:**
  - Tooltips, notifications, and modals for better interactivity.
  - Filters and sorting options for easy navigation.

## NPM Packages Used:

- **@stripe/react-stripe-js** - For integrating Stripe's payment system into the application.
- **@stripe/stripe-js** - For handling Stripe client-side functionality.
- **@tanstack/react-query** - For managing and caching server state.
- **axios** - For making HTTP requests to the backend.
- **firebase** - For user authentication and secure login functionality.
- **moment** - For handling and formatting dates, such as application deadlines.
- **motion** - For smooth animations and transitions.
- **react-helmet-async** - For handling meta tags and SEO optimizations.
- **react-hook-form** - For managing form inputs and validation.
- **react-icons** - For integrating icons throughout the application.
- **react-rating-stars-component** - For implementing star ratings in reviews.
- **react-router-dom** - For managing navigation and route protection.
- **react-tooltip** - For adding informative tooltips across the application.
- **recharts** - For creating interactive charts and graphs on the dashboard.
- **sweetalert2** - For displaying alerts and confirmations to the user.
- **swiper** - For creating responsive and interactive sliders.

## Technologies Used:

- **Frontend:** React, Tailwind CSS
- **Authentication:** Firebase Authentication
- **Payment:** Stripe
- **Data Fetching:** Axios, React Query
- **Charts and Graphs:** Recharts
- **Animations:** Motion, SwiperJS

---

ScholarWorld is designed to simplify the scholarship application process and empower users with the tools they need to manage their educational opportunities. Explore it today!
