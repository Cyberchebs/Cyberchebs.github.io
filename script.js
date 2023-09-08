let time = document.getElementById("utctime");
setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

const currentDate = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDayIndex = currentDate.getDay();
const currentDayName = daysOfWeek[currentDayIndex];
document.getElementById("currentDayOfWeek").textContent = currentDayName;