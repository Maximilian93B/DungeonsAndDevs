const { Challenge } = require('../../Models/challenge');
const sequelize = require('../../config/connection');

const seedChallenges = async () => {
    try{ 
        await sequelize.sync({force: true }); // Change to false in production to avoid losing data
        // Call challengeData to seed tables
        await Challenge.bulkCreate(challengeData);
        console.log('Challenges Seeded');
    } catch (error) {
        console.error('Failed to seed challenges:', error);
    }
};

seedChallenges().then(() => {
    process.exit(0); // Exit process when done
});

const challengeData = [
    {
        province_id: 0,
        type: 'a',
        title: 'Commencement Challenge',
        description: 'To embark on this adventure, prove your coding mettle by creating a repository in the format "dungeons-and-devs-yourusername."',
        content: 'Enter the link below!',
        solution: 'https://github.com/',
    },
    {
        province_id: 1,
        type: '1',
        title: 'Challenge 1',
        description: 'The islanders are happy to help you on your way but only if you prove you are worthy. Your first challenge is to answer 5 questions yay or nay. You must get at least 3 correct to pass.',
        content: [
            'Semantic HTML is only important for visual aesthetics, not for SEO or accessibility.',
            'The <main> element should be used to wrap the main content of a webpage, excluding headers, footers, and sidebars.',
            'The <nav> element is used for navigation links, and it\'s semantically correct to place a list of footer links within it.',
            'The <time> element is used to represent a specific period in time and can include date and time information.',
            'Using <div> elements for everything is considered good practice, as it provides more flexibility in styling.'
        ],
        solution: 'nay, yay, nay, yay, nay',
    },
    {
        province_id: 2,
        type: '3',
        title: 'Challenge 2',
        description: 'Now that you have proved you are worthy, the villagers point you in the direction of your second challenge that takes you deep into the glyphic glades of tag craft where a mischievous sprite has replaced all the semantic tags with divs! Using starter code, win the scroll by changing the divs to the proper use of semantic tags provided to win the Scroll of Structure that will help you in your final quest',
        content: [
            '<header class="<blank>"><h1>Hori<span class="seo">seo</span>n</h1></header>',
            '<img src="./assets/images/lead-generation.png" <blank> />',
            '<a href="#search-engine-optimization" <blank>>Search Engine Optimization</a>',
            '<section class="<blank>"></section>',
            '<footer <blank>><h2>Made with ❤️️ by Horiseon</h2></footer>'
        ],
        solution: 'header, alt, target, hero, hidden',
    },
    {
        province_id: 3,
        type: '6',
        title: 'Challenge 3',
        description: 'The Fey Folk of Flexbox have been frozen in time until someone can free them by matching the descriptions of the containers with the correct code snippet. Once complete, the spell is broken, and they can guide you to your next challenge',
        content: [
            'Align items along the main axis and distribute extra space when needed.',
            'Arrange items in a single line with the ability to wrap onto multiple lines.',
            'Make a flex container expand items to fill available free space or shrink them to prevent overflow.',
            'Place items in the cross-axis, perpendicular to the main axis.',
            'Define the initial size of a flex item before free space is distributed.'
        ],
        solution: '.container { display: flex; justify-content: space-between; }, .container { display: flex; flex-wrap: wrap; }, .container { display: flex; flex: 1; }, .container {display: flex; align-items: center;}, .item { flex: 0 1 200px;}',
    },
    {
        province_id: 4,
        type: 'a',
        title: 'Challenge 4',
        description: 'You have earned a rest! After you relax and take in the beautiful views of Cascade Canyons show us your creativity and imbed a fantasy theme image of yourself (Feel free to use AI, draw one or get into costume and take your photo',
        content: 'Upload your image here!',
        solution: '.jpg',
    },
    {
        province_id: 5,
        type: '2',
        title: 'Challenge 5',
        description: 'The Object Oracle is losing glow thanks to being hidden away so long,  you the right effect in each snippet to to restore the magic and take it to the citadel',
        content: [
            'The element will have a glowing effect by alternating box-shadow between two different levels of intensity.',
            'The background color of the element will change alternately between red and blue.',
            'The element will slide down smoothly with a duration of 1 second.',
            'The element will rotate 180 degrees and scale up to 1.2, creating a combination of rotation and scaling.'
        ],
        solution: 'a, c, c, b',
    },
];