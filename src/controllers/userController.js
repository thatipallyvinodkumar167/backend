import User from "../models/userModel.js";

// ==================== CREATE USER ====================
export const create = async (req, res) => {
  try {
    const { mail } = req.body;

    const userExist = await User.findOne({ mail });
    if (userExist) {
      return res.status(409).json({ message: "This mail is already used" });
    }

    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: savedUser
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==================== GET ALL USERS ====================
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==================== GET USER BY ID ====================
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==================== UPDATE USER using put ====================
export const updateUserPut = async (req, res) => {
  try {
    const { id } = req.params;

    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==================== DELETE USER ====================
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
