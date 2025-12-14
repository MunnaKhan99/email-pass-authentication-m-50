### Problem
How to implement layout-based routing in React using React Router v6.

### What this solves
- Common Navbar across all pages
- Different pages rendered using <Outlet />
- Clean route structure using createBrowserRouter

### Routes included
- /
- /register
- /login

### Key Concepts
- createBrowserRouter
- RouterProvider
- Layout route
- Outlet

### When to use
- Authentication pages
- Dashboard layout
- Any app with shared UI (Navbar, Sidebar)

### Files
- router.jsx → router configuration
- Root.jsx → layout component with Navbar and Outlet
