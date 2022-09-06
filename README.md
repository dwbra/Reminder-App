# Reminder-App

A small NodeJS application that uses Google's Calendar API to push events and reminders into your personal calendar.

I wanted a way to automate reminders for myself to basically be a better human. But realistically this could be used to set reminders for yourself of whatever nature and whenever during the month that you'd like.

As I wanted this to be random I created a few additional functions to handle this. However you could easily manually set dates if you wanted to have one monthly reminder run.

#### Last step that is required on your local machine would be to set up a cronjob that runs the index.js file on the frequency that you need. For me that would be the first day of each month.

Resources to do so below:

- https://medium.com/@gattermeier/cronjobs-for-your-node-js-apps-on-macos-20d129b42c0e
- https://betterprogramming.pub/https-medium-com-ratik96-scheduling-jobs-with-crontab-on-macos-add5a8b26c30
