const div = document.querySelector('#delay')
const button = document.createElement('button');
const paragraph =document.querySelector('#para')
button.textContent = 'Log in 3 seconds';
div.appendChild(button);
const displayButtonValue = () => {
    paragraph.innerText = `This text was delayed by 3 seconds`;

    
};
setTimeout(displayButtonValue, 3000);