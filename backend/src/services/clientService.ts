import { prisma } from "./prismaService";

export class ClientService {
  async create(name: string, email: string, password: string, user_id: Number) {
    if (!name || !email || !password || user_id) {
      throw new Error("Campos inválidos, verifique");
    }

    const client = await prisma.client.create({
      data: {
        name: name,
        email: email,
        password: password,
        user: {
          connect: { id: user_id },
        },
      },
    });

    return client;
  }
}
