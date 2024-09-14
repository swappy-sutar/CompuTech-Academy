import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  courseName: {
    type: String,
  },
  courseDescription: {
    type: String,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  whatYouWillLearn: {
    type: String,
  },
  couresContent: [
    {
      type: Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingAndReviews: {
    type: Schema.Types.ObjectId,
    ref: "RatingAndReview",
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive value"],
  },
  thumbnail: {
    type: String,
  },
  tag:{
    type:[String],
    required:true
  },
  Category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  studentEnrolled: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Course = mongoose.model("Course", courseSchema);
