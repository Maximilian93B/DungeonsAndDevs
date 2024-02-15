document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent the default form submission

            let formData = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            };
            //Normalize username to lowercase 
            formData.username = formData.username.toLowerCase();
           
            try {
                const response = await fetch('/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data)

                if (data.success) {
                    console.log('User login Successful');
                    window.location.href = '/dashboard'; // Redirect to the dashboard
                } else {
                    alert(data.message); // Display an alert with the failure message
                }
            } catch (error) {
                console.error('Fetch error:', error);
                alert('Login failed. Please try again.'); // Provide a generic error message
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