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

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('nav a');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#f1f1f1';
        });

        item.addEventListener('mouseout', function() {
            this.style.color = '#58355E';
        });
    });
});
