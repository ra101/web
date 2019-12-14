document.addEventListener("keydown", function(event) {
  if (event.keyCode == 13 || event.keyCode == 32) {
    window.location.href = "./home.html";
  }
});

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
  }, 500 + 2 * i);
}

function Anime() {
  let text = [
    "",
    "&lt;&gt;",
    "&lt; &nbsp;&nbsp;&nbsp;&nbsp; &gt;",
    "- &nbsp;&nbsp;&nbsp;&nbsp; -",
    "&lt; RA &gt;"
  ];
  let timing = [0, 1000, 2000, 2500, 2550];
  for (let i = 0; i < text.length; i++) {
    let timer = window.setTimeout(() => {
      ra.innerHTML = text[i];
      window.clearTimeout(timer);
    }, timing[i]);
  }
  let angular = ra.cloneNode();
  angular.id = "angular";
  angular.innerHTML = "&lt;";
  let brackets = [];
  for (let i = 0; i < 3; i++) {
    let tOpen = angular.cloneNode(true);
    tOpen.style.marginLeft = "-" + (10 * i + 15) + "%";
    brackets.push(tOpen);
    document.body.appendChild(tOpen);
    let tClose = angular.cloneNode(true);
    tClose.innerHTML = "&gt;";
    tClose.style.marginLeft = 10 * i + 15 + "%";
    brackets.push(tClose);
    document.body.appendChild(tClose);
  }

  for (let i = 0; i < 3; i++) {
    let timer = window.setTimeout(() => {
      brackets[2 * i].style.display = "block";
      brackets[2 * i + 1].style.display = "block";
      window.clearTimeout(timer);
      i == 2 ? makeWormhole() : null;
    }, 3000 + i * 50);
  }
}

function makeWormhole() {
  wormhole.style.animation = "growing 5s linear";
  document.getElementById("skip").style.display = "none";
    ra.style.opacity = 0.7;
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
  return universe.appendChild(temp);
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
  return virtual.appendChild(temp);
}
