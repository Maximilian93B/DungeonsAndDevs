// JavaScript file for handling user registration

// Wait for the DOM to be loaded before starting the script 
document.addEventListener('DOMContentLoaded', () => {
    // Grab the reg form 
    const registrationForm = document.getElementById('registrationForm');

    // If reg form exists set up event listener 
    if (registrationForm) {
        registrationForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission 

            // Collect the data from the form and put in an object by adding .value  
            const formData = {
                username: document.getElementById('username').value.toLowerCase(), // Convert to lowercase to match expectation
                email: document.getElementById('email').value, 
                password: document.getElementById('password').value,
            };
            

            try {
                //Here we are making a POST request to the server which will then query the db 
                const response = await fetch ('/register', {
                    method: 'POST', // Make a POST request 
                    headers: {
                        'Content-Type': 'application/json' // this tells the server that the request body is JSON ! 
                    },
                    // Convert the form data to JSON 
                    body: JSON.stringify(formData),
                });

                // Parse the response from our request to the server  
                const data = await response.json();

                // Check if the resistration was successful --> the server will respond 
                if (data.success) {
                    // If successful, redirect the user --> login page to verify regsitration  
                    // By using window.href we can call our login page 
                    window.location.href ='/loginPage.html';
                } else {
                    // If registration fails disaply error message 
                    alert(data.message);
                }
            } catch (error) {
                // Log any errors that occur during the entire ordeal
                console.error('Fetch error:', error);
            }
        });
    }
});

