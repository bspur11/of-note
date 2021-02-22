const router = require('express').Router();
 const  notes = require("../../db/db.json")
//  const express = require("express");
 const { v4: uuidv4 } = require('uuid');
//  const app = express();

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

// to start on delete function
// router.delete('/api/notes/:id', (req, res) => {
//   deleteNote(notes, req.params.id);
//   res.json(notes);
// })


module.exports = router;