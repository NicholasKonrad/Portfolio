const sections = document.getElementsByClassName('projectsection');
const buttons = document.getElementById('card_projects').getElementsByClassName('navelem');

let currentTab = 0;

function isValidKey(eventcode) {
    let array = ['F11', 'F5', 'F12', 'ArrowUp', 'ArrowDown', 'ControlLeft', 'ShiftLeft'];
    for (let i = 0; array[i] < array.length; i++) {
        if (eventcode == array[i]) return true;
    }   
}

window.addEventListener('keydown', event => {   
    if (isValidKey(event.code)) event.preventDefault();    
    
    if (event.code == 'ArrowLeft' && 0 <= currentPosition-1) scrollToSection(--currentPosition);
    if (event.code == 'ArrowRight' && currentPosition+1 < anchors.length) scrollToSection(++currentPosition);

    if (currentPosition == anchors.length-1) {
        if (event.code == 'Tab' && !event.shiftKey) displayProject(++currentTab);  
        if (event.code == 'Tab' && event.shiftKey) displayProject(--currentTab);  
    }    
});

