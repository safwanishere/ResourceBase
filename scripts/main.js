function scrollDown(){
    window.scrollTo(0, 700);
}

// dark mode code
let darkMode = localStorage.getItem("darkMode");

const body = document.body;
const darkThemeToggle = document.getElementById("darkThemeToggle");
const homeIcon = document.getElementById("homeIcon");
const paragraphs = document.getElementsByTagName("p");
const buttons = document.getElementsByTagName("button");
const heading2 = document.getElementsByTagName("h2");
const iTags = document.getElementsByTagName("i");
const heroSection = document.querySelector(".heroSection");
const branches = document.querySelectorAll(".branch");
const mid1 = document.querySelector(".midOneSemOne");
const mid2 = document.querySelector(".midTwoSemOne");
const s2mid1 = document.querySelector(".midOneSemTwo")
const s2mid2 = document.querySelector(".midTwoSemTwo")
const semEnd = document.querySelector(".semOneEnd");
const heroPara = document.querySelector(".heroPara");
const mainText = document.querySelector(".mainText");
const header = document.getElementsByTagName("header");
const marqueeText = document.querySelector(".marqueeText");

function enableDarkMode(){
    body.classList.add("darkBody");
    darkThemeToggle.classList.add("whiteFont");
    homeIcon.classList.add("whiteFont");
    for (let p of paragraphs){
        p.classList.add("whiteFont");
    }
    for (let b of buttons){
        b.classList.add("darkButton");
    }
    for (let h2 of heading2){
        h2.classList.add("whiteFont");
    }
    for (let i of iTags){
        i.classList.add("whiteFont");
    }
    heroSection.style.border = "solid 5px #FA6161";
    for (let branch of branches){
        branch.style.border = "solid 5px #BB86FC";
    }
    marqueeText.classList.remove("whiteFont");
    mid1.style.color = "white";
    mid1.style.fontWeight = "lighter";
    mid2.style.color = "white";
    mid2.style.fontWeight = "lighter";
    s2mid1.style.color = "white";
    s2mid1.style.fontWeight = "lighter";
    s2mid2.style.color = "white";
    s2mid2.style.fontWeight = "lighter";
    semEnd.style.color = "white";
    semEnd.style.fontWeight = "lighter";
    heroPara.style.color = "rgb(220, 220, 220)";
    mainText.style.color = "#FA6161";
    mainText.style.fontWeight = "bold";
    for (let h of header){
        h.style.border = "solid 5px #74E1BA";
    }

    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode(){
    body.classList.remove("darkBody");
    darkThemeToggle.classList.remove("whiteFont");
    homeIcon.classList.remove("whiteFont");
    for (let p of paragraphs){
        p.classList.remove("whiteFont");
    }
    for (let b of buttons){
        b.classList.remove("darkButton");
    }
    for (let h2 of heading2){
        h2.classList.remove("whiteFont");
    }
    for (let i of iTags){
        i.classList.remove("whiteFont");
    }
    heroSection.style.border = "solid 5px #C76464";
    for (let branch of branches){
        branch.style.border = "solid 5px #AA98D4";
    }
    mid1.style.color = "black";
    mid1.style.fontWeight = "normal";
    mid2.style.color = "black";
    mid2.style.fontWeight = "normal";
    s2mid1.style.color = "black";
    s2mid1.style.fontWeight = "normal";
    s2mid2.style.color = "black";
    s2mid2.style.fontWeight = "normal";
    semEnd.style.color = "black";
    semEnd.style.fontWeight = "normal";
    heroPara.style.color ="rgb(67, 67, 67)";
    mainText.style.color = "rgb(190, 35, 21)";
    for (let h of header){
        h.style.border = "solid 5px #6CC3A4";
    }

    localStorage.setItem("darkMode", "disabled");
}

if (darkMode == "enabled"){
    enableDarkMode();
}

function toggle(){
    darkMode = localStorage.getItem("darkMode");
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
}