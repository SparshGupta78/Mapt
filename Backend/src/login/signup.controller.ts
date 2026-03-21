// src/controllers/signup.controller.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { users } from "./login.controller";

dotenv.config();

export const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: "Username and password required" });

  const existingUser = users.find((u) => u.username === username);
  if (existingUser)
    return res.status(400).json({ message: "Username already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  const secret: string = process.env.JWT_SECRET || "secret";
  const token = jwt.sign(
    { id: newUser.id, username: newUser.username },
    secret,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" } as jwt.SignOptions
  );

  res.status(201).json({ token, user: { id: newUser.id, username: newUser.username } });
};