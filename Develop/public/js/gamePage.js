document.addEventListener('DOMContentLoaded', () => {
    // Get the video element
    const videoOverlay = document.getElementById('video-overlay');
    // Add event listener to hide the video when it ends
    videoOverlay.addEventListener('ended', () => {
        // Hide the video
        videoOverlay.style.display = 'none';
    });

    // Play the video
    videoOverlay.play().then(() => {
        // Video successfully started playing
    }).catch((error) => {
        console.error('Error playing video:', error);
    });
});

document.addEventListener('DOMContentLoaded', () => {

       // Event listener for rowboat-overlay
const rowboatOverlay = document.getElementById('rowboat-object');
if (rowboatOverlay) {
    rowboatOverlay.addEventListener('click', function() {
        const rowboatModal = document.getElementById("rowboatmodal");
        if (rowboatModal) {
            rowboatModal.style.display = 'flex'; // Show the modal
        } else {
            console.error("Error: Rowboat modal element not found.");
        }
    });
} else {
    console.error("Error: Rowboat-overlay element not found.");
} 

    // Add event listener for Quest1 Overlay
    const quest1Overlay = document.getElementById('quest1-overlay');
    if (quest1Overlay) {
        RowboatOverlay.addEventListener('click', function() {
            // Handle click event for Quest 1 Overlay
            console.log('Clicked Quest 1 Overlay');
            const quest1modal = document.getElementById('quest1modal');
            // Check if modal element exists before trying to display it
            if (quest1modal) {
                modal.style.display = 'flex'; // Show the modal
            } else {
                console.error("Error: Modal element not found.");
            }
            // Add your logic here
        });
    }

    // Add event listener for Quest2 Overlay
    const quest2Overlay = document.getElementById('quest2-overlay');
    if (quest2Overlay) {
        quest2Overlay.addEventListener('click', function() {
            // Handle click event for Quest2 Overlay
            console.log('Clicked Quest2 Overlay');
            // Add your logic here
        });
    }

    // Event listener for whirpool-overlay
const whirpoolOverlay = document.getElementById('whirpool-overlay');
if (whirpoolOverlay) {
    whirpoolOverlay.addEventListener('click', function() {
        const whirpoolModal = document.getElementById("whirpoolmodal");
        if (whirpoolModal) {
            whirpoolModal.style.display = 'flex'; // Show the modal
        } else {
            console.error("Error: Whirpool modal element not found.");
        }
    });
} else {
    console.error("Error: Whirpool-overlay element not found.");
}

      // Add event listener for Quest3 Overlay
      const quest3Overlay = document.getElementById('quest3-overlay');
      if (quest3Overlay) {
        quest3Overlay.addEventListener('click', function() {
            const quest3Modal = document.getElementById("quest3modal");
            if (quest3Modal) {
               quest3Modal.style.display = 'flex'; // Show the modal
            } else {
                console.error("Error: Quest 3 modal element not found.");
            }
        });
    } else {
        console.error("Error: Quest 3-overlay element not found.");
    }

          // Add event listener for Quest4 Overlay
    const quest4Overlay = document.getElementById('quest4-overlay');
    if (quest4Overlay) {
        quest4Overlay.addEventListener('click', function() {
            const quest4Modal = document.getElementById("quest4modal");
            if (quest4Modal) {
                quest4Modal.style.display = 'flex'; // Show the modal
            } else {
                console.error("Error: Quest 4 modal element not found.");
            }
        });
    } else {
        console.error("Error: Quest 4-overlay element not found.");
    }

        // Add event listener for Quest5 Overlay
        const quest5Overlay = document.getElementById('quest5-overlay');
        if (quest5Overlay) {
            quest5Overlay.addEventListener('click', function() {
                const quest5Modal = document.getElementById("quest5modal");
                if (quest5Modal) {
                    quest5Modal.style.display = 'flex'; // Show the modal
                } else {
                    console.error("Error: Quest 5 modal element not found.");
                }
            });
        } else {
            console.error("Error: Quest 5-overlay element not found.");
        }
});