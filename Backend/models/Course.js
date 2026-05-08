import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

export default mongoose.model("Course", schema);