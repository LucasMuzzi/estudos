import { ClientController } from "@/controllers/clientController";
import { Router } from "express";

const router = Router();
const clientController = new ClientController();

router.post("create-client", async (req, res) => {
  await clientController.create(req, res);
});

export default router;
