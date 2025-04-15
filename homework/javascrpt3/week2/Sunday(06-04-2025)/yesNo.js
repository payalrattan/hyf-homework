// // fetch yes or no from this api: https://yesno.wtf/api. log out the answer

async function yesNo() {
    const response = await fetch(`https://yesno.wtf/api`);
    const data = await response.json();
    console.log(data);
    const div = document.querySelector(`#container`);
    div.innerHTML = data.answer;
    const image = document.querySelector('#img')
    image.src = data.image;

}
yesNo();

async function randomFunction() {
    try {

        const response = await fetch(`https://knajskdskj.jasdk`);
        const data = await response.json();
        console.log(data);


    }
    catch (error) {
        console.error(`something went wrong`);
    }
    finally
    {
        console.log("done execution");
        
    }
}

randomFunction();

const firstPromise = new Promise((resolve, reject) => {
    console.log("hello");
    setTimeout(() => {
        resolve("hello");
        // reject();
    }, 4000);
});


firstPromise.then((data) =>  
    {
        console.log(data);
    })
    .catch((error) => {
        console.error('something went wrong');
    });

    