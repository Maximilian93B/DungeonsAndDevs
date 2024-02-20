
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
    // All functions to interact with server
    fetchTerritories();
    fetchProvinces();
    fetchChallenges();
    fetchTrophies();
   
});

// API Modal --> in Whirlpool Object 
document.addEventListener('DOMContentLoaded', () => {
    // Try to attach click event listener to the whirpool-overlay object
    const whirpoolOverlay = document.getElementById('whirpool-overlay');
    if (whirpoolOverlay) {
        whirpoolOverlay.addEventListener('click', function() {
            const modal = document.getElementById('modal');
            // Check if modal element exists before trying to display it
            if (modal) {
                modal.style.display = 'flex'; // Show the modal
            } else {
                console.error("Error: Modal element not found.");
            }
        });
    } else {
        console.error("Error: Whirpool-overlay element not found.");
    }

    // Attempt to attach click event listener to the close button
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            const modal = document.getElementById('modal');
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
        const modal = document.getElementById('modal');
        if (modal) {
            if (event.target == modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        } else {
            // It's not necessary to log an error here since this is a general listener on the window
        }
    });
});




















// ALL FETCH FUNCTIONS TO GET DATA FROM THE SERVER WILL BE HELD HERE 

 // Fetch Provinces and
 async function fetchProvinces() {
    try {
        const response = await fetch('/provinces');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const provinces = await response.json();
        displayProvinces(provinces);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// display provinces 
function displayProvinces(provinces) {
    const sidebarContent = document.querySelector('.provinces-container'); // Use querySelector for class
    sidebarContent.innerHTML = '';
    provinces.forEach(province => {
        const listItem = document.createElement('li');
        listItem.textContent = province.name;
        sidebarContent.appendChild(listItem);
    });
}


// Fetch and Display Territories 

async function fetchTerritories() {
    try {
        const response = await fetch('/territories');
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const territories = await response.json();
        displayTerritories(territories);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Display Territories 
function displayTerritories(territories) {
    const sidebarContent = document.querySelector('.territory-container'); // Ensure this is the correct class name
    sidebarContent.innerHTML = ''; // Clear any existing content

    territories.forEach(territory => {
        const listItem = document.createElement('li');
        listItem.textContent = territory.name;
        sidebarContent.appendChild(listItem);
    });
}


// Fetch Challenge 

async function fetchChallenges() {
    try {
        const response = await fetch('/challenges');
        if (!response.ok) {
            throw new Error(`HTTP Error! status ${response.status}`);
        }
        const challenges = await response.json();
        displayChallenges(challenges);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Display Challenge 

function displayChallenges(challenges) {
    const sidebarContent = document.querySelector('.challenge-container');
    sidebarContent.innerHTML = '';

    challenges.forEach(challenge => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Title:</strong> ${challenge.title} <br> <strong>Type:</strong> ${challenge.type} <br> <strong>Description:</strong> ${challenge.description}`;
        sidebarContent.appendChild(listItem);
    });
}

// Fetch Trophies: 

async function fetchTrophies() {
    try {
        const response = await fetch('/trophies');
        if (!response.ok) {
            throw new Error(`HTTP Error! status ${response.status}`);
        }
        const trophies = await response.json();
        displayTrophies(trophies);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// display trophes 

function displayTrophies(trophies) {
    const sidebarContent = document.querySelector('.trophy-container');
    sidebarContent.innerHTML = '';

    trophies.forEach(trophies => {
        const listItem = document.createElement('li');
        listItem.textContent = trophies.name;
        sidebarContent.appendChild(listItem);
    });
}

