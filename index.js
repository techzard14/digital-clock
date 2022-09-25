// const daysEl = document.getElementById ("days")
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");
const bodyEl = document.querySelector("body");

function updateClock() {
  // let d = new Date().getDay()
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h > 12){
    h = h - 12;
    }

    h = h<10 ? "0" + h :  h;
    m = m<10 ? "0" + m :  m;
    s = s<10 ? "0" + s :  s;


  hoursEl.innerText = `${h}:`;
  minutesEl.innerText = m + ":";
  secondsEl.innerText = s;

  setTimeout(() => {
    updateClock()
  }, 1000);
}




