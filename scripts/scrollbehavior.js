const anchors = document.getElementsByClassName("card_anchor");

let currentPosition = 0;

const options = {
    inline: "end", 
    behavior: "smooth"
}

function scrollToSection(i) {
    anchors[i].scrollIntoView(options);
    currentPosition = i;
}

