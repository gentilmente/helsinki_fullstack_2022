const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.post("/", (request, response) => {
  const obj = request.body;
  obj.likes = obj.likes ? obj.likes : 0;
  const blog = new Blog(obj);
  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogsRouter;
