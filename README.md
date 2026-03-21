#  Mapt – AI-Powered Adaptive Onboarding Engine
### Redefining corporate onboarding: engaging, efficient, and personalized*

---

##  Overview
Mapt is an AI-driven onboarding platform that transforms traditional training into a tailored learning experience. By analyzing a candidate’s resume and target role, it identifies skill gaps and generates a structured, role-specific learning roadmap. This approach focuses only on missing competencies, reducing redundant learning and accelerating job readiness.

---

##  Problem Statement
Traditional onboarding systems are typically one-size-fits-all:
-  Experienced candidates spend time on familiar topics
-  Beginners face challenges with advanced content
-  Training becomes inefficient and disengaging

**Mapt addresses these challenges** by dynamically adapting onboarding based on individual skill levels and job requirements.

---

##  Key Features
-  **User Authentication** — Login / Signup
-  **Resume Upload** — PDF parsing + Job details input
-  **Skill Gap Analysis** — Resume vs Target Role
-  **Interactive Dashboard** — Readiness score & insights
-  **Personalized Learning Roadmap**
-  **Graph-Based Visualization** — Mermaid.js
-  **Module-Wise Learning System**
-  **Comprehensive Topic Documentation**

---

##  Tech Stack

###  Frontend
-  React (TypeScript)
-  Tailwind CSS
-  ShadCN UI
-  Axios
-  Mermaid.js

###  Backend
-  Node.js

###  Database & Storage
-  MongoDB
-  Cloudinary

---

##  AI Stack & Models

#### 🔗 Check out the full code on [GitHub](https://github.com/your-username/mapt)

###  LLMs (via Groq)
-  **Kimi K2** — Resume parsing, skill gap analysis, roadmap planning
-  **Llama 4 Scout 17B** — Job description extraction

###  Embeddings & Search
-  **all-MiniLM-L6-v2** — Sentence embeddings (384-dim)
-  **Pinecone** — Serverless vector database (AWS)
-  **Hybrid Search** — BM25 (sparse) + Dense embeddings

###  Frameworks
-  LangGraph — Multi-agent orchestration
-  LangChain — LLM chaining & tool integration
-  FastAPI — Backend AI API layer
-  Pydantic v2 — Structured output validation
-  PyMuPDF — Resume parsing

###  Infrastructure
-  Groq Cloud — High-speed LLM inference
-  Pinecone Serverless — Scalable vector storage
-  Cloudinary — Resume storage & delivery
-  GPU/CPU Auto-detection — Runtime optimization

---

##  Core Algorithms

### 1️⃣ Multi-Agent Feature Extraction
- Pydantic ensures structured outputs → eliminates hallucinations
-  Skills weighted by:
  -  **Recency** — Latest experience
  -  **Depth** — Project utilization
-  Entity normalization: JS / JavaScript / ECMAScript → unified skill representation

---

### 2️⃣ Gap Analysis Engine
-  Compares job requirements against resume skills using **outer join logic**
-  Priority classification:
  - 🔴 High → Core missing skills
  - 🟡 Medium → Partial proficiency
  - 🟢 Low → Secondary skills
-  Automatic foundational module inclusion for freshers (<12 months experience)

---

### 3️⃣ Adaptive Learning Path (Graph-Based)
-  Resolves prerequisites recursively (e.g., FastAPI → Python → included if missing)
-  DAG-based structure: Foundations → Intermediate → Advanced
-  Redundancy pruning: Skips modules for already demonstrated skills

---

### 4️⃣ RAG-Based Course Recommendation
-  Dense search → semantic relevance
-  BM25 → exact keyword matching
-  Metadata filtering ensures:
  -  Correct difficulty level
  -  Relevant content only

---

### 5️⃣ Agentic Reasoning Loop (ReAct)
-  Think → Act → Observe cycle
-  Self-corrects misidentified skill gaps
-  Falls back to broader search when necessary
-  Produces structured roadmap → visualized via Mermaid.js

---

##  Setup / Installation

Follow these steps to run Mapt locally:

###  Prerequisites
-  Node.js >= 18.x
-  npm >= 9.x
-  MongoDB database (local or cloud)
-  Cloudinary account for file storage

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/SparshGupta78/Mapt
cd mapt
```
### 2️⃣ Install Dependencies
- Frontend
```bash
cd frontend
npm install
```
- Backend
```bash
cd ../backend
npm install
```
### 3️⃣ Run the Application
- Frontend
```bash
cd frontend
npm run dev
```
- Backend
```bash
cd backend
npm run dev
```
## System Architecture
```mermaid
flowchart TD

%% USER
U[User]

%% FRONTEND
subgraph FE Frontend React TypeScript
    FE1[Homepage]
    FE2[Login Signup]
    FE3[Resume Upload Form]
    FE4[Dashboard Skill Gap Analysis]
    FE5[Roadmap Visualization]
    FE6[Learning Modules Page]
    FE7[Docs Study Resources]
end

%% BACKEND
subgraph BE Backend NodeJS
    BE1[API Gateway]
    BE2[Auth Service]
    BE3[File Upload Handler]
    BE4[Processing Controller]
    BE5[Response Formatter]
end

%% AI
subgraph AI AI Engine
    AI1[Resume Parser]
    AI2[JD Analyzer]
    AI3[Skill Gap Analyzer]
    AI4[Pathway Generator]
end

%% DATABASE
subgraph DB MongoDB
    DB1[User Data]
    DB2[Skill Analysis Results]
    DB3[Learning Pathways]
end

%% STORAGE
subgraph ST Cloudinary
    ST1[Resume PDFs]
end

%% FLOW
U --> FE1
FE1 --> FE2
FE2 --> FE3

FE3 --> BE1

BE1 --> BE2
BE1 --> BE3
BE3 --> ST1

BE1 --> BE4

BE4 --> AI1
BE4 --> AI2

AI1 --> AI3
AI2 --> AI3
AI3 --> AI4

AI4 --> BE5

BE5 --> DB2
BE5 --> DB3
BE2 --> DB1

BE5 --> FE4

FE4 --> FE5
FE5 --> FE6
FE6 --> FE7
