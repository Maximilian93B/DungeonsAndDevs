
// API Modal --> in Whirlpool Object 
document.addEventListener('DOMContentLoaded', () => {
    // Try to attach click event listener to the whirpool-overlay object
    const whirpoolOverlay = document.getElementById('whirpool-overlay');
    if (whirpoolOverlay) {
        whirpoolOverlay.addEventListener('load', function() {
            const svgDoc = whirpoolOverlay.contentDocument;
            // Check if modal element exists before trying to display it
            if (svgDoc) {
                svgDoc.documentElement.addEventListener('click', function() {
                    const modal = document.getElementById("modal");
                    if (modal) {
                        modal.style.display = 'flex'; // Show the modal
                    } else {
                        console.error("Error: Modal element not found.");
                    }
        });
    }
});
    } else {
        console.error("Error: Whirpool-overlay element not found.");
    }

    // Attempt to attach click event listener to the close button
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const modal = document.getElementById("modal");
            if (modal) {
                modal.style.display = 'none'; // Hide the modal
            } else {
                console.error("Error: Modal element not found when trying to close.");
            }
        });
    } else {
        console.error("Error: Close button not found.");
    }

    // Close the modal if the user clicks anywhere outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById("modal");
        if (modal) {
            if (event.target == modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        } else {
            // It's not necessary to log an error here since this is a general listener on the window
        }
    });
});


// Row boat SVG eventlistner 

document.addEventListener('DOMContentLoaded', () => {
    // Try to attach click event listener to the rowboat-object
    const rowboatObject = document.getElementById('rowboat-object');
    if (rowboatObject) {
        rowboatObject.addEventListener('load', function() {
            const svgDoc = rowboatObject.contentDocument;
            // Check if modal element exists before trying to display it
            if (svgDoc) {
                svgDoc.documentElement.addEventListener('click', function() {
                    const modal = document.getElementById("myModal");
                    if (modal) {
                        modal.style.display = 'flex'; // Show the modal
                        rowboatObject.classList.add('black-and-white');
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

// Quest Modal event listner

document.addEventListener('DOMContentLoaded', () => {
    // Try to attach click event listener to the quest1-overlay object
    const quest1Overlay = document.getElementById('quest1-overlay');
    if (quest1Overlay) {
        quest1Overlay.addEventListener('load', function() {
            const svgDoc = quest1Overlay.contentDocument;
            // Check if modal element exists before trying to display it
            if (svgDoc) {
                svgDoc.documentElement.addEventListener('click', function() {
                    const modal = document.getElementById("questModal");
                    if (modal) {
                        modal.style.display = 'flex'; // Show the modal
                        console.log("Quest1 overlay clicked, modal displayed.");
                    } else {
                        console.error("Error: Modal element not found.");
                    }
                });
            } else {
                console.error("Error: SVG content not accessible for quest1-overlay.");
            }
        });
    } else {
        console.error("Error: Quest1-overlay element not found.");
    }

    // Attempt to attach click event listener to the close button
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const modal = document.getElementById("questModal");
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
        const modal = document.getElementById("questModal");
        if (event.target == modal) {
            modal.style.display = 'none'; // Hide the modal
            console.log("Modal closed by clicking outside.");
        }
    });
});

















