import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
     name:String,
     price:Number,
     category:String,
     image:String,
     title:String,
     // description:String
})

const Book = mongoose.model("Book", bookSchema);

export default Book;