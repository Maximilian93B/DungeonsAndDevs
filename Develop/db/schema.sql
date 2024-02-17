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
    type ENUM('quiz', 'coding'), -- Example types, adjust as needed
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content TEXT, -- Can store questions, code snippets, etc.
    solution TEXT, -- Optional: solution or answer key
    FOREIGN KEY (province_id_id) REFERENCES provinces(_id)
);


CREATE TABLE user_progress (
    progress_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    challenge_id INT,
    status VARCHAR(50),
    last_accessed DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (challenge_id_id) REFERENCES challenges(challenge_id)
);



CREATE TABLE user_territories (
    user_territory_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    territory_id INT,
    is_unlocked BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (territory_id) REFERENCES territories(territory_id)
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