import express from "express";
const router = express.Router();
import {isAdmin,isInstructor,isStudent,auth} from "../Middlewares/Auth.Middleware.js"
import { createCategory, getAllCategories, categoryPageDetails } from "../Controllers/Category.Controller.js";
import { createCourse, getAllCourses, getCourseDetails} from "../Controllers/Course.Controller.js";
import {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} from "../Controllers/SubSection.Controller.js";
import { createSection, updateSection, deleteSection} from "../Controllers/Section.Controller.js";
import { createRating, getAverageRating, getAllRating} from "../Controllers/RatingAndReview.controller.js";


// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

router.post("/create-course", auth ,isInstructor , createCourse);
router.get("/get-all-courses", getAllCourses);
router.post("/get-course-details", getCourseDetails);

router.post("/create-section", auth, isInstructor, createSection);
router.post("/update-section", auth, isInstructor, updateSection);
router.post("/delete-section", auth, isInstructor, deleteSection);

router.post("/create-sub-section", auth, isInstructor, createSubSection);
router.post("/update-sub-section", auth, isInstructor, updateSubSection);
router.post("/delete-sub-section", auth, isInstructor, deleteSubSection);


// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************

router.post("/create-rating",auth, isStudent, createRating);
router.get("/get-average-rating", getAverageRating);
router.get("/get-all-rating", getAllRating);


// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/getAllCategories", getAllCategories);
router.get("/get-category-page-details", categoryPageDetails);


export default router;
