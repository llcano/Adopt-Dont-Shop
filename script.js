function upDate(previewPic) {
    const display = document.getElementById('image');
    
    // Update Text
    display.innerHTML = previewPic.alt;
    
    // Update Background Image with proper string concatenation
    display.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Debugging: Check console (F12) to see if this triggers
    console.log("Source path: " + previewPic.src);
}

function unDo() {
    const display = document.getElementById('image');
    
    // Reset background and text
    display.style.backgroundImage = "url('')";
    display.innerHTML = "Hover over an image below to display here.";
}
