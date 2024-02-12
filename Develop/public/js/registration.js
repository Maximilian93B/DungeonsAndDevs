// JavaScript file for handling user registration

// Wait for the DOM 
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    // If reg  form exists set up event listener 
    if (registrationForm) {
        registrationForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission 

            // Collect the data from the form and put in an object 
            const formData = {
                username: document.getElementById('username').value,
                email: document.getElementById('email').value, 
                password: document.getElementById('password').value,
            };

            try {
                // Try to handle fetch request to registration endpoint 
                const response = await fetch ('/register', {
                    method: 'POST', // Make a POST request 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // Convert to JSON 
                    body: JSON.stringify(formData),
                });

                // Parse JSON 
                const data = await response.json();

                // Check if registration was successful based on the server response
                if (data.success) {
                    // If successful, redirect the user --> where do we want to go from here ?? 
                    window.location.href = '/registration-success.html';
                } else {
                    // If registration fail
                    alert(data.message);
                }
            } catch (error) {
                // Log any errors that occur during the fetch operation
                console.error('Fetch error:', error);
            }
        });
    }
});

