// Import Trophy Model 
const { Trophy } = require('../../Models/trophy');

async function seedTrophies() {
    try {
        await Trophy.bulkCreate([
            {
                name: 'Navigators Compass',
                image_url: 'path/to/navigators-compass.jpg',
                description: 'Awarded for mastering the Open Waters.',
                territory_id: 1 // Assuming territory_id 1 exists
            },
            {
                name: 'Builders Hammer',
                image_url: 'path/to/builders-hammer.jpg',
                description: 'Awarded for constructing the most resilient structures.',
                territory_id: 2 // Adjust territory IDs as necessary
            },
            {
                name: 'Scripters Scroll',
                image_url: 'path/to/scripters-scroll.jpg',
                description: 'Awarded for excellence in JavaScript.',
                territory_id: 3
            },
        ]);

        
    } catch (error) {
        console.log('Error seeding trophies:', error);
    }
}

seedTrophies();