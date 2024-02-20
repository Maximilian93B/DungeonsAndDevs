document.addEventListener('DOMContentLoaded', () => {
    // Add the 'autoplay' class to the video element
    const videoOverlay = document.getElementById('video-overlay');
    if (videoOverlay) {
        videoOverlay.classList.add('autoplay');
    }
    
    // Your existing code...

    // Add event listener to hide the video when it ends
    videoOverlay.addEventListener('ended', () => {
        videoOverlay.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {

        // Add event listener for rowboat Overlay
        const RowboatOverlay = document.getElementById('rowboat-overlay');
        if (RowboatOverlayowboatOverlay) {
            RowboatOverlayowboatOverlay.addEventListener('click', function() {
                // Handle click event for Quest2 Overlay
                console.log('Clicked Rowboat Overlay');
                // Add your logic here
            });
        }

    // Add event listener for Quest1 Overlay
    const quest1Overlay = document.getElementById('quest1-overlay');
    if (quest1Overlay) {
        quest1Overlay.addEventListener('click', function() {
            // Handle click event for Quest1 Overlay
            console.log('Clicked Quest1 Overlay');
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

    // Add event listener for Whirpool Overlay
    const whirpoolOverlay = document.getElementById('whirpool-overlay');
    if (whirpoolOverlay) {
        whirpoolOverlay.addEventListener('click', function() {
            // Handle click event for Whirpool Overlay
            console.log('Clicked Whirpool Overlay');
            const modal = document.getElementById('modal');
            // Check if modal element exists before trying to display it
            if (modal) {
                modal.style.display = 'flex'; // Show the modal
            } else {
                console.error("Error: Modal element not found.");
            }
            // Add your logic here
        });
    }

      // Add event listener for Quest3 Overlay
      const quest3Overlay = document.getElementById('quest3-overlay');
      if (quest3Overlay) {
          quest3Overlay.addEventListener('click', function() {
              // Handle click event for Quest3 Overlay
              console.log('Clicked Quest3 Overlay');
              // Add your logic here
          });
      }

          // Add event listener for Quest4 Overlay
    const quest4Overlay = document.getElementById('quest2-overlay');
    if (quest4Overlay) {
        quest4Overlay.addEventListener('click', function() {
            // Handle click event for Quest4 Overlay
            console.log('Clicked Quest4 Overlay');
            // Add your logic here
        });
    }

        // Add event listener for Quest5 Overlay
        const quest5Overlay = document.getElementById('quest2-overlay');
        if (quest5Overlay) {
            quest5Overlay.addEventListener('click', function() {
                // Handle click event for Quest5 Overlay
                console.log('Clicked Quest5 Overlay');
                // Add your logic here
            });
        }
});