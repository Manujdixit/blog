import { createBlogInput, updateBlogInput } from "@manujdixit/medium-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "You are not logged in",
      });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      message: "You are not logged in",
    });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct",
    });
  }

  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId),
    },
  });

  return c.json({
    id: blog.id,
  });
});

blogRouter.get("/:id/blogs", async (c) => {
  const id = c.req.param("id");
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        blogs: true,
      },
    });
    return c.json(user);
  } catch (error) {
    c.status(500);
    console.error("Error fetching user:", error);
    return c.json("Internal server error");
  }
});

// Todo: add pagination
blogRouter.get("/bulk", async (c) => {
  let page = 1;
  let limit = 10;
  try {
    page = Number(c.req.query("page"));
    limit = Number(c.req.query("limit"));

    console.log("page: " + page + ", limit:" + limit);

    const skip = (page - 1) * limit;

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs = await prisma.blog.findMany({
      skip,
      take: limit,
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    const totalblogs = await prisma.blog.count();
    console.log(totalblogs);

    const totalPages = Math.ceil(totalblogs / limit);
    console.log(totalPages);

    c.status(200);
    return c.json({
      data: blogs,
      meta: {
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    c.status(500);
    c.json({
      message: "Error while fetching blogs",
    });
  }
});

blogRouter.get("/bulk", async (c) => {
  let page = 1;
  let limit = 10;
  try {
    page = Number(c.req.query("page"));
    limit = Number(c.req.query("limit"));

    console.log("page: " + page + ", limit:" + limit);

    const skip = (page - 1) * limit;

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs = await prisma.blog.findMany({
      skip,
      take: limit,
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    const totalblogs = await prisma.blog.count();
    console.log(totalblogs);

    const totalPages = Math.ceil(totalblogs / limit);
    console.log(totalPages);

    c.status(200);
    return c.json({
      data: blogs,
      meta: {
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    c.status(500);
    c.json({
      message: "Error while fetching blogs",
    });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411); // 4
    return c.json({
      message: "Error while fetching blog post",
    });
  }
});

blogRouter.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.delete({
      where: {
        id: Number(id),
      },
    });

    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411); // 4
    return c.json({
      message: "Error while deleting blog post",
    });
  }
});
