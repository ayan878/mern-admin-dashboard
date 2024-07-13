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

dotenv.config();
const app = express();

/* Middleware setup */
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// Set Cross-Origin-Embedder-Policy header
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
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
