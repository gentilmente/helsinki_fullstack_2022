const dummy = (blogs) => (blogs ? 1 : 0);

const totalLikes = (blogs) => blogs.reduce((acc, curr) => acc + curr.likes, 0);

const favoriteBlog = (blogs) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  blogs.reduce(
    (prev, current) => (prev.likes > current.likes ? prev : current),
    0
  );

const mostBlogs = (blogs) => {
  const obj = blogs.reduce(
    (acc, o) => ((acc[o.author] = (acc[o.author] || 0) + 1), acc),
    {}
  );
  //console.log(obj);
  const res = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));

  //console.log(res);

  const result = { author: res, blogs: obj[res] };

  //console.log(result);
  return result;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
