// side bar toggle 

/*
// Event listener to toggle sidebar on click
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('map');
    map.addEventListener('click', function() {
        console.log("SVG map clicked!"); // Check if this message appears in the browser console
        toggleSidebar();
    });
});
*/

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

//SVG Map Manipulation

document.getElementById('state18', function () {
    document.addEventListener('DOMContentLoaded', function () {
        // Select all elements that have the class 'state-border'
        var interactiveStates = document.querySelectorAll('.state-border');

        // Loop through each 'state-border' element
        interactiveStates.forEach(function (stateBorder) {
            // Add an event listener for mouseover actions on each border
            stateBorder.addEventListener('mouseover', function () {
                // Change the border's color to red when the mouse hovers over
                stateBorder.style.fill = '#FF0000';
                stateBorder.style.stroke = '#FF0000';
            });
        
            // Add an event listener for mouseout actions
            stateBorder.addEventListener('mouseout', function () {
                // Restore the border's color to black when the mouse leaves
                stateBorder.style.fill = '#AABBCC'
                stateBorder.style.stroke = '#000';
            });
        });
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

