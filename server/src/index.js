import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// Data imports
import User from "./models/User.js";
import { dataUser } from "./data/index.js";

dotenv.config();
const app = express();

/* Middleware setup */
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(helmet()); // Add security-related HTTP headers
app.use(morgan("common")); // Log HTTP requests
app.use(cors()); // Enable CORS for all origins

// Set Cross-Origin-Embedder-Policy header using helmet
app.use(
  helmet({
    crossOriginEmbedderPolicy: { policy: "require-corp" },
  })
);

/* Routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* Mongoose setup */
const port = process.env.PORT || 7000;
const mongoURI = process.env.MONGO_URL;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);

      /* ONLY ADD DATA ONE TIME */
      // Uncomment the line below to insert data initially
      // User.insertMany(dataUser);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
