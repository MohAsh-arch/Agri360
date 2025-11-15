import { mockDB, dbConnected } from "../config/db.js";

// Helper to use either Mongoose or mock database
export const getDB = () => {
  if (dbConnected) {
    return null; // Use Mongoose models normally
  }
  return mockDB;
};

// Helper for User operations
export const UserDB = {
  async findOne(query) {
    const db = getDB();
    if (db) return db.findUserByEmail(query.email);
    // If Mongoose is connected, return null (let Mongoose handle it)
    return null;
  },

  async findById(id) {
    const db = getDB();
    if (db) return db.findUserById(id);
    return null;
  },

  async create(userData) {
    const db = getDB();
    if (db) return db.createUser(userData);
    return null;
  }
};

export default { getDB, UserDB };
