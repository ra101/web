let progress = document.getElementById("progressbar");
let passiveList = document.getElementsByClassName("passive")
let bg = document.getElementById("bg");

let totalHeight = document.body.scrollHeight - window.innerHeight;


function scrolly() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";

    if (passiveList.length > 0) {
        if (window.pageYOffset + (window.innerHeight / 2) > passiveList[0].offsetTop) {
            if (passiveList[0].id == "toolbox" || passiveList[0].id == "box") {
                passiveList[0].classList.replace("passive", "active-left")
            }
            else {
                passiveList[0].classList.replace("passive", "active-top")
            }
        }
        if (progressHeight >= 90) {
            for (let i = 0; i < passiveList.length; i++) {
                passiveList[i].classList.replace("passive", "active-left")
            }
        }
    }
}
function scrolla() {
    bg.style.top = window.pageYOffset;
}
addEventListener("scroll", scrolla)
addEventListener("scroll", scrolly)


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ip_add").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "https://api.ipify.org/", true);
xhttp.send();
