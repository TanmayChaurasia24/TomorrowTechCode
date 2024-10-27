import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { create_blog_input, update_blog_input } from "@tanmaykumarchaurasia/ttm-common";

export const create_blog = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const body = await c.req.json();
  const isvalid = create_blog_input.safeParse(body);

  if(!isvalid) {
    c.status(403);
    return c.json({ error: "Invalid request" });
  }

  if (!body.title) {
    return c.json(
      {
        message: "title is required",
      },
      500
    );
  }

  if (!body.content) {
    return c.json(
      {
        message: "content is required",
      },
      500
    );
  }

  try {
    const author_id = c.get("userid");
    const created_blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: author_id
      },
    });

    if (!created_blog) {
      return c.json(
        {
          message: "Failed to create blog post",
        },
        500
      );
    }

    return c.json(
      {
        message: "Blog post created successfully",
        blogid: created_blog.id,
        authorid: created_blog.authorId,
      },
      201
    );
  } catch (error: any) {
    return c.json({ message: error.message }, 500);
  }
};

export const update_blog = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const body = await c.req.json();
  const isvalid = update_blog_input.safeParse(body);

  if(!isvalid) {
    c.status(403);
    return c.json({ error: "Invalid request" });
  }

  if (!body.title) {
    return c.json(
      {
        message: "title is required",
      },
      500
    );
  }

  if (!body.content) {
    return c.json(
      {
        message: "content is required",
      },
      500
    );
  }

  try {
    const updated_blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    if (!updated_blog) {
      return c.json(
        {
          message: "Failed to update blog post",
        },
        500
      );
    }

    return c.json(
      {
        message: "Blog post updated successfully",
        blogid: updated_blog.id,
        authorid: updated_blog.authorId,
      },
      201
    );
  } catch (error: any) {
    return c.json({ message: error.message }, 500);
  }
};

export const get_blog = async (c: Context) => {
  const body = await c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const curr_blog = await prisma.post.findFirst({
      where: {
        id: body,
      },
    });

    if (!curr_blog) {
      return c.json(
        {
          message: "Failed to fetch blog post",
        },
        500
      );
    }

    return c.json(
      {
        curr_blog,
      },
      201
    );
  } catch (error: any) {
    return c.json({ message: error.message }, 500);
  }
};

export const get_all_blogs = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const all_post = await prisma.post.findMany();

    if (!all_post) {
      return c.json(
        {
          message: "Failed to fetch all blog posts",
        },
        500
      );
    }

    return c.json(
      {
        all_post,
      },
      201
    );
  } catch (error: any) {
    return c.json(
      {
        error: error.message,
      },
      500
    );
  }
};

export const get_author_blog = async(c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const info = await c.req.header();

  if(!info) {
    return c.json({message: "no information received"},403);
  }

  try {
    const author_id = info.id;

    const allpost = await prisma.post.findMany({
      where: {
        authorId: author_id
      }
    })

    return c.json({
      message: "fetched all the post",
      result: allpost
    },201);
  } catch (error) {
    return c.json({
      message: "error while fetching blogs of the user"
    },403);
  }

}
