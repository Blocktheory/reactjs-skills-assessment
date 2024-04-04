# Reactjs Skills Assessment

This application includes user authentication and products viewing functionalities.

## Features

### User Authentication

Users can sign up and log in to the application. During the signup process, use ⁠ 111111 ⁠ as the OTP. 

### View Products

After logging in, users can see the list of products with their details.

## Tech Stack

⁠- [Next.js](https://nextjs.org): A React framework for building the overall structure of the application.
- ⁠[API Routes](https://nextjs.org/docs/api-routes/introduction): Used for creating server-side API endpoints.
- ⁠[Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework for styling the application.
- ⁠[TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that adds static types.
- ⁠[Prisma](https://prisma.io): An open-source database toolkit for handling database operations.
- ⁠[Postgres](https://www.postgresql.org/): The database used to store user and interest data.
- ⁠[Next.js Middleware](https://nextjs.org/docs/middleware): Used to check if a user is logged in. If a user is not logged in, they are redirected to the login page.

# Getting Started

Follow these steps to set up the application:

1.⁠ ⁠Create a ⁠`.env` ⁠file in the root directory of the project and add the following line:

    
    DATABASE_URL="postgresql://com_owner:fkghvPG56LDK@ep-twilight-moon-a54i9f0m.us-east-2.aws.neon.tech/com?sslmode=require"
    

This sets up the connection to the PostgreSQL database.

2.⁠ ⁠Install the project dependencies:

    
    npm install
    

3.⁠ ⁠Start the development server:

    npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.