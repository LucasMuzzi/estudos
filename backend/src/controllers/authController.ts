import { AuthService } from "@/services/authService";
import { Request, Response } from "express";

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const data = await authService.login(email, password);

      return res.status(201).json({
        resposta: "Sucesso",
        dados: data,
      });
    } catch (err) {
      return res.status(400).json({
        resposta: "Falha",
        mensagem: `Erro ao efetuar login: ${err}`,
      });
    }
  }
}
