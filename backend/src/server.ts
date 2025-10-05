import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);

const PORT = 3030;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
