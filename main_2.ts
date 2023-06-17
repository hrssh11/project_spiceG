// Get the containers
const mainImageContainer = document.getElementById('main-image-container') as HTMLDivElement;
const thumbnailContainer = document.getElementById('thumbnail-container') as HTMLDivElement;

// Get the buttons
const allButton = document.getElementById('all-button') as HTMLButtonElement;
const redButton = document.getElementById('red-button') as HTMLButtonElement;
const greenButton = document.getElementById('green-button') as HTMLButtonElement;
const blueButton = document.getElementById('blue-button') as HTMLButtonElement;

// Get the dropdown
const colorDropdown = document.getElementById('color-dropdown') as HTMLSelectElement;

// Bind event listeners to buttons
allButton.addEventListener('click', showAllImages);
redButton.addEventListener('click', showRedImages);
greenButton.addEventListener('click', showGreenImages);
blueButton.addEventListener('click', showBlueImages);

// Bind event listener to dropdown
colorDropdown.addEventListener('change', onDropdownChange);

// Function to show all images
function showAllImages(): void {
  // Show all thumbnails
  const thumbnails = thumbnailContainer.getElementsByTagName('img');
  const thumbnailsArray: HTMLImageElement[] = [];
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnailsArray.push(thumbnails[i]);
  }

  // Show the first thumbnail as the main image
  const firstThumbnail = thumbnailContainer.querySelector('img');
  if (firstThumbnail) {
    const imageUrl = firstThumbnail.getAttribute('src');
    if (imageUrl) {
      mainImageContainer.style.backgroundImage = `url(${imageUrl})`;
    }
  }
}

// Function to show only red images
function showRedImages(): void {
  hideAllImages();
  showImagesByColor('red');
}

// Function to show only green images
function showGreenImages(): void {
  hideAllImages();
  showImagesByColor('green');
}

// Function to show only blue images
function showBlueImages(): void {
  hideAllImages();
  showImagesByColor('blue');
}

// Function to hide all images
function hideAllImages(): void {
  const thumbnails = thumbnailContainer.getElementsByTagName('img');
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].style.display = 'none';
  }
}

// Function to show images by color
function showImagesByColor(color: string): void {
  const thumbnails = thumbnailContainer.getElementsByTagName('img');
  for (let i = 0; i < thumbnails.length; i++) {
    const thumbnail = thumbnails[i];
    const thumbnailColor = thumbnail.getAttribute('data-color');
    if (thumbnailColor === color) {
      thumbnail.style.display = 'inline';
    }
  }

  // Set the first matching thumbnail as the main image
  const firstMatchingThumbnail = thumbnailContainer.querySelector(`img[data-color="${color}"]`);
  if (firstMatchingThumbnail) {
    const imageUrl = firstMatchingThumbnail.getAttribute('src');
    if (imageUrl) {
      mainImageContainer.style.backgroundImage = `url(${imageUrl})`;
    }
  }
}

// Event listener for dropdown change
function onDropdownChange(event: Event): void {
  const selectedValue = (event.target as HTMLSelectElement).value;

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
