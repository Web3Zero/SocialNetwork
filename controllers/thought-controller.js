const { Thought, User } = require("../models");

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData)) // Return the data in JSON
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one thought by it's id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found" });
          return;
        }
        res.json(dbThoughtData); // Return the data in JSON
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },




  module.exports = thoughtController;