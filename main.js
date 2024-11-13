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
    const navItems = document.querySelectorAll('nav a, .dropbtn');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#f1f1f1';
        });

        item.addEventListener('mouseout', function() {
            this.style.color = '#58355E';
        });
    });
});
function submitForm() {
// Prevent the default form submission behavior
event.preventDefault();
// Collect form data
var name = document.getElementById('name').value;
var contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
var interests = [];
document.querySelectorAll('input[name="interests"]:checked').forEach(function (checkbox) {
interests.push(checkbox.value);
});
var comments = document.getElementById('comments').value;
// Store data in localStorage
localStorage.setItem('formData', JSON.stringify({
name: name,
contactMethod: contactMethod,
interests: interests,
comments: comments
}));
// Alert user that data has been saved
alert('Form data saved successfully!');
}
// Function to handle form reset
function resetForm() {
// Clear the form inputs
document.getElementById('name').value = '';
document.querySelectorAll('input[name="contactMethod"]').forEach(function (radio) {
radio.checked = false;
});
document.querySelectorAll('input[name="interests"]').forEach(function (checkbox) {
checkbox.checked = false;
});
document.getElementById('comments').value = '';
// Alert user that form has been cleared
alert('Form cleared successfully!');
}
