fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {
        const container =document.querySelector(".container");
        container.innerHTML = `<h4>There are ${data.number} astronauts in space</h4>`;
         console.log(`There are ${data.number} astronauts in space`)
        data.people.forEach((person ,index) => {
            console.log(`They are:${person.name}`); 
            container.innerHTML += `${index+1}:${person.name}<br/>`

        });
    });

