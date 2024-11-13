// Function to prompt user for their name and display it
function promptName() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById('displayName').textContent = `Hello, ${name}!`;
    }
}

// Function to enlarge the image when clicked
function enlargeImage() {
    const img = document.getElementById("clickableImage");
    img.classList.toggle("enlarged");
}
