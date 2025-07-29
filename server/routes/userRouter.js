import express from "express";
import { clerkWebhook } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/webhooks", clerkWebhook);

export default userRoutes;
