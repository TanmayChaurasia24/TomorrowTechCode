import { Context } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@tanmaykumarchaurasia/ttm-common"; 

export const signup = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const isvalid = signupInput.safeParse(body);

  console.log(isvalid);
  

  if(!isvalid) {
    c.status(403)
    return c.json({ error: "Invalid input" });
  }

  if (!body.email || !body.password) {
    return c.json({ message: "Please provide all credentials properly." }, 400);
  }

  const is_there = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (is_there) {
    return c.json(
      { error: "User already exists. Sign up with a different email." },
      400
    );
  }

  try {
    const created_user = await prisma.user.create({
      data: {
        email: isvalid.data?.email || "",
        password: isvalid.data?.password || "",
        username: isvalid.data?.username || "",
      },
    });

    console.log(created_user);
    

    const token = await sign({ id: created_user.id }, c.env.JWT_SECRET);

    console.log(token);
    

    return c.json({ message: "User created successfully", jwt: token });
  } catch (error: any) {
    return c.json({ error: error.message });
  }
};

export const signin = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const isvalid = signinInput.safeParse(body);

  if(!isvalid) {
    c.status(403)
    return c.json({ error: "Invalid input" });
  }

  if (!body.email || !body.password) {
    return c.json({ message: "Please provide both email and password." }, 400);
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (!user) {
    return c.json({ message: "User not found." }, 404);
  }

  if (user.password !== body.password) {
    return c.json({ message: "Invalid password." }, 401);
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ message: "Signin successful", jwt: token });
};

export const fetch_detail = async (c: Context) => {
  const prisma = new PrismaClient({
    datasources: { db: { url: c.env?.DATABASE_URL } },
  }).$extends(withAccelerate());

  const author_id = c.req.header('id'); 

  if (!author_id) {
    return c.json({
      message: "author_id not provided in the headers",
    }, 400);
  }

  try {
    const detail = await prisma.user.findUnique({
      where: { id: author_id },
    });

    if (!detail) {
      return c.json({
        message: "User not found",
      }, 404);
    }

    return c.json({
      message: "User found",
      user: detail,
    }, 200);
  } catch (error: any) {
    console.error("Error fetching user details:", error); 

    return c.json({
      message: "Error fetching user details",
      error: error.message,
    }, 500); 
  }
};
