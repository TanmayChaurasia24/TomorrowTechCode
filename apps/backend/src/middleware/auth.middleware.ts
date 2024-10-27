// /src/middlewares/auth.ts
import { Hono } from "hono";
import { verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

export const authMiddleware = async (c: any, next: any) => {
  const token = c.req.header("Authorization") || "";
  try {
    const response = await verify(token, c.env.JWT_SECRET);

    if (response) {
      c.set("userid",response.id);
      await next();
    } else {
      return c.json({ error: "Unauthorized" }, 401);
    }
  } catch (error) {
    return c.json({ error: "Unauthorized" }, 401);
  }
};
