const { User, Thought } = require('../models');

const userController = {
  getUsers(req, res) {
    User.find({})
      .then()
    res.json()
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then()
    res.json()
  },

  createUser(req, res) {
    User.create(req.body.userId)
  },

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId })
      .then()
    res.json()
  },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then()
    res.json()
  },
}
module.exports = userController;

