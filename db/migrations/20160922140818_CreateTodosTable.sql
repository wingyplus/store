
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied
CREATE TABLE todo (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       completed TINYINT(1)
) ENGINE=INNODB;

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back
DROP TABLE todo;
