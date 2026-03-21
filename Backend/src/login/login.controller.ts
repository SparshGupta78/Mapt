// src/controllers/login.controller.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface User {
  id: number;
  username: string;
  password: string;
}

// For demo purposes, replace with DB in production
const users: User[] = [];

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const secret: string = process.env.JWT_SECRET || "secret";
  const token = jwt.sign(
    { id: user.id, username: user.username },
    secret,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" } as jwt.SignOptions
  );

  res.json({ token, user: { id: user.id, username: user.username } });
};

// Export users array so signup can access it
export { users };