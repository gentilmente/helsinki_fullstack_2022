const listHelper = require("../utils/list_helper");
const mockedBlogs = require("./testMockData");

const blogs = [
  {
    title: "jlkh",
    author: "khg",
    url: "ñkj",
    likes: 2,
  },
];
// console.log(listWithOneBlog);

describe("total likes", () => {
  test("dummy returns one", () => {
    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(blogs[0].likes);
  });

  test("totalLikes returns sum of all likes", () => {
    const result = listHelper.totalLikes(mockedBlogs);
    expect(result).toBe(36);
  });
});

describe("fovorite blog", () => {
  const fav = {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  };

  test("fav returns one with the most likes", () => {
    const result = listHelper.favoriteBlog(mockedBlogs);
    expect(result).toEqual(fav);
  });
});

describe("author with most blogs", () => {
  const prolificAuthor = {
    author: "Robert C. Martin",
    blogs: 3,
  };

  test("returns the author with most blogs", () => {
    const result = listHelper.mostBlogs(mockedBlogs);
    // console.log(result);
    expect(result).toEqual(prolificAuthor);
  });
});

describe("mostLikes(mockedBlogs)", () => {
  const popularAuthor = {
    author: "Edsger W. Dijkstra",
    likes: 17,
  };

  test("returns the author with most likes", () => {
    const result = listHelper.mostLikes(mockedBlogs);
    console.log(result);
    expect(result).toEqual(popularAuthor);
  });
});
