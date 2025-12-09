let count = 0;
let timer = null;
const num = document.getElementById('count');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', () => {
  if (timer) return;
  timer = setInterval(() => {
    count++;
    num.textContent = count;
  }, 100);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  startBtn.disabled = false;
});