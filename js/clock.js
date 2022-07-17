const dateForm = document.querySelector(".clock-form span"),
clock = document.querySelector(".clock-form .clock");

function getClock() {
  const newDate = new Date(),
  days = ['SUN', 'MON', 'TUE', 'WED', 'TUR', 'FRI', 'SAT'],
  year = newDate.getFullYear(),
  month = String(newDate.getMonth() + 1).padStart(2, "0"),
  date = newDate.getDate(),
  day = newDate.getDay(),
  hour = String(newDate.getHours()).padStart(2, "0"),
  minute = String(newDate.getMinutes()).padStart(2, "0"),
  dayName = days[day]
  
  dateForm.innerText = `${year}.${month}.${date} ${dayName}`
  clock.innerText = `${hour}:${minute}`
}

getClock()
setInterval(getClock, 1000)
