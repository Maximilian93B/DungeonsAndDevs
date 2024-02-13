// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', (event) => {
    
    const loginForm = document.getElementById('loginForm');

    // If the login form exists, set up an event listener for the form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent the form from submitting by default

            // Collect form data by grabbing the username and password input values
            const formData = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            };

            try {
                // Perform an asynchronous fetch request to the login endpoint
                const response = await fetch('/auth', {
                   
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                // Parse JSON response from the server
                const data = await response.json();

                // Check if login was successful based on the server's response
                if (data.success) {
                    console.log('User login Successful');
                    // Redirect the user to the dashboard page upon successful login
                    window.location.href = '/dashboard';
                } else {
                    // Display an alert if login failed
                    alert(data.message); // Show login failure message
                }
            } catch (error) {
                // Log any errors that occur during the fetch operation
                console.error('Fetch error:', error);
            }
        });
    }
});



    // Modal functionality 
    const modalImg = document.getElementById('modal-img');

    const span = document.getElementsByClassName('close')[0];

    // Function to open the modal
    const openModal = () => {
        const modal = document.getElementById('modal');
        if (modal) modal.style.display = 'block'; // Only display the modal if it exists
    };

    // Function to close the modal
    const closeModal = () => {
        const modal = document.getElementById('modal');
        if (modal) modal.style.display = 'none'; // Hide the modal if it exists
    };

    // Add event listeners to the modal trigger and close 
    if (modalImg) modalImg.addEventListener('click', openModal);
    if (span) span.addEventListener('click', closeModal);

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            closeModal();
        }
    });


// Register Button 

document.getElementById('registrationBtn').addEventListener('click', function() {
    window.location.href = 'registrationPage.html';
})