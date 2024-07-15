const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();
const port = 4000;
const cors = require('cors');
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://bhardwajaditya7857:u6wnnYBzkjiqFYbh@vidoplayer.tarpssc.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB");
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
// Register endpoint
app.post("/registerdetails", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ email, password });
    await newUser.save();
    console.log(req.body);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login endpoint
app.post("/logindetails", async (req, res) => {
const {email,password}  = req.body;
console.log(req.body)

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

   // Assuming you have retrieved user data from the database
const storedPassword = user.password;

// Compare plaintext passwords
if (password === storedPassword) {
  // Passwords match
  res.json({ message: "Login successful" });
  
} else {
  // Passwords don't match
  return res.status(401).json({ message: "Invalid credentials" });
}

  } catch (error) {
    // Handle errors
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Middleware to protect routes
const authenticate = async (req, res, next) => {
  const { email, password } = req.body;

  console.log("Request Body:", req.body); // Log request body for debugging

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


// Protected route (example)
app.get("/homepage", authenticate, (req, res) => {
  res.json({ message: "Welcome to Homepage" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
