const { Thought, User } = require('../models');

const thoughtController = {
  getThoughts(req, res) {
    Thought.find({})
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
  },

  createThought(req, res) {
    Thought.create(req.body)
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId })
  },

  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
  },

  addReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId })
  },

  removeReaction(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId })
  },
}
module.exports = thoughtController;
