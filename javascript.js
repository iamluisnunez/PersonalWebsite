// Get all of the images that can be clicked
const clickableImages = document.querySelectorAll("#my-image");

// Add a click event listener to each image
clickableImages.forEach(function (clickableImage) {
  clickableImage.addEventListener("click", function () {
    // Get the path to the image from the clicked image's data attribute
    const imagePath = clickableImage.dataset.imagePath;

    // Create a new element to hold the pop-up content
    const popup = document.createElement("div");

    // Add the popup class to the pop-up element
    popup.classList.add("popup");

    // Add the image to the pop-up content
    const popupImage = document.createElement("img");
    popupImage.src = imagePath;
    popupImage.alt = "My Image";
    popup.appendChild(popupImage);

    // Add a click event listener to the pop-up element
    popup.addEventListener("click", function () {
      // Remove the pop-up element when it's clicked
      popup.remove();
    });

    // Add the pop-up element to the page
    document.body.appendChild(popup);
  });
});
