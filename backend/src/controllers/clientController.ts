import { ClientService } from "../services/clientService";
import { Request, Response } from "express";

const clientService = new ClientService();

export class ClientController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, user_id } = req.body;

      if (!name || !email || !user_id) {
        return res.status(409).json({
          resposta: "Falha",
          mensagem: "Dados não inválidos, verifique os campos",
        });
      }

      const client = await clientService.create(name, email, password, user_id);

      return res.status(400).json({
        resposta: "Sucesso",
        mensagem: "Aluno criado com sucesso.",
        dados: client,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ resposta: "Falha", mensagem: "Erro ao criar aluno: ", err });
    }
  }
}
