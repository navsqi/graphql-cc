const mongoose = require("mongoose");

const RatingService = new mongoose.Schema({
  rating: String,
  comment: String,
});

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  release_year: Number,
  genre: String,
  reviews: [RatingService],
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
