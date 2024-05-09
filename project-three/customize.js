const colorInput = document.querySelector("#colorPicker");
const cardElement = document.querySelector(".card");

colorInput.addEventListener("input", function() {
    cardElement.style.backgroundColor = colorInput.value;

const color = chroma(colorInput.value)

if (color.luminance() < 0.3) {
    cardElement.classList.add("dark")
} else {
    cardElement.classList.remove("dark")
}

});



function applyCustomization() {

    let selectedFont = document.getElementById('fontSelect').value;
    let selectedColor = document.getElementById('colorPicker').value;


    localStorage.setItem('selectedFont', selectedFont);
    localStorage.setItem('selectedColor', selectedColor);


    applyFont(selectedFont);
    applyColor(selectedColor);
}


function applyFont(font) {
    document.documentElement.style.setProperty('--font-family', font);
    document.querySelectorAll('h1, p, button').forEach(element => {
        element.style.fontFamily = font;
    });
}

function applyColor(color) {
    document.documentElement.style.setProperty('--background-color', color);
    document.querySelectorAll('h1, p, button').forEach(element => {
        element.style.color = color;
    });
}
