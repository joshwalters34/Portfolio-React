import dadDojoImg from "../Assets/Images/the-dad-dojo-screenshot.png";
import golfersImg from "../Assets/Images/golfersplus.png";
import weatherImg from "../Assets/Images/weather-dashboard-screenshot.png";
import schedulerImg from "../Assets/Images/Scheduler_Screenshot.png";
import employeeImg from "../Assets/Images/employee-directory-screenshot.png";
import workoutImg from "../Assets/Images/Workout_tracker_add.png";

const projects = [
  {
    "title": "The Dad DOJO",
    "description": "Working with a group on this project, I used fetch to make multiple API calls, Bulma layout and modals, and jquery.",
    "image": dadDojoImg,
    "website": "https://joshwalters34.github.io/The-Dad-DOJO2/",
    "repository": "https://github.com/joshwalters34/The-Dad-DOJO2"
  },
  {
    "title": "Golfers+",
    "description": "To complete this project,we used msyql to store data and API routes to pull and post data to the database. To access the site, you the test login josh@test.com and password: password",
    "image": golfersImg,
    "website": "https://ancient-scrubland-56476.herokuapp.com/",
    "repository": "https://github.com/joshwalters34/Golf-Assistant-App"
  },
  {
    "title": "Weather Dashboard",
    "description": "To complete this project, I used fetch to make an API call, momment.js to get the current date, as well as some jquery",
    "image": weatherImg,
    "website": "https://joshwalters34.github.io/weather_dashboard/",
    "repository": "https://github.com/joshwalters34/weather_dashboard"
  },
  {
    "title": "Workday Scheduler",
    "description": "To complete this project, I used momment.js to get the current date/time and compare it to the calendar time, as well as some jquery",
    "image": schedulerImg,
    "website": "https://joshwalters34.github.io/Work-Day-Scheduler/",
    "repository": "https://github.com/joshwalters34/Work-Day-Scheduler"
  },
  {
    "title": "Workout Tracker",
    "description": "To complete this MongoDB project, I used API calls, mongoose, express, and morgan.",
    "image": workoutImg,
    "website": "https://desolate-atoll-26792.herokuapp.com/?id=60abfa46f027be001517ac52",
    "repository": "https://github.com/joshwalters34/workout_tracker"
  },
  {
    "title": "react Employee Directory",
    "description": "To complete this React project, I used react, axios, lodash, and javascript",
    "image": employeeImg,
    "website": "https://joshwalters34.github.io/React-Employee-Directory/",
    "repository": "https://github.com/joshwalters34/React-Employee-Directory"
  }
]

export default projects;