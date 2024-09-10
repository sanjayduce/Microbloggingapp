const express = require('express');
const app = express();
const port = 3000;

// In-memory storage
let posts = [];

app.use(express.json());
app.use(express.static('public'));

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Create a new post
app.post('/api/posts', (req, res) => {
  const { username, content } = req.body;
  if (!username || !content) {
    return res.status(400).json({ error: 'Username and content are required' });
  }
  const newPost = { id: posts.length + 1, username, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
