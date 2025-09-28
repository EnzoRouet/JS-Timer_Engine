const form = document.getElementById("form");
const input = document.getElementById("choice");
const container = document.getElementById("countdownDisplay");
let value;
let totalSecondes;
let minutes;
let secondes;
let interval;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  value = input.value;
  input.value = null;
  clearInterval(interval);

  totalSecondes = value * 60;
  minutes = Math.floor(totalSecondes / 60);
  secondes = totalSecondes % 60;

  interval = setInterval(() => {
    let sec = secondes < 10 ? "0" + secondes : secondes;
    if (secondes === 0 && minutes > 0) {
      secondes = 59;
      minutes--;
      container.innerHTML = `${minutes}:${sec}`;
    } else if (secondes > 0 && minutes >= 0) {
      secondes--;
      container.innerHTML = `${minutes}:${sec}`;
    } else {
      container.innerHTML = `C'est terminé !`;
      clearInterval(interval);
    }
  }, 1000);
});
