# CollabData - Collaborative Data Engineering Platform

This is a Next.js application built with Firebase Studio. It's a platform designed for data teams to collaborate on data engineering and analysis.

## 📝 Project Description

CollabData is a web platform that enables users to manage data analysis projects, upload datasets, run automated analyses, and visualize the results. The application is built with a focus on real-time collaboration and workflow efficiency.

## 🔑 Key Features

*   **🔐 User Authentication:** A complete login, registration, and social authentication system using Google and GitHub.
*   **📊 Project Dashboard:** A central dashboard to view, search, filter, and manage all analysis projects.
*   **✨ New Analysis Creation:** A guided workflow for creating new analysis projects, configuring tools, and uploading datasets.
*   **📈 Results Visualization:** Dynamic results dashboards with KPIs, charts, descriptive statistics tables, and AI-generated insights.
*   **💻 Interactive Workspace:** An IDE-like workspace for exploring data files.
*   **👤 Profile Management:** A settings page for users to update their personal information and manage their account.
*   **🤖 AI Integration:** Leverages Genkit to provide intelligent analysis suggestions based on dataset descriptions.

## 🛠️ Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **UI Library:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
*   **Backend & Auth:** [Firebase](https://firebase.google.com/) (Authentication, Firestore)
*   **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit) (Google AI)

## 🚀 Getting Started

Follow these steps to get the development environment running.

### Prerequisites

*   Node.js (v18 or higher)
*   npm

### Installation & Execution

1.  Install the project dependencies:
    ```sh
    npm install
    ```
2.  Run the development server:
    ```sh
    npm run dev
    ```
3.  Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

## 📁 Project Structure

Here is an overview of the most important files and directories in the project:

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root application layout
│   │   ├── page.tsx              # Landing Page
│   │   ├── login/page.tsx        # Authentication page
│   │   ├── dashboard/            # Dashboard routes
│   │   │   ├── page.tsx          # Main dashboard view
│   │   │   ├── layout.tsx        # Layout for dashboard pages
│   │   │   ├── new-analysis/page.tsx # Page to create a new analysis
│   │   │   └── ...
│   │   └── projects/[id]/        # Routes for individual projects
│   │       ├── page.tsx          # Project workspace
│   │       └── results/page.tsx  # Analysis results page
│   │
│   ├── components/
│   │   ├── layout/               # Layout components (header, footer)
│   │   ├── pages/                # Page-specific components
│   │   └── ui/                   # Reusable UI components (ShadCN)
│   │
│   ├── firebase/
│   │   ├── config.ts             # Firebase configuration
│   │   ├── index.ts              # Firebase services initialization and export
│   │   ├── provider.tsx          # Firebase context provider
│   │   └── auth/use-user.tsx     # Hook to get the authenticated user
│   │
│   ├── ai/
│   │   ├── genkit.ts             # Genkit initialization
│   │   └── flows/                # AI flows with Genkit
│   │
│   ├── hooks/
│   │   └── use-project-store.ts  # Hook for project state management
│   │
│   └── lib/
│       ├── utils.ts              # Utility functions
│       ├── mock-data.ts          # Sample data for the application
│       └── types.ts              # TypeScript type definitions
│
├── public/                     # Static files
├── package.json                # Project dependencies and scripts
└── tailwind.config.ts          # Tailwind CSS configuration
```