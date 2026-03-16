/* Function: upDate
Logic: Changes the text and background image of the #image div.
*/
function upDate(previewPic) {
    const display = document.getElementById('image');
    
    // 1. Update text content with the alt attribute of the hovered image
    display.innerHTML = previewPic.alt;
    
    // 2. Update background image with the src of the hovered image
    display.style.backgroundImage = "url('" + previewPic.src + "')";
    
    console.log("Display updated to:", previewPic.alt);
}

/* Function: unDo
Logic: Resets the #image div to its original state.
*/
function unDo() {
    const display = document.getElementById('image');
    
    // 1. Reset background to empty
    display.style.backgroundImage = "url('')";
    
    // 2. Reset text to original message
    display.innerHTML = "Hover over an image below to display here.";
    
    console.log("Display reverted to default.");
}

/* Function: Accessibility Listeners
Logic: Links focus/blur events to the upDate/unDo logic for keyboard users.
*/
function onFocus(previewPic) {
    upDate(previewPic);
}

function onBlur() {
    unDo();
}

/* Initialization: 
Ensures all images are keyboard-accessible (WAVE requirement).
*/
window.onload = function() {
    console.log("Initializing tabindex for accessibility.");
    const images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
};
