const api = "https://api.zoom.us/v2"
let token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6ImxYdmx0SUNpU3JHS3RoSDQzM3lDTlEiLCJleHAiOjE2MjYzMTMxNzUsImlhdCI6MTYyNTcwODM3NX0.YDteKCi8lOgKsZ7-wFWF3PPPyt1vdXSuRFISwVXEnIo'

var options = {
  method: "POST",
  uri: `${api}/${email}/meetings`,
  body:   {
    topic: "Consultation",
    type: 2,
    start_time: "2021-07-08T10:00:00",
    duration: 30,
    timezone: "America/Los_Angeles",
    password: "13j5d9",
    agenda: "One-time, free consulation"
  },
  auth: {
    bearer: token
  },
  headers: {
    "User-Agent": "Zoom-api-Jwt-Request",
    'Content-Type': 'application/json'
  },
  json: true //Parse the JSON string in the response
};

export const post = (email) =>
  fetch(options.uri, { headers })
    .then(res => res.json())
    .then(data => data.book)

