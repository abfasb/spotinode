Heres my sql file query

CREATE spotifydb

USE spotifydb

CREATE TABLE tblsongs ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR(255) NOT NULL,
    song_url VARCHAR(255) NOT NULL
);


