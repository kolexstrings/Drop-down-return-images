const selection = document.querySelector("select");
const display = document.querySelector(".image");

selection.onchange = () => {
    display.src = selection.options[selection.selectedIndex].value;
}; 