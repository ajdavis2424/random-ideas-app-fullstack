const express = require('express');
const port = 5005;

//initialize a vaiable and set to express
const app = express();

const ideas = [
  {
    id: 1,
    text: 'Blah blah 1',
    tag: 'Tech',
    username: 'Mandemsuga',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Blah blah 2',
    tag: 'Inventions',
    username: 'Mandemsuga',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'Blah blah 3',
    tag: 'Software',
    username: 'Mandemsuga',
    date: '2022-01-02',
  },
];

//create route app. http method
app.get('/', (req, res) => {
  res.json({ mesaage: 'Welcome to the RandomIdeas API' });
});
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: `Resource not found` });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
