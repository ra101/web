let universe = document.getElementById("universe");
let dot = document.createElement("div");
dot.setAttribute("class", "dot");
dot.innerText = ".";
let wormhole = document.getElementById("pic");
let virtual = document.getElementById("virtual");
let num = document.createElement("div");
num.setAttribute("class", "number");
let ra = document.getElementById("ra");

let noOfStars = Math.floor((window.innerWidth * innerHeight) / 1500);

for (let i = 0; i < noOfStars; i++) {
  let timer = window.setTimeout(() => {
    makeStar();
    !(i % 10) ? make_virtual() : null;
    window.clearTimeout(timer);
    i == noOfStars - 1 ? Anime() : null;
  }, 300);
}

function Anime() {
  let text = [
    "",
    "< >",
    "< &nbsp;&nbsp;&nbsp;&nbsp; >",
    "- &nbsp;&nbsp;&nbsp;&nbsp; -",
    "< RA >"
  ];
  let timing = [0, 1000, 2000, 2500, 2550];
  for (let i = 0; i < text.length; i++) {
    let timer = window.setTimeout(() => {
      ra.innerHTML = text[i];
      window.clearTimeout(timer);
    }, timing[i]);
  }
  let temp = text[4];
  for (let i = 0; i < 4; i++) {
    let timer = window.setTimeout(() => {
      temp = "< &nbsp&nbsp&nbsp&nbsp " + temp + " &nbsp&nbsp&nbsp&nbsp >";
      ra.innerHTML = temp;
      window.clearTimeout(timer);
      i == 3 ? makeWormhole() : null;
    }, 2600 + i * 50);
  }
}

function makeWormhole() {
  wormhole.style.animation = "growing 5s linear";
  ra.style.opacity = 0.7;
  document.getElementById("skip").style.display = "none";

  let timer = window.setTimeout(() => {
    wormhole.style.animation = "rotate 5s linear infinite";
    ra.style.opacity = 0.5;
    window.clearInterval(timer);
    window.alert("Just jump into the damn portal!");
  }, 5000);
}

function makeStar() {
  let temp = dot.cloneNode(".");
  temp.style.top = Math.random() * 100 + "%";
  temp.style.left = Math.random() * 100 + "%";
  temp.style.fontSize = Math.random() * 10 + 9;
  temp.style.opacity = Math.min(Math.random() + 0.1, 1);
  temp.style.animation =
    "twinkle " + Math.floor(Math.random() * 10000) + "ms infinite";
  return universe.append(temp);
}

function generateBinary() {
  let n = Math.random() * 4 + 2;
  let num = "";
  for (i = 0; i < n; i++) {
    num += Math.floor(Math.random() * 2);
  }
  return num;
}

function make_virtual() {
  let temp = num.cloneNode();
  temp.innerText = generateBinary();
  temp.style.opacity = Math.random() % 0.3;
  temp.style.top = Math.random() * 100 + "%";
  temp.style.left = Math.random() * 100 + "%";
  temp.style.animation =
    "updown " + Math.floor(Math.random() * 10000) + "ms infinite";
  return virtual.append(temp);
}
