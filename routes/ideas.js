const express = require('express');
const router = express.Router();

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

//Get All Ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

//Get Single Idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: `Resource not found` });
  }

  res.json({ success: true, data: idea });
});

//Use post request to add idea
router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };
  ideas.push(idea);
  res.json({ success: true, data: idea });
});

//Update idea
router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: `Resource not found` });
  }
  //update text and tag
  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;
  res.json({ success: true, data: idea });
});

// Delete
router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: `Resource not found` });
  }
  //delete text and tag
  const index = ideas.indexOf(idea); ///Get index of idea
  ideas.splice(index, 1);
  res.json({ success: true, data: {} });
});
http: module.exports = router;
