let darkMode = localStorage.getItem("darkMode");

if (darkMode == "enabled"){
    const body = document.body;
    const heading2 = document.getElementsByTagName("h2");
    const iTags = document.getElementsByTagName("i");
    const branches = document.querySelectorAll(".branch");
    const mainText = document.querySelector(".mainText");
    const header = document.getElementsByTagName("header");
    const paragraphs = document.getElementsByTagName("p");

    body.classList.add("darkBody");
    for (let h2 of heading2){
        h2.classList.add("whiteFont");
    }
    for (let i of iTags){
        i.classList.add("whiteFont");
    }
    for (let branch of branches){
        branch.style.border = "solid 5px #BB86FC";
    }
    mainText.style.color = "#FA6161";
    mainText.style.fontWeight = "bold";
    for (let h of header){
        h.style.border = "solid 5px #74E1BA";
    }
    for (let p of paragraphs){
        p.style.color = "rgb(205, 205, 205)";
    }
}