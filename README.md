# Contract AI

###  Developer  
Kkrish Pinjani  

---

##  Overview  

Contract-AI is an intelligent platform that simplifies contract management using AI.
It allows users to:
Upload and extract text from contracts
Highlight and comment (Redline)
Save important clauses
Ask questions using multiple AI models
Generate new contracts using saved clauses
Manage workflow stages (Draft → Review → Approved)

---
## Features

 User Signup and Login
 PDF Upload and Text Extraction
 Redlining (highlight → tag → comment)
 Clause Library (save and reuse clauses)
 AI Chat Support (OpenAI, Gemini, LLaMA)
 Contract Generator using clauses
 Workflow states: Draft → Review → Approved
---

## Local Setup Instructions
Step 1: Clone or Download
Download both frontend and backend folders from GitHub.

Step 2: Backend Setup
##Open terminal
cd backend
npm install

##Create .env file inside backend/
PORT=8000
OPENAI_API_KEY=your_key_here  (optional)

##Run backend
node index.js

Output: “Server running on port 8000”
Output: “MySQL connected”

Step 3: Frontend Setup
##Open another terminal
cd frontend
npm install
npm run dev

Open browser → http://localhost:5173

---
## Architecture
Frontend: React (Vite)
Backend: Node.js + Express
Database: MySQL
AI Models: OpenAI (real) + Gemini & LLaMA (mock responses)

## Flow
User logs in →
Uploads contract (PDF) →
Extracts text →
Highlights text and adds redlines →
Saves clauses →
Generates a new contract from clause library →
Tracks workflow (Draft → Review → Approved)

##  Tech Stack
React + Vite (Frontend)
Node.js + Express (Backend)
MySQL (Database)
Multer + pdf-parse for PDF handling
bcryptjs for password hashing
dotenv for environment variables

## Security
.env file is hidden using .gitignore
API keys are not shared publicly
Passwords are stored hashed using bcrypt
