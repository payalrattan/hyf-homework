const data = { characters: ['0', '1', ' 2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'] };

const dom = {
    value: document.querySelector('.value'),
    btn: document.getElementById('btn'),
    body: document.body,
};
//utils
const getRandomNumber = () => {
    return Math.floor(Math.random() * data.characters.length);
}
//handlers
const changecolorHandlers = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += data.characters[getRandomNumber()];
    }
    dom.value.innerText = color;
   dom.body.style.backgroundColor = color;

};

//events
dom.btn.addEventListener('click', changecolorHandlers);