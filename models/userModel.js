// models/userModel.js
import db from "../config/db.js";

// CREATE
export const createUserModel = (name, email, age, callback) => {
  const sql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  db.query(sql, [name, email, age], callback);
};

// READ (All)
export const getAllUsersModel = (callback) => {
  const sql = "SELECT * FROM users";
  db.query(sql, callback);
};

// READ (By ID)
export const getUserByIdModel = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [id], callback);
};

// UPDATE
export const updateUserModel = (id, name, email, age, callback) => {
  const sql = "UPDATE users SET name=?, email=?, age=? WHERE id=?";
  db.query(sql, [name, email, age, id], callback);
};

// DELETE
export const deleteUserModel = (id, callback) => {
  const sql = "DELETE FROM users WHERE id=?";
  db.query(sql, [id], callback);
};
