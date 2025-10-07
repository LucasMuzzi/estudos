import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import clientRoutes from "./routes/clientRoutes"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);
app.use(authRoutes);
app.use(clientRoutes);

const PORT = 3030;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
