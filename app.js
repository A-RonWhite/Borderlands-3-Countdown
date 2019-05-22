// Set the date we're counting down to
const countDownDate = new Date('September 13, 2019 00:00:00').getTime();

// Update the count down every 1 second
const counter = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.querySelector('.counter').innerHTML = `
  <div class="col">
          <p class="title">Days</p>
          <p class="value">${days}</p>
        </div>
        <div class="col">
          <p class="title">Hours</p>
          <p class="value">${hours}</p>
        </div>
        <div class="col">
          <p class="title">Minutes</p>
          <p class="value">${minutes}</p>
        </div>
        <div class="col">
          <p class="title">Seconds</p>
          <p class="value">${seconds}</p>
        </div>
  `;

  // If the count down is finishes
  if (distance < 0) {
    clearInterval(counter);
    document.querySelector('.counter').innerHTML =
      '<h1>Stop checking the countdown and go play Borderlands</h1>';
  }
}, 1000);

const minionAudio = new Audio(
  'audio/VO_Ep13_Pt2_02_echoX_Claptrap_1-minion.mp3'
);

setTimeout(() => {
  document.querySelector('#claptrap').style.transform = 'translateY(20px)';
}, 2500);

setTimeout(() => minionAudio.play(), 3600);
