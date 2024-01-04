let prevbtn = document.querySelector("#prev");
let nextbtn = document.querySelector("#next");
let playbtn = document.querySelector(".play-pause");
const musicimg = document.querySelector(".img-area img");
const artistname = document.querySelector(".artist");
const songname = document.querySelector(".name");
const musicaudio = document.querySelector("#main-audio");

const wrapper = document.querySelector(".wrapper");

console.log(playbtn);
console.log(artistname);
console.log(songname);
let ind = 0;
window.addEventListener("load", () => {
  loadmusic();
});
function loadmusic() {
  artistname.innerText = allMusic[ind].artist;
  songname.innerText = allMusic[ind].name;
  musicimg.src = `images/${allMusic[ind].src}.jpg`;
  musicaudio.src = `songs/${allMusic[ind].src}.mp3`;
}

function playmusic() {
  wrapper.classList.add("paused");
  musicimg.classList.add("rotate");
  playbtn.querySelector("i").innerText = "pause";
  musicaudio.play();
}

function pausemusic() {
  wrapper.classList.remove("paused");
  musicimg.classList.remove("rotate");
  playbtn.querySelector("i").innerText = "play_arrow";
  musicaudio.pause();
}

playbtn.addEventListener("click", () => {
  const check = wrapper.classList.contains("paused");
  check ? pausemusic() : playmusic();
});
