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

CREATE TABLE territories (
    territory_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    icon VARCHAR(50)
);


-- These are 'areas' in 'Territories' -- 
CREATE TABLE provinces (
    province_id INT AUTO_INCREMENT PRIMARY KEY,
    territory_id INT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    FOREIGN KEY (territory_id) REFERENCES territories(territory_id)
);


-- These are 'Quests' in 'Areas' -- 
CREATE TABLE cities (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    province_id INT,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    content_type VARCHAR(50),
    content_url VARCHAR(255),
    FOREIGN KEY (province_id) REFERENCES provinces(province_id)
);

-- These are our Challenges in 'Quests' 
CREATE TABLE challenges (
    challenge_id INT AUTO_INCREMENT PRIMARY KEY,
    city_id INT,
    type ENUM('quiz', 'coding'), -- Example types, adjust as needed
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content TEXT, -- Can store questions, code snippets, etc.
    solution TEXT, -- Optional: solution or answer key
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);


CREATE TABLE user_progress (
    progress_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    city_id INT,
    status VARCHAR(50),
    last_accessed DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

CREATE TABLE user_achievements (
    achievement_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    achievement_type VARCHAR(50),
    date_earned DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE user_territories (
    user_territory_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    territory_id INT,
    is_unlocked BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (territory_id) REFERENCES territories(territory_id)
);


CREATE TABLE learning_groups (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    group_name VARCHAR(50) NOT NULL,
    description TEXT,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE group_members (
    membership_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    user_id INT,
    join_date DATETIME NOT NULL,
    FOREIGN KEY (group_id) REFERENCES learning_groups(group_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE user_quiz_attempts (
    attempt_id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT,
    user_id INT,
    score INT,
    attempt_date DATETIME,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    city_id INT,
    content TEXT NOT NULL,
    post_date DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    comment_text TEXT NOT NULL,
    comment_date DATETIME,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);