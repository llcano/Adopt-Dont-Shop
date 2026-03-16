function upDate(previewPic) {
    const display = document.getElementById('image');
    
    // Update Text
    display.innerHTML = previewPic.alt;
    
    // Update Background Image
    display.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    const display = document.getElementById('image');
    
    // Reset background and text
    // Setting backgroundImage to 'none' is the standard way to clear it
    display.style.backgroundImage = "none";
    display.innerHTML = "Hover over an image below to display here.";
}

// Defining the missing functions to prevent console errors
function onFocus(previewPic) {
    upDate(previewPic);
}

function onBlur() {
    unDo();
}
