import express from 'express';

const router = express.Router();

const posts = [
  { id: 1, title: 'Blog 1', content: 'Learn React, Redux', author: 'John' },
  {
    id: 2,
    title: 'Blog 2',
    content: 'Testing with Jest, Enzyme',
    author: 'Max'
  },
  {
    id: 3,
    title: 'Blog 3',
    content: 'Design with Sketch and Illustrator',
    author: 'Jenny'
  }
];
// list of posts
router.get('/', (req, res, next) => {
  res.send(`
    <p>Api Endpoints </p>
    <ul>
      <li>/api/posts</li>
      <li>/api/post/:id</li>
    </ul>
  `);
});

// all posts
router.get('/posts', (req, res, next) => {
  res.json({
    response: posts
  });
});

// get post detail
router.get('/post/:id', (req, res, next) => {
  // get post id
  const { id } = req.params;

  const foundPost = posts.find(post => post.id === Number(id));

  if (!foundPost) {
    res.send({
      error: true,
      message: 'Post not found'
    });
  }

  res.json({
    response: [foundPost]
  });
});

export default router;
