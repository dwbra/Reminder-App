import dotenv from "dotenv";
import { google } from "googleapis";
import { events } from "./GoogleEvents.js";

dotenv.config();

//followed video structure of below repo
//https://www.youtube.com/watch?v=dFaV95gS_0M
//https://github.com/RajKKapadia/Google_Calendar_Youtube_Demo/blob/main/google_calendar.js
const credentials = JSON.parse(process.env.CREDENTIALS);
const calendarID = process.env.CALENDARID;
const scopes = "https://www.googleapis.com/auth/calendar";
const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);

export const googleCalendarInsert = async (req, res) => {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
  for await (let event of events) {
    calendar.events
      .insert({
        auth: auth,
        calendarId: calendarID,
        resource: event
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
