import express from "express";
import { login, register } from "./../controllers/authController.js";
import User from "../models/User.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login)

// Load User model
// const User = require('../models/User');

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     // Find user by email
//     const user = await User.findOne({ email });

//     // Check if user exists
//     if (!user) {
//         // User does not exist, return error response
//         return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//         // Password is incorrect, increment the user's failed login attempts
//         user.failedLoginAttempts++;
//         await user.save();

//         if (user.failedLoginAttempts >= 3) {
//             // User has reached the maximum number of failed login attempts, send email to reset password
//             // You can use a third-party library like nodemailer to send emails
//             console.log(`Sending password reset email to ${user.email}`);

//             // Return error response
//             return res.status(400).json({ message: 'Maximum login attempts reached. Please check your email for instructions on resetting your password.' });
//         }

//         // Password is incorrect but user has not reached maximum login attempts, return error response
//         return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Password is correct, reset the user's failed login attempts and return success response
//     user.failedLoginAttempts = 0;
//     await user.save();

//     res.json({ message: 'Login successful' });
// });

export default router;