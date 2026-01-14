# ArenoX: Learning Management System (LMS)

![Status](https://img.shields.io/badge/Status-Pre--Alpha-orange) ![License](https://img.shields.io/badge/License-Proprietary-red) ![Next.js](https://img.shields.io/badge/Next.js-16-black)

## 1. Project Overview

**ArenoX** is a comprehensive Learning Management System (LMS) currently in active pre-alpha development. It is being built to address the fragmentation often found in educational technology by providing a seamless, unified interface for students, instructors, and administrators.

**The Problem:** Many existing LMS solutions are clunky, slow, or segmented into disparate tools. ArenoX aims to prove that an LMS can be performant, accessible, and aesthetically premium without sacrificing functionality.

**Target Audience:**
- **Recruiters & Engineering Managers**: To demonstrate modern full-stack architecture capabilities.
- **EdTech Startups**: As a reference implementation for scalable education platforms.

**Current Status:** Pre-Alpha (Active Construction). The core infrastructure is in place, but feature parity with commercial tools is ongoing.

## 2. Project Goals & Non-Goals

### Goals
-   **Performance First**: Zero-bundle-size static pages using React Server Components (RSC).
-   **Modern DX**: Utilizing the latest standardized tools (Next.js 16, React 19).
-   **Scalability**: Architecture designed to handle growing user bases via serverless-friendly patterns.
-   **Build-in-Public**: Documenting the engineering journey and trade-offs transparently.

### Non-Goals (For Phase 1)
-   **Legacy Browser Support**: The focus is on modern engine capabilities; IE11 and older browsers are explicitly unsupported.
-   **Native Mobile Apps**: The current focus is a responsive Progressive Web App (PWA), not React Native/Flutter.
-   **Commercial Plugins**: No plans for paid marketplace integrations at this stage.

## 3. Technology Stack

We deliberately chose a bleeding-edge stack to leverage the latest performance and developer experience improvements.

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | For Server Actions, RSC architecture, and aggressive caching capabilities. |
| **UI Library** | **React 19** | Leveraging the latest hooks (useActionState, useOptimistic) and compiler optimizations. |
| **Styling** | **Tailwind CSS 4** | Zero-runtime CSS ensuring instant builds and consistent design tokens. |
| **Database** | **MongoDB (Mongoose)** | Flexible schema design allowing rapid iteration of data models (Course/Lesson/User). |
| **Auth** | **Better-Auth** | Lightweight, type-safe authentication that supports custom database adapters better than legacy options. |
| **Validation** | **Zod** | Isomorphic schema validation shared between client forms and server actions. |
| **Animation** | **Framer Motion** | For high-fidelity micro-interactions and layout transitions. |

## 4. Architecture Overview

ArenoX follows a **Server-First** philosophy:

-   **Responsibility Separation**:
    -   **Server**: Handles Authentication, Database Queries, Data Validation, and Initial HTML Rendering.
    -   **Client**: Hydrates *only* interactive islands (Forms, Modals, Navigation interactions).
-   **Route Groups**: The `src/app` directory uses Route Groups (`(auth)`, `(dashboard)`, `(marketing)`) to apply distinct layouts without affecting the URL structure.
-   **Singleton Pattern**: Database connections utilize a global singleton pattern to prevent connection exhaustion in serverless environments (Vercel/AWS Lambda).
-   **Feature-Based Organization**: Components are not grouped by technical type (e.g., "Buttons") but by feature domain (e.g., `_Arenox_dashboard_component`), ensuring code co-location.

## 5. Features

### ✅ Implemented
-   **Authentication**: Full Server-Side sign-in/sign-up flow with Role-Based Access Control (RBAC).
-   **Marketing Shell**: Responsive Landing, About, Pricing, and Contact pages.
-   **Admin Dashboard**:
    -   User Management (List, Edit, View implementation).
    -   Basic Analytics visualization.
-   **Student Dashboard**: Course enrollment views and progress tracking shell.

### 🚧 Works in Progress
-   **Course Content Player**: Video streaming and lesson navigation logic.
-   **Instructor Studio**: Drag-and-drop curriculum builder.
-   **Global Search**: Algolia or distinct MongoDB search integration.

### 📅 Planned (Next Phase)
-   **Real-time Messaging**: Socket.io integration for student-mentor chat.
-   **Gamification**: Badges, streaks, and certificates.

## 6. Project Structure

```bash
c:\arenox-learning-plartform\
├── src\
│   ├── app\
│   │   ├── (auth)\         # Layouts for Signin/Signup
│   │   ├── (dashboard)\    # Protected Admin/User Dashboard Layouts
│   │   ├── (marketing)\    # Public Marketing Layouts
│   │   ├── api\            # API Routes (minimal, mostly Server Actions)
│   │   └── lib\            # Auth and DB configurations
│   ├── component\
│   │   ├── _Arenox_about_component\   # Domain-specific components
│   │   ├── _Arenox_navbar_component\  # Navigation specific components
│   │   └── ...
│   └── utils\              # Shared helpers, types, and hooks
├── public\                 # Static assets (images, fonts)
└── package.json            # Project dependencies
```

## 7. Getting Started

### Prerequisites
-   **Node.js**: v18.17 or higher (v20+ recommended).
-   **MongoDB**: A running instance (Local or Atlas).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/arenox-learning-platform.git
    cd arenox-learning-platform
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env.local` file in the root directory:
    ```env
    # Database
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/arenox

    # Authentication (Better-Auth)
    BETTER_AUTH_SECRET=your_generated_secret_key
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

4.  **Run Locally**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:3000`.

## 8. Known Limitations & Trade-offs

-   **Mobile Navigation**: The mobile drawer logic is currently client-side only and may have a slight hydration delay on slow devices.
-   **Admin Data**: Currently, some admin charts use mock data while the real analytics aggregation pipeline is being optimized.
-   **Strict Mode**: React Strict Mode is enabled, which may cause double-rendering of effects in development (this is intentional for debugging).

## 9. Roadmap

**Current Phase: Alpha Construction**
-   [x] Core Architecture & Auth
-   [x] Static Marketing Pages
-   [ ] Complete Course Management CRUD
-   [ ] Video Upload Pipeline

**Next Phase: Public Beta**
-   Deploy to Vercel Production
-   Open for initial user testing

## 10. Contributing

This is a private repository. Access is currently limited to the core development team.
1.  **Bug Reports**: Please report issues directly to the project maintainer.
2.  **Pull Requests**: Unsolicited pull requests will not be reviewed.

## 11. License

**Copyright (c) 2026 ArenoX.**
All rights reserved. This project is proprietary and confidential. Unauthorized copying, distribution, or use of this file, via any medium, is strictly prohibited.

## 12. Links

-   **Live Demo**: (https://areno-x-pmlx.vercel.app/)
-   **LinkedIn**:www.linkedin.com/in/bankole-olaniyi-427b34291
