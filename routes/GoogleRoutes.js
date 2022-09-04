import express from "express";
import { googleCalendarInsert } from "../controllers/GoogleController.js";

//initialise express router to gain access to all routing methods
const router = express.Router();

//create a get request pathway for the frontend to pull users playlists
router.get("/", googleCalendarInsert);

export default router;
