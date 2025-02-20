const createButton = document.querySelector('#createSquare')
const changeColor = document.querySelector('#changeColor')
const square = document.querySelector('#square')


createButton.addEventListener('click', () => {
    square.style.width = '100px'
    square.style.height = '100px'
    square.style.display = 'block'
})

changeColor.addEventListener('click', () => {
    square.style.backgroundColor = getRandomColor()
})

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}