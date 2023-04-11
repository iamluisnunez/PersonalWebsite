// Get all of the images that can be clicked
const clickableImages = document.querySelectorAll("#my-image");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL =
  "https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec";

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

form.addEventListener("submit", (e) => {
  console.log("pressed");
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
});
