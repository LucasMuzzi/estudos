import { ClientController } from "@/controllers/clientController";
import { verifyJWT } from "@/middlewares/authMiddleware";
import { Router } from "express";

const router = Router();
const clientController = new ClientController();

router.post("/create-client", verifyJWT, async (req, res) => {
  console.log(req);
  await clientController.create(req, res);
});

export default router;
