# JobHub

## Overview
**JobHub** is a job portal website that connects job seekers with employers. This README provides an overview of the project, explains the source code structure, and highlights the APIs used.

## Source Code

### Frontend (React)
The frontend is built using React.js.
- **Key directories**:
  - `src/components`: Contains React components (e.g., Navbar, JobList, JobDetails).
  - `src/pages`: Defines different pages (e.g., Home, Jobs, About).
  - `src/assets`: Stores images, logos, and other assets.
  - `src/App.js`: Main entry point for the React app.
  - `src/index.js`: Renders the app into the DOM.
- API calls are made to the backend for fetching job listings, user authentication, etc.

<!-- ### Backend (Node.js/Express)
The backend handles API requests from the frontend.
- **Key directories**:
  - `routes`: Defines API routes (e.g., /api/jobs, /api/auth).
  - `controllers`: Contains logic for handling API requests.
  - `models`: Defines database models (e.g., User, Job).
  - `middlewares`: Includes authentication middleware.
  - `server.js`: Main entry point for the Express server. -->

## APIs Used

### Job Listings API
- **Endpoint**: `/api/jobs`
- **Description**: Retrieves a list of job listings.
- **Authentication**: Not required (publicly accessible).
<!-- 
### User Authentication API
- **Endpoint**: `/api/auth`
- **Description**: Handles user registration, login, and authentication.
- **Authentication**: Required for protected routes (e.g., user dashboard). -->

### Other APIs
- Describe any additional APIs used 

## Getting Started
1. Clone this repository.
2. Install dependencies (`npm install`).
3. Set up environment variables (e.g., database connection, API keys).
4. Run the frontend (`npm start`) and backend (`node server.js`).

