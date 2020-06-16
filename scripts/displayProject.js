const sections = document.getElementsByClassName('projectsection');
const buttons = document.getElementById('card_projects').getElementsByClassName('navelem');

function displayProject(v) { 
    currentPosition = 2;
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
        buttons[i].style.borderWidth = '0px';
    }    

    if (sections.length-1 < v) {
        sections[0].style.display = 'flex';
        buttons[0].style.borderWidth = '1px';
        currentTab = 0;
    }
    else if (v < 0) {
        sections[sections.length-1].style.display = 'flex';
        buttons[buttons.length-1].style.borderWidth = '1px';
        currentTab = sections.length - 1;
    }
    else {
        sections[v].style.display = 'flex';
        buttons[v].style.borderWidth = '1px';
        currentTab = v;
    } 
}