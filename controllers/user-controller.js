const { User, Thought } = require('../models');

const userController = {
  getUsers(req, res) {
    User.find({})
  },

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
  },

  createUser(req, res) {
    User.create(req.body.userId)
  },

  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId})
  },
 
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
  },
}
module.exports = userController;

