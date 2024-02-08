CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,Tablesusersusers
    Username VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Points INT DEFAULT 0,
    SignUpDate DATETIME,
    LastLogin DATETIME,
    Profile TEXT
);
CREATE TABLE UserProgress (
    ProgressID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    CityID INT,
    Status VARCHAR(50),
    LastAccessed DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (CityID) REFERENCES Cities(CityID)
);
CREATE TABLE UserAchievements (
    AchievementID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    AchievementType VARCHAR(50),
    DateEarned DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
CREATE TABLE UserTerritories (
    UserTerritoryID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    TerritoryID INT,
    IsUnlocked BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (TerritoryID) REFERENCES Territories(TerritoryID)
);
CREATE TABLE Territories (
    TerritoryID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Description TEXT,
    Icon VARCHAR(50)
);
CREATE TABLE Provinces (
    ProvinceID INT AUTO_INCREMENT PRIMARY KEY,
    TerritoryID INT,
    Name VARCHAR(50) NOT NULL,
    Description TEXT,
    FOREIGN KEY (TerritoryID) REFERENCES Territories(TerritoryID)
);
CREATE TABLE Cities (
    CityID INT AUTO_INCREMENT PRIMARY KEY,
    ProvinceID INT,
    Name VARCHAR(50) NOT NULL,
    Description TEXT,
    ContentType VARCHAR(50),
    ContentURL VARCHAR(50),
    FOREIGN KEY (ProvinceID) REFERENCES Provinces(ProvinceID)
);
CREATE TABLE Quizzes (
    QuizID INT AUTO_INCREMENT PRIMARY KEY,
    CityID INT,
    Title VARCHAR(50) NOT NULL,
    Description TEXT,
    FOREIGN KEY (CityID) REFERENCES Cities(CityID)
);
CREATE TABLE QuizQuestions (
    QuestionID INT AUTO_INCREMENT PRIMARY KEY,
    QuizID INT,
    QuestionText TEXT NOT NULL,
    CorrectAnswer VARCHAR(50) NOT NULL,
    FOREIGN KEY (QuizID) REFERENCES Quizzes(QuizID)
);
CREATE TABLE LearningGroups (
    GroupID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    GroupName VARCHAR(50) NOT NULL,
    DESCRIPTION TEXT,
    CreationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
CREATE TABLE GroupMembers (
    MembershipID INT AUTO_INCREMENT PRIMARY KEY,
    GroupID INT,
    UserID INT,
    JoinDate DATETIME NOT NULL,
    FOREIGN KEY (GroupID) REFERENCES LearningGroups(GroupID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
CREATE TABLE UserQuizAttempts (
    AttemptID INT AUTO_INCREMENT PRIMARY KEY,
    QuizID INT,
    UserID INT,
    Score INT,
    AttemptDate DATETIME,
    FOREIGN KEY (QuizID) REFERENCES Quizzes(QuizID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
CREATE TABLE Posts (
    PostID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    CityID INT,
    Content TEXT NOT NULL,
    PostDate DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (CityID) REFERENCES Cities(CityID)
);
CREATE TABLE Comments (
    CommentID INT AUTO_INCREMENT PRIMARY KEY,
    PostID INT,
    UserID INT,
    CommentText TEXT NOT NULL,
    CommentDate DATETIME,
    FOREIGN KEY (PostID) REFERENCES Posts(PostID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);