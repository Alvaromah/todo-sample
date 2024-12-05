# Vue 3 + TypeScript Todo Application

A full-stack Todo application built with Vue 3, TypeScript, and Node.js, featuring a modern tech stack and best development practices.

## Tech Stack

### Frontend
- Vue 3 with Composition API and `<script setup>`
- TypeScript for type safety
- Tailwind CSS for styling
- Axios for API communication
- Heroicons for UI icons
- Vite as build tool and dev server

### Backend
- Node.js with Express
- File-based JSON storage
- CORS enabled
- Error handling middleware
- RESTful API design

## Prerequisites

- Node.js (v18 or higher)
- Visual Studio Code
- Git

## VSCode Setup

1. Install recommended extensions:
   - Vue Language Features (Volar)
   - TypeScript Vue Plugin (Volar)
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - Auto Rename Tag
   - Path Intellisense
   - Code Spell Checker

2. The project includes preconfigured settings for:
   - Format on save
   - ESLint integration
   - Debugging configurations
   - TypeScript support
   - Tailwind CSS IntelliSense

## Project Structure

```
├── src/                  # Frontend source files
│   ├── components/       # Vue components
│   ├── services/        # API services
│   ├── types/           # TypeScript types
│   └── assets/          # Static assets
├── server/              # Backend source files
│   ├── config/          # Server configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Express middleware
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── data/            # JSON storage
└── public/              # Static files
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   # Terminal 1: Start the backend server
   npm run dev:server

   # Terminal 2: Start the frontend dev server
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run dev:server` - Start backend server with auto-reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Debugging

The project includes VSCode launch configurations for debugging both frontend and backend:

1. Frontend debugging:
   - Uses Chrome DevTools integration
   - Supports source maps
   - Hot reload remains active

2. Backend debugging:
   - Full Node.js debugging capabilities
   - Breakpoint support
   - Variable inspection
   - Call stack tracking

3. Full Stack debugging:
   - Debug both frontend and backend simultaneously
   - Switch contexts seamlessly

To start debugging:
1. Open the Debug panel in VSCode (Ctrl+Shift+D)
2. Select the desired configuration
3. Press F5 or click the green play button

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PATCH /api/todos/:id/toggle` - Toggle todo completion
- `DELETE /api/todos/:id` - Delete a todo

## Development Features

- TypeScript support throughout the application
- Hot Module Replacement (HMR)
- ESLint + Prettier integration
- Tailwind CSS with PostCSS
- Automatic type checking
- Error handling middleware
- CORS configuration
- File-based persistence

## Best Practices

- Component composition with Vue 3 Composition API
- Type-safe component props and emits
- Centralized API service layer
- Error boundary implementation
- Responsive design with Tailwind CSS
- Modular backend architecture
- Comprehensive error handling