/* eslint-disable no-return-assign */
const dummy = (blogs) => (blogs ? 1 : 0);

const totalLikes = (blogs) => blogs.reduce((acc, curr) => acc + curr.likes, 0);

const favoriteBlog = (blogs) =>
  blogs.reduce(
    (prev, current) => (prev.likes > current.likes ? prev : current),
    0
  );

const mostBlogs = (blogs) => {
  const obj = blogs.reduce(
    (acc, o) => ((acc[o.author] = (acc[o.author] || 0) + 1), acc),
    {}
  );
  // console.log(obj);
  const res = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  // console.log(res);

  const result = { author: res, blogs: obj[res] };
  return result;
};

const mostLikes = (blogs) => {
  const sumLikesByAuthor = Array.from(
    blogs.reduce(
      (m, { author, likes }) => m.set(author, (m.get(author) || 0) + likes),
      new Map()
    ),
    ([author, likes]) => ({ author, likes })
  );

  const popularAuthor = sumLikesByAuthor.reduce((max, author) =>
    max.likes > author.likes ? max : author
  );

  return popularAuthor;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
