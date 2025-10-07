import { prisma } from "./prismaService";
import bcrypt from "bcrypt";

export class UserService {
  async create(name: string, email: string, password: string) {
    const senhaCrypto = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: senhaCrypto,
      },
    });

    return user;
  }

  async delete(email: string) {
    const user = await prisma.user.delete({
      where: { email },
    });

    return user;
  }

  async list() {
    const users = await prisma.user.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return users;
  }
}
