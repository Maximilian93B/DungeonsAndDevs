// side bar toggle 
// Event listener to toggle sidebar on click
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('map');
    map.addEventListener('click', function() {
        console.log("SVG map clicked!"); // Check if this message appears in the browser console
        toggleSidebar();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Get search button and results container 
    const searchButton = document.getElementById('searchButton');
    const resultsContainer = document.getElementById('results');
    // Make sure they are real 
    if (searchButton) {
        searchButton.addEventListener('click', async () => {
            // Retrieve the users search from the input field 
            const query = document.getElementById('searchQuery').value;
            // Make sure the search is not empty 
            if (!query) {
                alert('Please enter a search query.');
                return; // exit function if no search input
            }

            try {
                // Get request to our googleApi Route '/search' 
                const response = await fetch(`/search?query=${encodeURIComponent(query)}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                // issss no bueno 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse the JSON response that we recieved from the server 
                const data = await response.json();
                // Log the search results because it looks cool...or for errors ofcourse!
                console.log('Search results:', data);

                // Clear previous results
                resultsContainer.innerHTML = '';

                // Using a forEach loop we create html elements to display the title,videoId,thumbnail defined in our '/search' route 
                data.forEach(video => {
                    const videoElement = document.createElement('div');
                    videoElement.innerHTML = `
                        <h3>${video.title}</h3>
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">Watch</a>
                    `;
                    // Using appendChild we can append the new video elements to the results container -- is pretty cool ! 
                    resultsContainer.appendChild(videoElement);
                });
                // As per always with the errors 
            } catch (error) {
                console.error('Fetch error:', error);
                alert('Failed to fetch search results. Please try again.');
            }
        });
    }
});
