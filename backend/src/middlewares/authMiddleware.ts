import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      resposta: "Falha",
      mensagem: "Token não fornecido",
    });
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return res.status(401).json({
      resposta: "Falha",
      mensagem: "Token ausente ou mal formatado",
    });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET não definido no arquivo .env");
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;

    (req as any).user = {
      id: decoded.id,
      email: decoded.email,
    };

    next();
  } catch (err) {
    return res
      .status(401)
      .json({ resposta: "Falha", mensagem: "Token inválido ou expirado" });
  }
}
