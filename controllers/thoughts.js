const { Thought, User } = require('../models');

const thoughtController = {
  getThoughts(req, res) {
    Thought.find()
      .then()
    res.json()

  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then()
    res.json
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then()
    res.json
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId })
      .then()
    res.json
  },

  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then()
    res.json
  },

  addReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId })
      .then()
    res.json()
  },

  removeReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId })
      .then()
    res.json()
  },
}
module.exports = thoughtController;
