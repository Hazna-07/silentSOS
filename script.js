// Display and buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Track input for normal calculator look
let currentInput = '';

// Your emergency contact email (replace with your test email)
const emergencyEmail = "emergency@example.com";

// Function to trigger SOS
function triggerSOS() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const message = `ALERT! The user is in danger. Location: https://www.google.com/maps?q=${latitude},${longitude}`;

        // Send email via EmailJS (you need to set up EmailJS account)
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            to_email: emergencyEmail,
            message: message
        }).then(() => {
            console.log("SOS sent successfully!");
        }).catch(err => {
            console.error("Error sending SOS:", err);
        });
    });
}

// Button click handling
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            // Trigger SOS instead of calculating
            triggerSOS();
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Keyboard shortcut (optional)
document.addEventListener('keydown', (event) => {
    if (event.key === '=') {
        triggerSOS();
    }
});
