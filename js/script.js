let songs = [
  new Audio("audio/Daydreamer.mp3"),
  new Audio("audio/Warrior.mp3"),
  new Audio("audio/30dan-asyp-baramyn.mp3"),
  new Audio("audio/Rick.mp3"),
];
let current_times = [0, 0, 0, 0];

let telegram_account_number =
  document.querySelectorAll(".telegram-picture").length;

let is_music_play = false;

function play(index) {
  if (!is_music_play) return;
  songs[index].currentTime = current_times[index];
  songs[index].play();
}

function pause(index) {
  songs[index].pause();
  current_times[index] = songs[index].currentTime;
}

function toggle() {
  console.log(is_music_play);
  is_music_play = document.querySelector("#switch-toggler").checked;
  console.log(is_music_play);
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

document.querySelector("#switch-toggler").addEventListener("click", toggle);
