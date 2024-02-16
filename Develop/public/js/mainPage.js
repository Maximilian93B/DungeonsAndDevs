// side bar toggle 
// Event listener to toggle sidebar on click
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('map');
    map.addEventListener('click', function() {
        console.log("SVG map clicked!"); // Check if this message appears in the browser console
        toggleSidebar();
    });
});


// Handle Google API 
document.addEventListener('DOMContentLoaded', () => {
    // Ensure the search button is correctly hooked up
    document.getElementById('searchButton').addEventListener('click', async () => {
        const query = document.getElementById('searchQuery').value; // Get the search query from an input field
        if (!query) {
            alert('Please enter a search query.');
            return;
        }

        try {
            // Make the fetch request to your backend route
            const response = await fetch(`/search?query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const results = await response.json(); // Parse the JSON results from the backend

            // Select the results container on your HTML page
            const resultsContainer = document.getElementById('resultsContainer');
            resultsContainer.innerHTML = ''; // Clear previous results

            // Iterate over each result and create HTML elements for display
            results.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.innerHTML = `
                    <h3>${video.title}</h3>
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">Watch</a>
                `;
                resultsContainer.appendChild(videoElement); // Append the newly created element to the results container
            });
        } catch (error) {
            console.error('Fetch error:', error);
            alert('Failed to fetch search results. Please try again.');
        }
    });
});

