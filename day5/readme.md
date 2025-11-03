## Project Overview

Contract AI is a web application that allows users to upload contract documents (PDFs), extract text, highlight sections, add comments (redlines), and interact with multiple AI models for analysis.

## Day 5 – Completed Features

## Clause Library
    Save important clauses for reuse.
    View all saved clauses.

## Multi-LLM Router
   ## Supports multiple models:
    OpenAI (real API if key added)
    Gemini (mock)
    LLaMA (mock)

## Integrated Frontend + Backend
    Node.js + MySQL backend.
    React-based frontend.

 ## Technologies Used
Frontend: React.js
Backend: Node.js + Express.js
Database: MySQL
AI Models: OpenAI, Gemini, LLaMA (mocked)

## Libraries:
bcrypt.js (for password hashing)
multer (for file uploads)
pdf-parse-fixed (for PDF extraction)
dotenv (for environment variables)

How to Run Locally
Step 1: Clone Repository
1) git clone <your-repo-link>
2) cd contract-ai

Step 2: Setup Backend
1)  cd backend
2) npm install

## Create a .env file in the backend folder:
1)  OPENAI_API_KEY=your_openai_api_key_here

## Start backend:
1) node index.js

## Step 3: Setup Frontend
1) cd frontend
2) npm install
3) npm run dev

## Step 4: Access App
Open browser →
1)  http://localhost:5173 (for frontend)
2)  http://localhost:8000 (for backend)

##  Security
## .env and API keys are hidden using .gitignore.
## Sensitive credentials are not pushed to GitHub.
