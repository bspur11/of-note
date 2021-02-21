const router = require('express').Router();
 const  notes = require("../../db/db.json")
 const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
  let saved = notes;
  console.log(saved)
  res.json(saved);
})

router.post('/api/notes', (req, res) => {
  req.body.id = uuidv4()
  // console.log(req.body)
  notes.push(req.body)
  res.json(notes);
})

router.delete('/api/notes/:id', (req, res) => {
  deleteNote(notes, req.params.id);
  res.json(notes);
})


module.exports = router;