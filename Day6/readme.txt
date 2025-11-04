## Contract-AI Application
An AI-powered web application that allows users to analyze contracts, highlight and comment (redlines), store reusable clauses, and generate new contracts using saved clauses.
Built using React (Frontend), Node.js + Express (Backend), and MySQL (Database).

## Day 6 – Contract Generator (Final)
Create contracts using saved clauses

##Define workflow stages:
Draft
Review
Approved


## Installation & Setup
   ##  Backend Setup

   Open terminal and navigate to backend folder

    cd backend
    npm install


##Create a .env file in backend folder
OPENAI_API_KEY=your_api_key_here


##Start the backend
node index.js

 Server runs on port 8000

## Frontend Setup

##Open new terminal and navigate to frontend folder

cd frontend
npm install


##Start React app
npm run dev


##  Database Setup (MySQL)

##Create a new database named:
contract_ai
Tables are automatically created when you run the backend.

## Security

.env file is added to .gitignore so API keys remain private.

Sensitive credentials are not uploaded to GitHub.
Manage contracts easily with status update

