// Get the containers
var mainImageContainer = document.getElementById('main-image-container');
var thumbnailContainer = document.getElementById('thumbnail-container');
// Get the buttons
var allButton = document.getElementById('all-button');
var redButton = document.getElementById('red-button');
var greenButton = document.getElementById('green-button');
var blueButton = document.getElementById('blue-button');
// Get the dropdown
var colorDropdown = document.getElementById('color-dropdown');
// Bind event listeners to buttons
allButton.addEventListener('click', showAllImages);
redButton.addEventListener('click', showRedImages);
greenButton.addEventListener('click', showGreenImages);
blueButton.addEventListener('click', showBlueImages);
// Bind event listener to dropdown
colorDropdown.addEventListener('change', onDropdownChange);
// Function to show all images
function showAllImages() {
    // Show all thumbnails
    var thumbnails = thumbnailContainer.getElementsByTagName('img');
    var thumbnailsArray = [];
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnailsArray.push(thumbnails[i]);
        thumbnails[i].style.display = 'inline';
    }
    // Show the first thumbnail as the main image
    var firstThumbnail = thumbnailContainer.querySelector('img');
    if (firstThumbnail) {
        var imageUrl = firstThumbnail.getAttribute('src');
        if (imageUrl) {
            mainImageContainer.style.backgroundImage = "url(" + imageUrl + ")";
        }
    }
}
// Function to show only red images
function showRedImages() {
    hideAllImages();
    showImagesByColor('red');
}
// Function to show only green images
function showGreenImages() {
    hideAllImages();
    showImagesByColor('green');
}
// Function to show only blue images
function showBlueImages() {
    hideAllImages();
    showImagesByColor('blue');
}
// Function to hide all images
function hideAllImages() {
    var thumbnails = thumbnailContainer.getElementsByTagName('img');
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.display = 'none';
    }
}
// Function to show images by color
function showImagesByColor(color) {
    var thumbnails = thumbnailContainer.getElementsByTagName('img');
    for (var i = 0; i < thumbnails.length; i++) {
        var thumbnail = thumbnails[i];
        var thumbnailColor = thumbnail.getAttribute('data-color');
        if (thumbnailColor === color) {
            thumbnail.style.display = 'inline';
        }
    }
    // Set the first matching thumbnail as the main image
    var firstMatchingThumbnail = thumbnailContainer.querySelector("img[data-color=\"" + color + "\"]");
    if (firstMatchingThumbnail) {
        var imageUrl = firstMatchingThumbnail.getAttribute('src');
        if (imageUrl) {
            mainImageContainer.style.backgroundImage = "url(" + imageUrl + ")";
        }
    }
}
// Event listener for dropdown change
function onDropdownChange(event) {
    var selectedValue = event.target.value;
    switch (selectedValue) {
        case 'all':
            showAllImages();
            break;
        case 'red':
            showRedImages();
            break;
        case 'green':
            showGreenImages();
            break;
        case 'blue':
            showBlueImages();
            break;
        default:
            showAllImages();
    }
}
