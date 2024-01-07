const colorInput = document.getElementById('text');
const changeColorButton = document.getElementById('btn');
const square = document.getElementById('square');

changeColorButton.addEventListener('click', () => {
    const color = colorInput.value;

    square.style.backgroundColor = color;
});

const rangeInput = document.getElementById('range');
const circle = document.getElementById('circle');

rangeInput.addEventListener('input', () => {
    const rangeValue = rangeInput.value;

    circle.style.width = `${rangeValue}%`;
    circle.style.height = `${rangeValue}%`;

    document.getElementById('range-span').textContent = rangeValue;
});




