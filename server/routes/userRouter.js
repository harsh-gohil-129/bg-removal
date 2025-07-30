import express from "express";
import { clerkWebhook, userCredits } from "../controllers/userController.js";
import authUser from "../middlewares/auth.js";

const userRoutes = express.Router();

userRoutes.post("/webhooks", clerkWebhook);
userRoutes.get("/credits", authUser, userCredits);

export default userRoutes;
