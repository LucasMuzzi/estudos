import { UserService } from "../services/userService";
import { Request, Response } from "express";

const userService = new UserService();

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          resposta: "Falha",
          mensagem: "Dados não inválidos, verifique os campos",
        });
      }

      const user = await userService.create(name, email, password);

      return res.status(201).json({
        resposta: "Sucesso",
        mensagem: "Usuário criado com sucesso!",
        dados: {
          user: user.name,
          email: user.email,
          password: user.password,
        },
      });
    } catch (err) {
      console.error(err);
      return res
        .status(400)
        .json({ resposta: "Falha", mensagem: "Erro ao criar curso." });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json("Dados inválidos, verifique");
      }

      const user = await userService.delete(email);

      return res.status(200).json({
        resposta: "Sucesso",
        mensagem: `Usuário ${user.email} removido com sucesso`,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ resposta: "Falha", mensagem: "Erro ao excluir usuário" });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const users = await userService.list();

      return res.status(200).json({
        resposta: "Sucesso",
        dados: users,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ resposta: "Falha", mensagem: "Erro ao listar usuários" });
    }
  }
}
