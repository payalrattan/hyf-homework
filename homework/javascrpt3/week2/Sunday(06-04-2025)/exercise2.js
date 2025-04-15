async function randomFunction() {
    try 
    {
        const response = await fetch(`https://knajskdskj.jasdk`);
        const data = await response.json();
        console.log(data);
    }
    catch (error) 
    {
        console.error(`something went wrong`);
    }
    finally 
    {
        console.log("done execution");

    }
}

randomFunction();