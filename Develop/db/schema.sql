-- This is the scheme we used to base our Databse off of --
-- These tables are foundation of our Models


CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    points INT DEFAULT 0,
    sign_up_date DATETIME,
    last_login DATETIME,
    profile TEXT
);

-- IS QUESTS --
CREATE TABLE territories (
    territory_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    icon VARCHAR(50)
);

-- IS CHALLENGE DESCRIPTIONS --
CREATE TABLE provinces (
    province_id INT AUTO_INCREMENT PRIMARY KEY,
    territory_id INT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    FOREIGN KEY (territory_id) REFERENCES territories(territory_id)
);

-- These are our Challenges in 'QUESTS'  -- 
CREATE TABLE challenges (
    challenge_id INT AUTO_INCREMENT PRIMARY KEY,
    province_id INT,
    type ENUM('quiz', 'coding'),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content TEXT,
    solution TEXT,
    FOREIGN KEY (province_id) REFERENCES provinces(province_id) -- Corrected reference to province_id
);


CREATE TABLE user_territories (
    user_territory_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    territory_id INT,
    is_unlocked BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (territory_id) REFERENCES territories(territory_id)
);


CREATE TABLE user_progress (
    progress_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    challenge_id INT,
    status VARCHAR(50),
    last_accessed DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (challenge_id) REFERENCES challenges(challenge_id)
);


CREATE TABLE user_profile (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    territory_id INT,
    challenge_id INT,
    username VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (territory_id) REFERENCES territories(territory_id),
    FOREIGN KEY (challenge_id) REFERENCES challenges(challenge_id)
);


CREATE TABLE trophies (
    trophy_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    description TEXT,
    territory_id INT,
    FOREIGN KEY (territory_id) REFERENCES territories(territory_id)
);


CREATE TABLE user_achievements (
    achievement_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    trophy_id INT,
    date_earned DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (trophy_id) REFERENCES trophies(trophy_id)
);


CREATE TABLE user_trophies (
    user_profile_id INT,
    trophy_id INT,
    awarded_on DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_profile_id, trophy_id),
    FOREIGN KEY (user_profile_id) REFERENCES user_profile(profile_id),
    FOREIGN KEY (trophy_id) REFERENCES trophies(trophy_id)
);




/* MANUALLY RUN THESE QUERIES IN YOUR DB FOR TESTING 

// Always run USE 'your db name ' ;

and thnen pass the insert querys, this data is just for testing but we can put the data where it needs to be later. 


//          territories table 

    INSERT INTO territories (name, description, icon) VALUES
('Open Waters', 'Commencement Challenge', 'rowboat Icon'),
('The Isles of Structure & Styling', 'Quest 1-HTML and CSS', 'territory Icon'),
('Handler Highlands', 'Quest 2-JavaScript', 'territory Icon'),
('Eerie Express', 'Quest 3-Express.js', 'territory Icon'),
('SQL Summit', 'Quest 4-SQL', 'territory Icon'),
('Final Quest', 'Quest 5-All Topics', 'territory Icon');

//          provinces table 

    NSERT INTO provinces (territory_id, name, description) VALUES
(1, 'Open Waters', 'Repo-Enter Link'),
(2, 'Semantic Shores', 'Quiz-True or False'),
(2, 'Glyphic Glades of Tagcraft', 'Quiz-Fill in the blank'),
(3, 'Fey Folk of Flexbox', 'Quiz-Matching'),
(3, 'Cascade Canyons', 'Repo-Upload Photo'),
(3, 'Animation Abyss', 'Quiz-Multiple Choice'),
(4, 'Function Foothills', 'Quiz-Doesn't Belong'),
(4, 'Domain of Draconic Manipulation', 'Quiz-Fill in the Blank'),
(4, 'Promise Peaks', 'Quiz-Multiple Choice'),
(5, 'Mystic Mists of Middleware', 'Quiz-Fill in the Blank'),
(5, 'Server StrongHold', 'Repo-Honor System'),
(6, 'Quag-Mires of Query', 'Quiz-Matching'),
(6, 'Tables Tower', 'Quiz-Sorting'),
(7, 'Citadel of Syntax', 'Quiz-20 Questions');
                    
                    
//           challenges table 

INSERT INTO challenges (province_id, type, title, description, content, solution) VALUES
(1, 'coding', 'Navigating Open Waters', 'Complete the coding challenge to navigate through Open Waters.', 'Code snippet here.', 'Solution code here.'),
(2, 'quiz', 'True or False: Semantic Shores', 'Answer true or false questions about Semantic Shores.', 'Question list here.', 'Correct answers here.'),
(2, 'coding', 'Tagcraft Glyphics', 'Create HTML tags that match the Glyphic Glades requirements.', 'HTML snippet here.', 'Correct HTML tags here.'),
(3, 'quiz', 'Matching: Fey Folk of Flexbox', 'Match Flexbox properties to their correct descriptions.', 'Matching pairs here.', 'Correct pairs here.'),
(3, 'coding', 'Styling Cascade Canyons', 'Apply CSS to bring the Cascade Canyons to life.', 'CSS code snippet here.', 'Solution CSS here.'),
(4, 'quiz', 'Function Foothills Quiz', 'Determine which functions don\'t belong.', 'List of JavaScript functions.', 'Functions that don\'t belong.'),
(4, 'coding', 'Draconic DOM Manipulation', 'Manipulate the DOM as described in the Domain of Draconic Manipulation.', 'DOM manipulation tasks.', 'DOM manipulation solutions.'),
(5, 'quiz', 'Middleware Mystics Quiz', 'Fill in the blanks to complete the middleware definitions.', 'Fill-in-the-blank questions here.', 'Correct answers here.'),
(6, 'coding', 'Query Quagmire Challenges', 'Solve SQL queries in the Quag-Mires of Query.', 'SQL query challenges here.', 'Correct SQL queries here.'),
(7, 'quiz', 'Syntax Citadel Conundrums', 'Answer 20 questions about programming syntax.', 'List of 20 questions.', 'Correct answers here.');



//          trophies table 

INSERT INTO trophies (name, image_url, description, territory_id) VALUES
('Scroll of Structure', '/svg/', 'Awarded for mastering the Open Waters.', 1),
('Object Oracle', '/svg', 'Awarded for constructing the most resilient structures in The Isles of Structure & Styling.', 2),
('Err-roa Amulet', '/svg', 'Awarded for excellence in JavaScript at the Handler Highlands.', 3),
('Hourglass of Scriptcraft', '/svg', 'Awarded for rapid development in Eerie Express.', 4),
('The ByteGate Key', '/svg', 'Awarded for advanced query crafting at SQL Summit.', 5),
('Staff of the All seeing AP-EYE', '/svg', 'Awarded for completing the Final Quest. Can help you in the next campaign!', 6);


//      user_achievements table 

INSERT INTO user_achievements (user_id, trophy_id, date_earned) VALUES
(1, 1, '2023-01-15 14:30:00');




//      user_progress table 

INSERT INTO user_progress (user_id, challenge_id, status, last_accessed) VALUES
(1, 1, 'Completed', '2023-08-01 10:00:                
                    
                    
                    FOR Challenges table 
 
INSERT INTO challenges (province_id, type, title, description, content, solution) VALUES
(1, 'coding', 'Navigating Open Waters', 'Complete the coding challenge to navigate through Open Waters.', 'Code snippet here.', 'Solution code here.'),
(2, 'quiz', 'True or False: Semantic Shores', 'Answer true or false questions about Semantic Shores.', 'Question list here.', 'Correct answers here.'),
(2, 'coding', 'Tagcraft Glyphics', 'Create HTML tags that match the Glyphic Glades requirements.', 'HTML snippet here.', 'Correct HTML tags here.'),
(3, 'quiz', 'Matching: Fey Folk of Flexbox', 'Match Flexbox properties to their correct descriptions.', 'Matching pairs here.', 'Correct pairs here.'),
(3, 'coding', 'Styling Cascade Canyons', 'Apply CSS to bring the Cascade Canyons to life.', 'CSS code snippet here.', 'Solution CSS here.'),
(4, 'quiz', 'Function Foothills Quiz', 'Determine which functions don\'t belong.', 'List of JavaScript functions.', 'Functions that don\'t belong.'),
(4, 'coding', 'Draconic DOM Manipulation', 'Manipulate the DOM as described in the Domain of Draconic Manipulation.', 'DOM manipulation tasks.', 'DOM manipulation solutions.'),
(5, 'quiz', 'Middleware Mystics Quiz', 'Fill in the blanks to complete the middleware definitions.', 'Fill-in-the-blank questions here.', 'Correct answers here.'),
(6, 'coding', 'Query Quagmire Challenges', 'Solve SQL queries in the Quag-Mires of Query.', 'SQL query challenges here.', 'Correct SQL queries here.'),
(7, 'quiz', 'Syntax Citadel Conundrums', 'Answer 20 questions about programming syntax.', 'List of 20 questions.', 'Correct answers here.');

*/