function getDaysInCurrentMonth() {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
const daysInMonth = getDaysInCurrentMonth();

function pickDayInMonthAtRandom(daysInMonth) {
  let randomDay = Math.random() * daysInMonth;
  return Math.ceil(randomDay);
}

let day = pickDayInMonthAtRandom(daysInMonth);
let day2 = pickDayInMonthAtRandom(daysInMonth);

//Syd = GTM +10:00
export const TIMEOFFSET = "+10:00";

// Get date-time string for calender
export const dateTimeForCalander = day => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  //fix time layout for Date.parse function
  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  let newDateTime = `${year}-${month}-${day}T09:30:00.000${TIMEOFFSET}`;

  let event = new Date(Date.parse(newDateTime));

  let startDate = event;
  // run event for 1 hr
  let endDate = new Date(
    new Date(startDate).setHours(startDate.getHours() + 1)
  );

  return { start: startDate, end: endDate };
};

export const events = [
  {
    summary: "Message someone you love a kind message",
    location: "",
    description:
      "Message them immediately after seeing this notification! Don't be slack and share the love!",
    start: {
      dateTime: dateTimeForCalander(day).start,
      timeZone: "Australia/Sydney"
    },
    end: {
      dateTime: dateTimeForCalander(day).end,
      timeZone: "Australia/Sydney"
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "popup", minutes: 30 },
        { method: "popup", minutes: 10 }
      ]
    }
  },
  {
    summary: "Organise to catch up with a friend you haven't seen in awhile.",
    location: "",
    description:
      "Message them immediately after seeing this notification! Don't be slack and share the love!",
    start: {
      dateTime: dateTimeForCalander(day2).start,
      timeZone: "Australia/Sydney"
    },
    end: {
      dateTime: dateTimeForCalander(day2).end,
      timeZone: "Australia/Sydney"
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "popup", minutes: 30 },
        { method: "popup", minutes: 10 }
      ]
    }
  }
];
