import express, { Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello, from server!!!",
  });
});

app.get("/users", (req: Request, res: Response) => {
  res.json({
    message: "List of users...",
  });
});

export default app;
