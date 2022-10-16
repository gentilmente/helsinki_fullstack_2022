const listHelper = require('../utils/list_helper');
const listWithOneBlog = require('./testMockData');

const blogs = [
  {
    title: 'jlkh',
    author: 'khg',
    url: 'ñkj',
    likes: 2,
  },
];
// console.log(listWithOneBlog);

describe('total likes', () => {
  test('dummy returns one', () => {
    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(blogs);
    expect(result).toBe(blogs[0].likes);
  });

  test('totalLikes returns sum of all likes', () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(36);
  });
});
