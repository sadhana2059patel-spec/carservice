import User from "../models/User.js";

// Get all users (Admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      message: "✅ Users fetched successfully",
      count: users.length,
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Get single user
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }

    res.status(200).json({
      message: "✅ User fetched successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, phone, address, profileImage } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { fullName, phone, address, profileImage },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }

    res.status(200).json({
      message: "✅ User updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Delete user (Admin only)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "❌ User not found" });
    }

    res.status(200).json({
      message: "✅ User deleted successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};
