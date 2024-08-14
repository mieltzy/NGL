document.addEventListener('DOMContentLoaded', () => {
    // Reference to the audio element
    const backgroundMusic = document.getElementById('background-music');
    
    // Ensure audio is playing
    if (backgroundMusic) {
        backgroundMusic.volume = 0.5; // Set the volume (0.0 to 1.0)
    }

    // Initialize EmailJS with your public key
    emailjs.init('nnwzsqXbrplix4VA0'); // Replace with your EmailJS public key

    document.getElementById('postButton').addEventListener('click', function() {
        const message = document.getElementById('messageInput').value;

        if (message.trim() === '') {
            alert('Please enter a message.');
            return;
        }

        // Display a loading spinner
        showLoading(true);

        // Send email using EmailJS
        emailjs.send('service_iz8t7cg', 'template_5k2ly2b', {
            message: message
        }).then(function(response) {
            alert('Your Phone was hacked');
            alert('JOkeeeeeeeeeeeeee')
            alert('Pasok na message mo idol salamat')
            document.getElementById('messageInput').value = ''; // Clear the input
            updateUIOnSuccess();
        }).catch(function(error) {
            console.error('Error:', error);
            displayError(error.message || 'Failed to send message.'); // Use displayError function
        }).finally(() => {
            // Hide the loading spinner
            showLoading(false);
        });
    });

    // Function to show or hide a loading spinner
    function showLoading(isLoading) {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.style.display = isLoading ? 'block' : 'none';
        }
    }

    // Function to update the UI on successful message send
    function updateUIOnSuccess() {
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Message successfully sent!';
        successMessage.className = 'success-message';
        document.querySelector('.post-container').appendChild(successMessage);
        setTimeout(() => successMessage.remove(), 5000); // Remove after 5 seconds
    }

    // Function to display detailed error message
    function displayError(message) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${message}`;
        errorMessage.className = 'error-message';
        document.querySelector('.post-container').appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 5000); // Remove after 5 seconds
    }
});
