// 'http://api.open-notify.org/astros.json'
async function getAstros() {
    const response = await fetch('http://api.open-notify.org/astros.json');
    console.log(`response`, response);
    const data = await response.json();
    console.log(data);
   const div = document.querySelector(`#container`);
   div.textContent = data.number;
   data.people.forEach((person, index) => {
       console.log(`They are:${person.name}`);
       div.innerHTML += `${index + 1}:${person.name}<br/>`;
   });  
}
getAstros();    