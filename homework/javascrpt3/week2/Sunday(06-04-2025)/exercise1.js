// Using async await

// fetch yes or no from this api: https://yesno.wtf/api. log out the answer
const url = `https://yesno.wtf/api`;
async function yesNo() {
    const response = await fetch(url);
    console.log(`response`, response);
    const data = await response.json();
    console.log(data);
    const div = document.querySelector(`#container`);
    div.innerHTML = data.answer;
    const image = document.querySelector('#img')
    image.src = data.image;

}
yesNo();
