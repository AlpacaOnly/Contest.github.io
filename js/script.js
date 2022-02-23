// function register() {
//   let username = document.getElementById('username').value;
//   let password = document.getElementById('password').value;
//   let confirm_password = document.getElementById('ConfirmPassword').value;

//   if (password != confirm_password) {
//     alert('Password does not match');
//     return;
//   }

//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://127.0.0.1:5000/register', true);
//   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
//   xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
//   xhr.send('username=' + username + '&password=' + password);
//   window.location.replace('file:///C:/Users/Admin/Desktop/Website/ContestNew.github.io/tasks.html');
// }

// function login() {
//   let username = document.getElementById('username').value;
//   let password = document.getElementById('password').value;

//   const Http = new XMLHttpRequest();
//   const url='http://127.0.0.1:5000/login?username=' + username + '&password=' + password;
//   Http.open("GET", url);
//   Http.withCredentials = true;
//   Http.setRequestHeader('Access-Control-Allow-Origin', 'true');
//   Http.setRequestHeader('Access-Control-Allow-Headers', 'true');
//   Http.setRequestHeader('Content-Type', 'application/json');
//   Http.onreadystatechange = function() {
//     if (Http.readyState == 4 && Http.status == 200)
//       console.log(Http.responseText);
//   }
//   Http.send();

// }

// function foo(response) {
//   console.log(response);
// }

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
