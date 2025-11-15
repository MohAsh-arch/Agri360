import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { dbConnected, mockDB } from "../config/db.js";

export const protect = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) return res.status(401).json({ message: "No token" });
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "devsecret");
    
    let user;
    if (dbConnected) {
      user = await User.findById(decoded.id).select("-password");
    } else {
      user = await mockDB.findUserById(decoded.id);
    }
    
    if (!user) return res.status(401).json({ message: "Invalid token" });
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default { protect };
