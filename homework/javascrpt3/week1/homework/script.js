// 4Wi0mTSY4tBk69UonkRtbzDkzSIFsA7F
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');  
const resultsInput = document.getElementById('results-input');
const gifContainer = document.getElementById('gif-container');

searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value.trim();
  const numResults = parseInt(resultsInput.value.trim());
  if (searchQuery && numResults) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${numResults}&api_key=4Wi0mTSY4tBk69UonkRtbzDkzSIFsA7F`)
      .then(response => response.json())
      .then(data => {
        gifContainer.innerHTML = '';
        data.data.forEach((gif) => {
          const gifElement = document.createElement('div');
          gifElement.className = 'gif';
          const gifImage = document.createElement('img');
          gifImage.src = gif.images.original.url;
          gifElement.appendChild(gifImage);
          gifContainer.appendChild(gifElement);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
});