function generateBackground() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const body = document.querySelector('body');

    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}
