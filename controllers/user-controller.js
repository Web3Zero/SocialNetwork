const { User } = require("../models");

const userController = {
  //get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))   // Return the data in JSON
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  
  // get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found" });
          return;
        }
        res.json(dbUserData); // Return the data in JSON
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },


  module.exports = userController;