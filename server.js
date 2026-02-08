import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Middleware to prevent direct access to JSON files
app.use((req, res, next) => {
  if (req.path.endsWith('.json')) {
    return res.status(403).json({ success: false, message: 'Access denied' });
  }
  next();
});

const usersFilePath = path.join(__dirname, 'public', 'users.json');
const reservationsFilePath = path.join(__dirname, 'public', 'reservations.json');
const feedbackFilePath = path.join(__dirname, 'public', 'feedback.json');
const roomsFilePath = path.join(__dirname, 'public', 'rooms.json');

async function readUsers() {
  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    const initialData = { users: [] };
    await fs.writeFile(usersFilePath, JSON.stringify(initialData, null, 2));
    return initialData;
  }
}

async function writeUsers(data) {
  await fs.writeFile(usersFilePath, JSON.stringify(data, null, 2));
}

async function readReservations() {
  try {
    const data = await fs.readFile(reservationsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    const initialData = { reservations: [] };
    await fs.writeFile(reservationsFilePath, JSON.stringify(initialData, null, 2));
    return initialData;
  }
}

async function writeReservations(data) {
  await fs.writeFile(reservationsFilePath, JSON.stringify(data, null, 2));
}

async function readFeedback() {
  try {
    const data = await fs.readFile(feedbackFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    const initialData = { feedback: [] };
    await fs.writeFile(feedbackFilePath, JSON.stringify(initialData, null, 2));
    return initialData;
  }
}

async function writeFeedback(data) {
  await fs.writeFile(feedbackFilePath, JSON.stringify(data, null, 2));
}

async function readRooms() {
  try {
    const data = await fs.readFile(roomsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    const initialData = { rooms: [] };
    await fs.writeFile(roomsFilePath, JSON.stringify(initialData, null, 2));
    return initialData;
  }
}

async function writeRooms(data) {
  await fs.writeFile(roomsFilePath, JSON.stringify(data, null, 2));
}


app.post('/api/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Read existing users
    const data = await readUsers();
    
    // Check if user already exists
    const existingUser = data.users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already registered' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: data.users.length > 0 ? Math.max(...data.users.map(u => u.id)) + 1 : 1,
      name,
      email,
      phone,
      password: hashedPassword,
      role: 'user',
      createdAt: new Date().toISOString()
    };

    // Add user and save
    data.users.push(newUser);
    await writeUsers(data);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json({ 
      success: true, 
      message: 'Registration successful',
      user: userWithoutPassword 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during registration' 
    });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email and password are required' 
      });
    }

    // Read users
    const data = await readUsers();
    
    // Find user by email
    const user = data.users.find(u => u.email === email);
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid email or password' 
      });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    res.json({ 
      success: true, 
      message: 'Login successful',
      user: userWithoutPassword 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

// Get all users endpoint (for debugging - remove in production)
app.get('/api/users', async (req, res) => {
  try {
    const data = await readUsers();
    // Return users without passwords
    const usersWithoutPasswords = data.users.map(({ password, ...user }) => user);
    res.json({ success: true, users: usersWithoutPasswords });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// ============= RESERVATION ENDPOINTS =============

// Create reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const reservationData = req.body;

    // Validation
    if (!reservationData.arrivalDate || !reservationData.departureDate || 
        !reservationData.firstName || !reservationData.lastName || !reservationData.email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Required fields are missing' 
      });
    }

    const data = await readReservations();
    
    const newReservation = {
      ...reservationData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    data.reservations.push(newReservation);
    await writeReservations(data);

    res.status(201).json({ 
      success: true, 
      message: 'Reservation created successfully',
      reservation: newReservation 
    });
  } catch (error) {
    console.error('Reservation creation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during reservation creation' 
    });
  }
});

// Get all reservations (admin only)
app.get('/api/reservations', async (req, res) => {
  try {
    const data = await readReservations();
    res.json({ 
      success: true, 
      reservations: data.reservations 
    });
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// ============= FEEDBACK ENDPOINTS =============

// Create feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const feedbackData = req.body;

    // Validation
    if (!feedbackData.name || !feedbackData.feedback) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and feedback are required' 
      });
    }

    const data = await readFeedback();
    
    const newFeedback = {
      ...feedbackData,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };

    data.feedback.push(newFeedback);
    await writeFeedback(data);

    res.status(201).json({ 
      success: true, 
      message: 'Feedback submitted successfully',
      feedback: newFeedback 
    });
  } catch (error) {
    console.error('Feedback creation error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during feedback submission' 
    });
  }
});

// Get all feedback (admin only)
app.get('/api/feedback', async (req, res) => {
  try {
    const data = await readFeedback();
    res.json({ 
      success: true, 
      feedback: data.feedback 
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// ============= ROOMS ENDPOINTS =============

// Get all rooms (public)
app.get('/api/rooms', async (req, res) => {
  try {
    const data = await readRooms();
    res.json({ 
      success: true, 
      rooms: data.rooms 
    });
  } catch (error) {
    console.error('Error fetching rooms:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error' 
    });
  }
});

// Update a specific room (admin only)
app.put('/api/rooms/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRoom = req.body;

    // Validation
    if (!updatedRoom.name || !updatedRoom.price || !updatedRoom.capacity) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, price, and capacity are required' 
      });
    }

    const data = await readRooms();
    const roomIndex = data.rooms.findIndex(room => room.id === id);

    if (roomIndex === -1) {
      return res.status(404).json({ 
        success: false, 
        message: 'Room not found' 
      });
    }

    // Update room data
    data.rooms[roomIndex] = {
      ...data.rooms[roomIndex],
      ...updatedRoom,
      id // Preserve the original ID
    };

    await writeRooms(data);

    res.json({ 
      success: true, 
      message: 'Room updated successfully',
      room: data.rooms[roomIndex]
    });
  } catch (error) {
    console.error('Room update error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during room update' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  - POST /api/register');
  console.log('  - POST /api/login');
  console.log('  - GET  /api/users');
  console.log('  - POST /api/reservations');
  console.log('  - GET  /api/reservations (admin)');
  console.log('  - POST /api/feedback');
  console.log('  - GET  /api/feedback (admin)');
  console.log('  - GET  /api/rooms');
  console.log('  - PUT  /api/rooms/:id (admin)');
});
