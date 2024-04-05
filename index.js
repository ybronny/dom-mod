const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.parentNode.removeChild(mainElement);
}

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

const yourName = "YOUR-NAME"; 
newHeader.textContent = `${yourName} is the champion`;

document.body.appendChild(newHeader);