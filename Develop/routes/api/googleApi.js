require('dotenv').config()
const express = require('express');
const router = express.Router();
const { google } = require('googleapis');

// Assuming you have configured the environment variable for YOUTUBE_API_KEY
const youtube = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY // Ensure this is correctly set in your environment
});

router.get('/', async (req, res) => {
  const query = req.query.query; // Front end search term

  try {
    const response = await youtube.search.list({
      part: 'snippet',
      q: query,
      maxResults: 10,
      type: 'video',
    });

    // Assuming the structure of the response is as expected, map the results
    if (response.data && response.data.item) {
        const results = response.data.items.map(item => ({
            title: item.snippet.title,
            videoId: item.id.videoId,
            thumbnail: item.snippet.thumbnails.default.url,
          }));
          
      res.json(results);
    
    } else {
      // If response.data or response.data.items are undefined, handle as error
      console.error('Unexpected response structure:', response);
      res.status(500).json({ error: 'Unexpected response structure' });
    }
  } catch (error) {
    console.error('YouTube API error:', error);
    res.status(500).json({ error: 'Failed to fetch search results' });
  }
});

module.exports = router;
