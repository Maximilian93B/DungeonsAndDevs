document.addEventListener('DOMContentLoaded', () => {
    // Try to attach click event listener to the rowboat-object
    const rowboatObject = document.getElementById('rowboat-object');
    if (rowboatObject) {
        rowboatObject.addEventListener('load', function() {
            const svgDoc = rowboatObject.contentDocument;
            // Check if modal element exists before trying to display it
            if (svgDoc) {
                svgDoc.documentElement.addEventListener('click', function() {
                    const myModal = document.getElementById("myModal");
                    if (myModalodal) {
                        myModal.style.display = 'flex'; // Show the modal
                        console.log("Rowboat object clicked, modal displayed.");
                    } else {
                        console.error("Error: Modal element not found.");
                    }
                });
            } else {
                console.error("Error: SVG content not accessible for rowboat-object.");
            }
        });
    } else {
        console.error("Error: Rowboat-object element not found.");
    }

    // Attempt to attach click event listener to the close button
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const modal = document.getElementById("myModal");
            if (modal) {
                modal.style.display = 'none'; // Hide the modal
                console.log("Modal closed via close button.");
            } else {
                console.error("Error: Modal element not found when trying to close.");
            }
        });
    } else {
        console.error("Error: Close button not found.");
    }

    // Close the modal if the user clicks anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = 'none'; // Hide the modal
            console.log("Modal closed by clicking outside.");
        }
    });
});

