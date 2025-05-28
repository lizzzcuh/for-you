// =============================================
// STEP 1: Set up the image array 
// =============================================
// Array of all images to cycle through
// Use clean relative paths (no './') for GitHub Pages
const images = [
  'assets/image-content/image-1.png',
  'assets/image-content/image-2.png',
  'assets/image-content/image-3.png',
  'assets/image-content/image-4.png',
  'assets/image-content/image-5.png',
  'assets/image-content/image-6.png'
];

// =============================================
// STEP 2: Reference HTML elements 
// =============================================
const imageContent = document.querySelector('.image-content');  // Image container
const mainButton = document.getElementById('main-button');      // Image switch button
const finalMessage = document.querySelector('.final-message');  // Final message

// =============================================
// STEP 3: Track what image we're at 
// =============================================
let currentIndex = 0;

// =============================================
// STEP 4: Update image function 
// =============================================
function updateImage() {
  imageContent.style.opacity = 0;

  const img = new Image();
  img.src = images[currentIndex];

  img.onload = () => {
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    imageContent.style.opacity = 1;
  };
}

// =============================================
// STEP 5: Initial image display 
// =============================================
updateImage();

// =============================================
// STEP 6: Button click handler 
// =============================================
mainButton.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex < images.length) {
    updateImage();
  }

  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});
