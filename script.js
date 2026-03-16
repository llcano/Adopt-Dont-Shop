window.onload = function() {
    console.log("Window loaded: Initializing tabindex attributes.");
    addTabFocus();
};

function addTabFocus() {
    const images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to: " + images[i].alt);
    }
}

function onFocus(previewPic) {
    console.log("Event: onFocus triggered for " + previewPic.alt);
    upDate(previewPic);
}

function onBlur() {
    console.log("Event: onBlur triggered");
    unDo();
}

function upDate(previewPic) {
    const display = document.getElementById('image');
    display.innerHTML = previewPic.alt;
    display.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    const display = document.getElementById('image');
    display.style.backgroundImage = "url('')";
    display.innerHTML = "Hover over an image below to display here.";
}
