import { UsuarioController } from "../controllers/usuarioController";
import { Router } from "express";

const router = Router();
const usuarioController = new UsuarioController();

router.post("/create-user", async (req, res) => {
  await usuarioController.create(req, res);
});

router.post("/delete-user", async (req, res) => {
  await usuarioController.delete(req, res);
});

router.get("/get-users", async (req, res) => {
  await usuarioController.list(req, res);
});

export default router;
