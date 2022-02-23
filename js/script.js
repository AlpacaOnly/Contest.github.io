let songs = [
  new Audio("audio/Daydreamer.mp3"),
  new Audio("audio/Warrior.mp3"),
  new Audio("audio/30dan-asyp-baramyn.mp3"),
  new Audio("audio/Rick.mp3"),
];
let current_times = [0, 0, 0, 0];

let telegram_account_number =
  document.querySelectorAll(".telegram-picture").length;

function play(index) {
  songs[index].currentTime = current_times[index];
  songs[index].play();
}

function pause(index) {
  songs[index].pause();
  current_times[index] = songs[index].currentTime;
}

for (let i = 0; i < telegram_account_number; i++) {
  document
    .querySelectorAll(".telegram-picture")
    [i].addEventListener("mouseenter", function () {
      play(i);
    });
  document
    .querySelectorAll(".telegram-picture")
    [i].addEventListener("mouseleave", function () {
      pause(i);
    });
}
