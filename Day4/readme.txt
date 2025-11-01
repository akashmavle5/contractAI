
#  Contract AI App (Day 4)

An **AI-powered Contract Management System** built using **FastAPI** (backend) and **React + Vite** (frontend).  
This app helps you **upload, analyze, redline, and chat** with AI about contract documents.

---

##  Project Overview

**Features implemented till Day 4:**
-  User **Signup & Login** (with password hashing)
-  **Upload contracts** (`.pdf`, `.docx`, `.txt`)
-  **Extract text** automatically from uploaded files
- **Add redlines** — comment and tag specific sections
-  **AI Chat** — ask contract-related questions
-  **Frontend + Backend Integration**

--

##  Backend Setup (FastAPI)

### 1️⃣ Move into backend folder:
```bash
cd backend

2️⃣ Install required packages:
pip install fastapi uvicorn openai python-docx PyPDF2 python-multipart python-dotenv

3️⃣ (Optional) Create .env file for your OpenAI API key:
OPENAI_API_KEY=your_openai_api_key_here

4️⃣ Run the FastAPI server:
uvicorn main:app --reload

## Frontend Setup (React + Vite)
1️⃣ Move into frontend folder:
cd frontend
2️⃣ Install dependencies:
npm install
3️⃣ Run frontend app:
npm run dev


