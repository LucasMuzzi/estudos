import { prisma } from "./prismaService";

export class ClientService {
  async create(name: string, email: string, password: string, user_id: number) {
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
