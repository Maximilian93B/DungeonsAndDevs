//Import Modules and env variables 
require('dotenv').config()
const express = require('express');
const router = express.Router();
const { google } = require('googleapis');

// Init the Youtube API and pass the auth to .env --> becuase its safe ya know !:) 
const youtube = google.youtube({
  version: 'v3', // Version of the API we are using 
  auth: process.env.YOUTUBE_API_KEY
});

//Define the Get Route 
router.get('/', async (req, res) => {
  // Okay bare with me , This gets the serach query from the request querys parameters = get the users input 
    const query = req.query.query; // Front end search term
    // Before searching we will validate the query is actually being called 
    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }

    try {
      // This is the search request, Using the docs found on YouTube Data Api v3 
        const response = await youtube.search.list({
            part: 'snippet',
            q: query, // this is for querys 
            maxResults: 10, // we can control the number of results 
            type: 'video', // we can search for other things other than vids :-) 
        });

        // Validate if the response is what we need it to be 
        if (response.data && Array.isArray(response.data.items)) {
            // Map the results to a simple structure , if we were to leave it it would be pretty messy, we can call title,vidoeId,Thumbnail
            const results = response.data.items.map(item => {
                return {
                    title: item.snippet.title, 
                    videoId: item.id.videoId, 
                    thumbnail: item.snippet.thumbnails.default.url,// url path to video 
                };
            });
            // Logging results for debugging 
            console.log('YouTube API Results:', results);

            // and we will send the results to ze usah 
            res.json(results);
        } else {
            throw new Error('Unexpected response structure');
        }
    } catch (error) {
        // More error handling because.. Its good for us !! 
        console.error('YouTube API error:', error.message);
        res.status(500).json({ error: 'Failed to fetch search results' });
    }
});

// Export as per 
module.exports = router;
