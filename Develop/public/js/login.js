
// Form submission handling 

document.addEventListener('DOMContentLoaded', (event) => {
    // Get loginForm from loginPage.html
    const loginForm = document.getElementById('loginForm');

    // Check to see if form exists for error handling
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Gather the form data inside the event listener
            const formData = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
            };

            // Send the form data using fetch to our login endpoint
            fetch('http://localhost:3303/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                // Handle Successful login, redirect to the 'dahsboard' 
                window.location.href = '/dashboard'; // Adjust as necessary
            })
            .catch((error) => {
                console.error('Error:', error);
                // Implement error handling logic here
            });

            // Presuming closeModal is a function that closes your modal,
            // you might want to call it only after a successful login,
            // or conditionally based on the error/success of the operation.
        });
    }
});


// Handling Modal 

const modalImg = document.getElementById('modal-img');
const span = document.getElementsByClassName('close')[0];

// Functio to open modal on login page 
const openModal = () =>{
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

//function to close modal 

const closeModal = () => {
    const modal = document.getElementById('modal'); 
    modal.style.display = 'none'
}

// Event listners for the button and span with extra error handling (if) 
if (modalImg) modalImg.addEventListener('click', openModal);
 if (span) span.addEventListener('click', closeModal);


// close modal if use clicks out side the modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if(event.target === modal) {
        closeModal();
    }
}); 
