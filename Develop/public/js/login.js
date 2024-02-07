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

// Event listners for the button and span 
modalImg.addEventListener('click', openModal);
span.addEventListener('click', closeModal);


// close modal if use clicks out side the modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if(event.target === modal) {
        closeModal();
    }
}); 
