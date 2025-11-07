// controllers/userController.js
import {
  createUserModel,
  getAllUsersModel,
  getUserByIdModel,
  updateUserModel,
  deleteUserModel,
} from "../models/userModel.js";

// CREATE
export const createUser = (req, res) => {
  const { name, email, age } = req.body;
  createUserModel(name, email, age, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User created successfully!", id: result.insertId });
  });
};

// READ
export const getUsers = (req, res) => {
  getAllUsersModel((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// READ (By ID)
export const getUserById = (req, res) => {
  const { id } = req.params;
  getUserByIdModel(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
};

// UPDATE
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  updateUserModel(id, name, email, age, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User updated successfully!" });
  });
};

// DELETE
export const deleteUser = (req, res) => {
  const { id } = req.params;
  deleteUserModel(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "User deleted successfully!" });
  });
};
