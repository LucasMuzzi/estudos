import { prisma } from "../services/prisma";
import bcrypt from "bcrypt";

export class UsuarioService {
  async create(nome: string, email: string, senha: string) {
    const senhaCrypto = await bcrypt.hash(senha, 10);
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: senhaCrypto,
      },
    });

    return usuario;
  }

  async delete(email: string) {
    const usuario = await prisma.usuario.delete({
      where: { email },
    });

    return usuario;
  }

  async list() {
    const usuarios = await prisma.usuario.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return usuarios;
  }
}
