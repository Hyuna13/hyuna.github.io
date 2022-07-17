const main =document.querySelector(".main"),
loginForm = document.querySelector(".login-form"),
loginInput = loginForm.querySelector("input"),
greeting = main.querySelector(".greeting h1");

function login(e) {
  const name = loginInput.value;

  if(e.key === "Enter" && name != ""){
    localStorage.setItem("name", name);
    loginForm.style.display = "none";
    showGreeting(name)
  }
}

function showGreeting(name) {

  let date = new Date(),
  hour = date.getHours();

  if(hour < 12) {
    greeting.innerText = `Good morning ${name}`;
  } else if (hour < 18) {
    greeting.innerText = `Good afternoon ${name}`;
  } else if (hour < 22) {
    greeting.innerText = `Good evening ${name}`; 
  } else {
    greeting.innerText = `Good night ${name}`;
  }

  main.style.display = "";
}

const savedName = localStorage.getItem("name")

if (savedName === null) {
  loginForm.style.display = "";
  loginInput.addEventListener('keyup', login)
} else {
  showGreeting(savedName)
}


