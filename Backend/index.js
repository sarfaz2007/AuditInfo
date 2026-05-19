import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import collegeRoutes from "./routes/collegeRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import webAuthRoutes from "./routes/webAuthRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/colleges", collegeRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/web-auth", webAuthRoutes);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => console.log("Server running"));