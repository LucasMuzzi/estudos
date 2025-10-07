import { AuthController } from "@/controllers/authController";
import { Router } from "express";

const router = Router();
const authController = new AuthController();

router.post("/login", async (req, res) => {
  await authController.login(req, res);
});

export default router;
