import { prisma } from "./prismaService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Usuário inválido");
    }

    const wrongPassword = await bcrypt.compare(password, user.password);

    if (!wrongPassword) {
      throw new Error("Senha inválida");
    }
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error("A variável JWT_SECRET não foi definida.");
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      jwtSecret,
      {
        expiresIn: "1d",
      }
    );
    return token;
  }
}
