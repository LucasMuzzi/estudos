import { UserController } from "../controllers/userController";
import { Router } from "express";

const router = Router();
const usuarioController = new UserController();

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
