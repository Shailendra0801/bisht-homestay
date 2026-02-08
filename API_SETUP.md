# Bisht Homestay - Backend API Setup

## Overview
The application now uses an Express backend server with secure password hashing and role-based access control. Reservations and feedback data are stored in JSON files on the server, accessible only through API endpoints. Admins can view all submissions through a dedicated admin panel.

## Security Features
✅ **Password Hashing**: All passwords are hashed using bcrypt (10 salt rounds)
✅ **JSON Files Protected**: Direct access to .json files is blocked (403 error)
✅ **Role-Based Access**: Admin panel accessible only to admin users
✅ **Authentication Context**: Secure session management with React Context

## Admin User Credentials
- **Email**: shailendrabisht80@gmail.com
- **Password**: admin123
- **Role**: admin

## Regular User
- **Email**: demo@bisht-homestay.com
- **Password**: demo123
- **Role**: user

## Running the Application

### 1. Start the Backend Server
```bash
npm run server
```
Server will run on: `http://localhost:3001`

### 2. Start the Frontend (in a new terminal)
```bash
npm run dev
```
Frontend will run on: `http://localhost:5173` (or your configured Vite port)

### 3. Run Both Together
```bash
npm run dev:all
```
This starts both backend and frontend concurrently.

## API Endpoints

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - User login
- `GET /api/users` - Get all users (debug)

### Reservations
- `POST /api/reservations` - Create new reservation (public)
- `GET /api/reservations` - Get all reservations (admin only)

### Feedback
- `POST /api/feedback` - Submit feedback (public)
- `GET /api/feedback` - Get all feedback (admin only)

## Data Storage

All data is stored in JSON files in the `public/` folder:
- `public/users.json` - User accounts (passwords are hashed)
- `public/reservations.json` - Reservation data
- `public/feedback.json` - Customer feedback

**Security Note**: These JSON files cannot be accessed directly via HTTP. Middleware blocks all .json file requests with a 403 error.

## Admin Panel Features

Access the admin panel at `/admin` (requires admin login):

📊 **Dashboard**:
- View all reservations with guest details, dates, and status
- View all customer feedback with ratings
- Real-time data refresh
- Clean tabular interface

🔒 **Access Control**:
- Only users with `role: 'admin'` can access
- Non-admin users are redirected to home
- Guests are redirected to login

## Authentication Flow

1. **Login**: 
   - User enters credentials
   - Server verifies hashed password
   - Returns user data (without password)
   - Frontend stores in AuthContext + localStorage
   - **Admin users** → redirect to `/admin`
   - **Regular users** → redirect to `/` (home)
✅ Passwords are now hashed with bcrypt
- ✅ JSON files are protected from direct access
- ❌ Add JWT tokens for stateless authentication
- ❌ Add HTTPS/TLS encryption
- ❌ Add rate limiting to prevent brute force
- ❌ Add input sanitization to prevent injection
- ❌ Use environment variables for sensitive data
- ❌ Use a proper database (MongoDB, PostgreSQL, etc.)
- ❌ Add logging and monitoring
- ❌ Implement CSRF protection

## New Frontend Components

📦 **AuthContext** (`src/context/AuthContext.jsx`):
- Manages authentication state globally
- Provides `login()`, `logout()`, `isAdmin()`, `isLoggedIn()`
- Persists user session in localStorage

🎨 **Admin Panel** (`src/pages/Admin.jsx`):
- Full-featured admin dashboard
- Tabbed interface (Reservations / Feedback)
- Real-time data display
- Secure logout functionality

🔄 **Updated Components**:
- **Navbar**: Shows/hides login, displays admin panel button, logout
- **Login**: Auto-redirects based on role after login
- **App**: Wrapped with AuthProvider, added `/admin` route

3. **Protected Routes**:
   - `/admin` - Admin panel (admin only)
   - Login button hidden when logged in
   - Admin panel button shown for admins only

## How It Works

1. **User submits reservation**: 
   - Form data → Direct API POST to `/api/reservations`
   - Server saves to `reservations.json`
   - Returns success/error response
   - Admin can fetch from anywhere

2. **User submits feedback**:
   - Form data → Direct API POST to `/api/feedback`
   - Server saves to `feedback.json`
   - Returns success/error response

3. **Admin views data**:
   - Admin logs in (redirected to `/admin`)
   - App calls GET `/api/reservations` and `/api/feedback`
   - Server reads from JSON files
   - Data displayed in admin panel

## Frontend Architecture

All components now use **direct fetch() API calls** instead of store layers:

📄 **Multi-step Form** (`src/shared/multi-step-from/multi-step-form.jsx`):
- Directly POSTs reservation data to API
- Shows success popup on completion
- Handles errors with user-friendly messages

📄 **Contact Form** (`src/pages/Contact.jsx`):
- Directly POSTs feedback to API
- Async/await for proper error handling
- Redirects on success

🎨 **Admin Panel** (`src/pages/Admin.jsx`):
- Fetches data directly from API endpoints
- No intermediate store layer
- Real-time refresh functionality

## Important Notes

⚠️ **Security**: This is a development setup. For production:
- Add proper authentication middleware
- Hash passwords (use bcrypt)
- Add JWT tokens for session management
- Validate admin role on protected endpoints
- Use environment variables for sensitive data
- Use a proper database (MongoDB, PostgreSQL, etc.)

## Testing

1. Start both servers
2. Submit a reservation through the form
3. Check `public/reservations.json` - data should be saved
4. Log in as admin to view all reservations
