const BookModel = require("./models/Book");

module.exports = {
  Query: {
    GetAllBooks: async () => {
      return await BookModel.find();
    },
    GetBookByID: async (_, args) => {
      return await BookModel.findOne({ _id: args._id });
    },
  },
  Mutation: {
    CreateBook: async (_, args) => {
      const book = new BookModel(args);
      await book.save();
      return book;
    },
    UpdateBook: async (_, args) => {
      const book = await BookModel.findOneAndUpdate({ _id: args._id }, args, {
        new: true,
      });

      return book;
    },
    DeleteBook: async (_, args) => {
      const book = await BookModel.findOneAndDelete({ _id: args._id });
      return book ? true : false;
    },
  },
};
