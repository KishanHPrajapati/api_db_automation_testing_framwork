CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    mobile VARCHAR(50) NOT NULL
);

INSERT INTO users (email, name, mobile)
VALUES (
     'kishanprajapati8767@gmail.com',
     'Kishan Prajapati', 
     '7738569552'
)
ON CONFLICT DO NOTHING;