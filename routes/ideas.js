const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

//Get All Ideas.find
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//Get Single Idea
router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//Use post request to add idea
router.post('/', async (req, res) => {
  //Instantiate a new idea via our model
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save(); // save to DB
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

//Update idea --put request
router.put('/:id', async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  //   const idea = ideas.find((idea) => idea.id === +req.params.id);
  //   if (!idea) {
  //     return res
  //       .status(404)
  //       .json({ success: false, error: `Resource not found` });
  //   }
  //   //delete text and tag
  //   const index = ideas.indexOf(idea); ///Get index of idea
  //   ideas.splice(index, 1);

  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});
http: module.exports = router;
