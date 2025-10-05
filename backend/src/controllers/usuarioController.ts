import { UsuarioService } from "../services/usuarioService";
import { Request, Response } from "express";

const usuarioService = new UsuarioService();

export class UsuarioController {
  async create(req: Request, res: Response) {
    try {
      const { nome, email, senha } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({
          resposta: "Falha",
          mensagem: "Dados não inválidos, verifique os campos",
        });
      }

      const usuario = await usuarioService.create(nome, email, senha);

      return res.status(201).json({
        resposta: "Sucesso",
        mensagem: "Usuário criado com sucesso!",
        dados: {
          usuario: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
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

      const usuario = await usuarioService.delete(email);

      return res.status(200).json({
        resposta: "Sucesso",
        mensagem: `Usuário ${usuario.email} removido com sucesso`,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ resposta: "Falha", mensagem: "Erro ao excluir usuário" });
    }
  }

  async list(req: Request, res: Response) {
    try {
      const usuarios = await usuarioService.list();

      return res.status(200).json({
        resposta: "Sucesso",
        dados: usuarios,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ resposta: "Falha", mensagem: "Erro ao listar usuários" });
    }
  }
}
