// === Simple Screenshot App with Login (Frontend Only) ===
// NOTE: Replace 'YOUR_CRUDCRUD_ENDPOINT' and 'YOUR_RAPIDAPI_KEY' with your actual keys.

const state = {
    user: null,
    screenshots: [],
    crudBase: 'https://crudcrud.com/api/YOUR_CRUDCRUD_ENDPOINT',
    screenshotAPI: {
        url: 'https://website-screenshot6.p.rapidapi.com/screenshot',
        key: '2a8c47abcfmsh1673e0863c20e7ep14728ejsnfeb029baed87'
    }
};

// DOM Elements
const loginForm = document.querySelector('#login-form');
const appContainer = document.querySelector('#app');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const urlInput = document.querySelector('#url');
const screenshotContainer = document.querySelector('#screenshots');
const screenshotPreview = document.querySelector('#preview');

// Login handler
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    const users = await fetch(`${state.crudBase}/users`).then(res => res.json());
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        state.user = user;
        loginForm.style.display = 'none';
        appContainer.style.display = 'block';
        loadScreenshots();
    } else {
        alert('Invalid credentials');
    }
});

// Generate Screenshot
document.querySelector('#generate').addEventListener('click', async () => {
    const url = urlInput.value.trim();
    if (!url) return alert('Enter a valid URL');

    const res = await fetch(`${state.screenshotAPI.url}?url=${encodeURIComponent(url)}`, {
        headers: {
            'X-RapidAPI-Key': state.screenshotAPI.key,
            'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com'
        }
    });

    const data = await res.json();
    const imgUrl = data.screenshot;

    screenshotPreview.src = imgUrl;
    screenshotPreview.style.display = 'block';

    document.querySelector('#save').onclick = async () => {
        const body = {
            url,
            screenshotUrl: imgUrl,
            userEmail: state.user.email
        };

        const saveRes = await fetch(`${state.crudBase}/screenshots`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        alert('Screenshot saved');
        loadScreenshots();
    };
});

// Load Screenshots
async function loadScreenshots() {
    const all = await fetch(`${state.crudBase}/screenshots`).then(res => res.json());
    const mine = all.filter(item => item.userEmail === state.user.email);
    state.screenshots = mine;
    renderScreenshots();
}

// Delete Screenshot
async function deleteScreenshot(id) {
    await fetch(`${state.crudBase}/screenshots/${id}`, { method: 'DELETE' });
    loadScreenshots();
}

function renderScreenshots() {
    screenshotContainer.innerHTML = '';
    state.screenshots.forEach(s => {
        const div = document.createElement('div');
        div.className = 'screenshot';
        div.innerHTML = `
            <img src="${s.screenshotUrl}" width="300" />
            <p><strong>URL:</strong> ${s.url}</p>
            <button onclick="deleteScreenshot('${s._id}')">Delete</button>
        `;
        screenshotContainer.appendChild(div);
    });
} 

