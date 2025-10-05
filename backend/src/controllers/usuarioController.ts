import { Request, Response } from "express";
import { prisma } from "../services/prisma";

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

      const usuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha,
        },
      });

      return res.status(201).json({
        resposta: "Sucesso",
        mensagem: `Usuario criado com sucesso usuario: ${usuario.nome}, e-mail: ${usuario.email}`,
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: "Erro ao criar curso." });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json("Dados inválidos, verifique");
      }

      const usuario = await prisma.usuario.delete({
        where: { email },
      });

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
      const usuarios = await prisma.usuario.findMany({
        orderBy: {
          id: "desc",
        },
      });

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
