const supertest = require("supertest");
const mongoose = require("mongoose");
const helper = require("./test_helper");
const app = require("../app");

const api = supertest(app);
const Blog = require("../models/blog");

jest.setTimeout(12000);

beforeEach(async () => {
  await mongoose.connection.dropCollection("blogs");

  const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog));
  const promiseArray = blogObjects.map((blog) => blog.save());
  await Promise.all(promiseArray);
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all blogs are returned", async () => {
  const response = await api.get("/api/blogs");
  expect(response.body).toHaveLength(helper.initialBlogs.length);
});

test("check if prop id exists", async () => {
  const res = await helper.blogsInDb();
  expect(res[0].id).toBeDefined();
});

test("a valid note can be added ", async () => {
  const newBlog = {
    title: "async/await simplifies making async calls",
    author: "nobody",
    url: "http://www.example.com",
    likes: 0,
  };
  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1);
  const titles = blogsAtEnd.map((n) => n.title);
  expect(titles).toContain("async/await simplifies making async calls");
});

test("blog added without 'likes' prop, must have 0 by default", async () => {
  const newBlog = {
    title: "dummy",
    url: "http://example.com",
  };
  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const blogsAtEnd = await helper.blogsInDb();
  const { likes } = blogsAtEnd.pop();
  expect(likes).toBe(0);
});

test("blog added without 'title' or 'url' prop, must return '400 Bad Request.'", async () => {
  const newBlog = {
    // title: "entra",
    author: "nobody",
    likes: 0,
  };
  await api.post("/api/blogs").send(newBlog).expect(400);
});

afterAll(() => {
  mongoose.connection.close();
});
