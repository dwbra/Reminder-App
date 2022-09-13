import express from "express";
import process from "node:process";
import { googleCalendarInsert } from "../controllers/GoogleController.js";

//initialise express router to gain access to all routing methods
const router = express.Router();

//create a get request pathway for the frontend to pull users playlists
router.get("/", googleCalendarInsert);

// router.get(
//   "/",
//   (req, res, next) => {
//     googleCalendarInsert();
//     next();
//   },
//   () => {
//     // process.exitCode = 1;
//     process.exit();
//   }
// );

export default router;
