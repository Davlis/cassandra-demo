# Create Keyspace (Database) named "users" that will contain records related to specific domain context
CREATE KEYSPACE users WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

# Select keyspace (domain context / domain boundary)
USE users;

# Create table onto "users" keyspace
CREATE TABLE user(
   id int PRIMARY KEY,
   name text,
   city text,
   email text,
   phone varint
);

# Select all users
SELECT * FROM user;

# Create index "name" on user table
CREATE INDEX name ON user(name);