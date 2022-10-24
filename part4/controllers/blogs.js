const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogsRouter.post("/", async (request, response) => {
  const obj = request.body;
  if (!obj.title || !obj.url) response.status(400).send("bad request").end();
  else {
    obj.likes = obj.likes ? obj.likes : 0;
    const blog = new Blog(obj);
    const savedBlog = await blog.save();
    response.status(201).json(savedBlog);
  }
});

module.exports = blogsRouter;
