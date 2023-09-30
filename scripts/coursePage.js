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
