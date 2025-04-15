// Function to fetch a random dog image every 2 seconds
// function fetchDogImage() {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//       const image = document.querySelector('#dogImage');
//       image.src = data.message;
//     });
// }
// setInterval(fetchDogImage, 2000);

// Function to get all breeds and display a random breed image
function fetchDogBreed() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
      displayBreedImage(randomBreed);
    });
}

// Function to fetch and display a random image of a specific breed
function displayBreedImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => {
      const breedImage = document.querySelector('#dogImage');
      const breedName = document.querySelector('#breedName');
      breedImage.src = data.message;
      breedName.textContent = `Breed: ${breed}`;
    });
}
setInterval(fetchDogBreed, 2000);

// Fetch and display a random breed image on page load
