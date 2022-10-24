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

blogsRouter.delete("/:id", async (request, response) => {
  await Blog.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

blogsRouter.put("/:id", async (request, response) => {
  const { body } = request;
  const updatedBlog = await Blog.findByIdAndUpdate(
    request.params.id,
    { likes: body.likes },
    { new: true }
  );
  response.json(updatedBlog);
});

module.exports = blogsRouter;
