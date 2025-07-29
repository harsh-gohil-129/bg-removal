import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongoDb.js";
import userRoutes from "./routes/userRouter.js";

//app config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

//initial middleware
app.use(cors());
app.use(express.json());

//api routes
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API!");
});

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
