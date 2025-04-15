const spiritAnimals = [
    "The Brave Lion", "The Silent Owl", "The Swift Cheetah", "The Gentle Deer", 
    "The Playful Dolphin", "The Wise Turtle", "The Fearless Eagle", "The Mystic Fox", 
    "The Courageous Wolf", "The Calm Panda"
];

// Selecting elements
const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const eventSelect = document.getElementById("eventSelect");

// Function to generate spirit animal
function generateSpiritAnimal() {
    let name = nameInput.value.trim();  // Get and clean input
    if (!name) {
        result.textContent = "Please enter your name!";
        return;
    }
    let randomAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    result.textContent = `${name} - ${randomAnimal}`;
}

// Event handling
function updateEventListener() {
    generateBtn.onclick = null;
    nameInput.onmouseover = null;
    nameInput.oninput = null;

    let selectedEvent = eventSelect.value;

    if (selectedEvent === "click") {
        generateBtn.onclick = generateSpiritAnimal;
    } else if (selectedEvent === "hover") {
        nameInput.onmouseover = generateSpiritAnimal;
    } else if (selectedEvent === "typing") {
        nameInput.oninput = generateSpiritAnimal;
    }
}

// Update event listener when the dropdown changes
eventSelect.addEventListener("change", updateEventListener);

// Set the initial event
updateEventListener();
