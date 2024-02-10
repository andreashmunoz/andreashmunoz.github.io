
/*
function isVertical() {
    // Get the viewport width and height
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Compare width and height to determine orientation
    return height > width;
} */

function setTextSizeFromImage(imageId, textId, scale) {
    const imageElementWidth = document.getElementById(imageId).naturalWidth;
    document.getElementById(textId).style.fontSize = imageElementWidth*scale + "pt";
}