import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";

// Register User
export const register = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, phone, address } = req.body;

    // Validation
    if (!fullName || !email || !password || !confirmPassword || !phone || !address) {
      return res.status(400).json({ message: "❌ Please fill in all fields" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "❌ Passwords do not match" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "❌ Email already registered" });
    }

    // Create new user
    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      address,
    });

    // Generate token
    const token = generateToken(newUser._id);

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(201).json({
      message: "✅ User registered successfully",
      token,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "❌ Email and password are required" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "❌ Invalid email or password" });
    }

    const token = generateToken(user._id);

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      message: "✅ Login successful",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Logout User
export const logout = (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "✅ Logout successful" });
};
