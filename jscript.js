function upDate(previewPic) {
    const display = document.getElementById('image');
    
    // Update Text
    display.innerHTML = previewPic.alt;
    
    // Update Background Image
    // Ensure there are no spaces or special characters breaking the URL string
    display.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    const display = document.getElementById('image');
    
    // Reset background to none and restore default text
    display.style.backgroundImage = "none";
    display.innerHTML = "Hover over an image below to display here.";
}

// These must be defined because they are called in your HTML
function onFocus(previewPic) {
    upDate(previewPic);
}

function onBlur() {
    unDo();
}
