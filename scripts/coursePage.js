function displayPdf(buttonName, pdfName) {
    const pdf = document.querySelector(`.${pdfName}`);
    let button = document.querySelector(`.${buttonName}`);

    if (button.innerText === "open"){
        button.innerText = "close";
        button.style.color = 'red';
        pdf.style.display = 'initial';
    }
    else{
        button.innerText = "open";
        button.style.color = '#5A7BD0';
        pdf.style.display = 'none';
    }
}

let darkMode = localStorage.getItem("darkMode");

if (darkMode == "enabled"){
    const body = document.body;
    const heading2 = document.getElementsByTagName("h2");
    const iTags = document.getElementsByTagName("i");
    const svgTags = document.getElementsByTagName("svg");
    const paragraphs = document.getElementsByTagName("p");

    body.classList.add("darkBody");
    for (let h2 of heading2){
        h2.classList.add("whiteFont");
    }
    for (let i of iTags){
        i.classList.add("whiteFont");
    }
    for (let svg of svgTags){
        svg.classList.add("whiteFont");
    }
    for (let p of paragraphs){
        p.style.color = "rgb(205, 205, 205)";
    }
}