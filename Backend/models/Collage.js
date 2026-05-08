import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

export default mongoose.model("College", schema);