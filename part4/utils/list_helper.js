const dummy = (blogs) => (blogs ? 1 : 0);
const totalLikes = (blogs) => blogs.reduce((acc, curr) => acc + curr.likes, 0);
module.exports = {
  dummy,
  totalLikes,
};
