function scrollDown(){
    window.scrollTo(0, 700);
}

function switchTheme(){
    const themeButton = document.querySelector(".themeChanger");
    const icon = themeButton.querySelector("i");

    const body = document.querySelector("body");
    const h1 = document.querySelectorAll("h1");
    const paraElement = document.querySelectorAll("p");
    const h2 = document.querySelectorAll("h2");
    const button = document.querySelectorAll("button");
    const ital = document.querySelectorAll("i");
    const mainText = document.querySelector(".mainText");
    const heroSection = document.querySelector(".heroSection");
    const heroImg = document.querySelector("img");
    const heroSpan = document.querySelector("h1").querySelector("span");
    const branch = document.querySelectorAll(".branch");
    const semBlock = document.querySelectorAll(".semBlock");
    const redirectContainer = document.querySelector(".redirectContainer");

    if (icon.classList.contains('fa-moon')){
        console.log("going dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        body.style.backgroundColor = "#2A2D43";
        for (let i = 0; i < h1.length; i++){
            h1[i].style.color = "rgb(255, 246, 235)";
        }
        for (let i = 0; i < h2.length; i++){
            h2[i].style.color = "rgb(255, 246, 235)";
        }
        for (let i = 0; i < paraElement.length; i++){
            paraElement[i].style.color = "rgb(255, 246, 235)";
        }
        for (let i = 0; i < button.length; i++){
            button[i].style.color = "rgb(255, 246, 235)";
            button[i].style.borderColor = "#4D6CFA";
        }
        for (let i = 0; i < ital.length; i++){
            ital[i].style.color = "rgb(255, 246, 235)";
        }
        for (let i = 0; i < branch.length; i++){
            branch[i].style.borderColor = "#D972FF";
        }
        for (let i = 0; i < semBlock.length; i++){
            semBlock[i].style.borderColor = "#8CFFDA";
        }
        mainText.style.color = "#CD533B";
        heroSpan.style.color = "antiquewhite"
        heroSection.style.borderColor = "#CD533B";
        heroImg.style.filter = "contrast(120%)";
        redirectContainer.style.backgroundColor = "#ffffb7";
        redirectContainer.querySelector("h2").style.color = "black";
    }
    else {
        console.log("switchin to the bright side");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        body.style.backgroundColor = "#ffecec";
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.color = "black";
        }
        for (let i = 0; i < h2.length; i++){
            h2[i].style.color = "black";
        }
        for (let i = 0; i<paraElement.length; i++){
            paraElement[i].style.color = "rgb(67, 67, 67)";
        }
        for (let i = 0; i < button.length; i++){
            button[i].style.color = "rgb(67, 67, 67)";
            button[i].style.borderColor = "#5A7BD0";
        }
        for (let i = 0; i < ital.length; i++){
            ital[i].style.color = "black";
        }
        for (let i = 0; i < branch.length; i++){
            branch[i].style.borderColor = "#AA98D4";
        }
        for (let i = 0; i < semBlock.length; i++){
            semBlock[i].style.borderColor = "#E29D9F";
        }
        mainText.style.color = "rgb(190, 35, 21)";
        heroSpan.style.color = "rgb(51, 51, 51)";
        heroSection.style.color = "#C76464";
        heroImg.style.filter = "contrast(100%)";
        redirectContainer.style.backgroundColor = "#ffffb7";
        redirectContainer.querySelector("h2").style.color = "black";
    }
}