require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  port: DB_PORT,
  database: DB_NAME || "books",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = 
  `DROP TABLE if exists books; CREATE TABLE books (id INT NOT NULL AUTO_INCREMENT, title VARCHAR(300), author VARCHAR(200), genre VARCHAR (200), pages VARCHAR(100), description VARCHAR(4000), image VARCHAR(200), PRIMARY KEY (id));
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "Fantasy", "223", "A young boy's life changes one stormy night when a giant with a pink umbrella tells him he was born a wizard.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("The Lord of the Rings", "J.R.R. Tolkein", "Fantasy", "1,178", "Hobbit Frodo Baggins leaves the security of his utopian home The Shire on a big adventure when his uncle leaves behind a magical ring.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Eragon", "Christopher Paolini", "Fantasy", "509", "Farm boy Eragon discovers a beautiful blue stone in the woods and becomes a target of a jealous and greedy King.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Twilight", "Stephenie Meyer", "Fantasy", "544", "Bella Swan moves to rainy Forks, where she catches the eye of the mysterious and dashing Edward, who is hiding a secret that changes her life forever.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Vampire Academy", "Richelle Mead", "Fantasy", "332", "Rose and Lissa return to St Vladimir's Academy after two years on the run and must confront evil vampires who target their friends.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("The Great Adventures of Sherlock Holmes", "Arthur Conan Doyle", "Detective", "228", "Sherlock Holmes and his assistant Dr Watson grapple with treachery, murder, and ingenious crimes of all kinds.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("The Good Turn", "Sharna Jackson", "Detective", "400", "Josephine Williams is a future-focused, internet-loving eleven-year-old who is desperate to explore the world beyond her cul-de-sac - and her browser.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Murder Most Unladylike", "Robin Stevens", "Detective", "352", "At Deepdean School for Girls, Daisy Wells and Hazel Wong have set up their own detective agency. But they are struggling to find any real crimes to investigate, until one day a body is found.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("The Young Magicians and the 24-Hour Telepathy Plot", "Nick Mohammed", "Detective", "336", "Alex, Jonny, Zack and Sophie are four incredibly talented young magicians, whose favourite pastime is solving impossible-seeming crimes. But have our magical friends finally been stumped?");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("The London Eye Mystery", "Siobhan Dowd", "Detective", "336", "Ted and Kat's cousin Salim boards the London Eye but never gets off. What happened to him, and can Ted and Kat find him before it's too late?");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Charlotte's Web", "E.B. White", "Animals", "192", "A livestock pig named Wilbur and barn spider Charlotte form an unlikely friendship.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("The Very Hungry Caterpillar", "Eric Carle", "Animals", "22", "A very hungry caterpillar eats his way through the book before turning into a beautiful butterfly.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Brown Bear, Brown Bear, What Do You See?", "Bill Martin", "Animals", "30", "Help your young child recognise colours and assign meanings to objects in this delightful picture book.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Dear Zoo", "Rod Campbell", "Animals", "20", "A letter to the zoo asking for a pet results in a succession being dispatched - with all of the deliveries containing highly unsuitable pets!");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Stuart Little", "E.B. White", "Animals", "128", "A boy named Stuart who resembles a rat makes him way in a human-sized world.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Goodnight Moon", "Margaret Wise Brown", "Picture Books", "32", "A young bunny finds it reassuring to say goodnight to everything in his room before going to sleep.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Where The Wild Things Are", "Maurice Sendak", "Picture Books", "40", "In this American classic, a little boy named Max travels to an island where a group of monsters named The Wild Things live.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("The Gruffalo", "Julia Donaldson", "Picture Books", "32", "A mouse takes a walk through the woods and scares off predators with tales of the scary Gruffalo.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Love You Forever", "Robert Munsch", "Picture Books", "31", "A mother sings a lullaby to her son as he grows up.");
  INSERT INTO books (title, author, genre, pages, description) VALUES ("Wave", "Suzy Lee", "Picture Books", "48", "In this evocative wordless book, internationally acclaimed artist Suzy Lee tells the story of a little girl's day at the beach.");`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `books` was successful!");

    console.log("Closing...");
  });

  con.end();
});


