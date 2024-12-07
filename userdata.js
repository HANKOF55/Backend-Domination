const user = require("./models/user");

const users = [
    {
      username: "john_doe",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password123",
      age: 28
    },
    {
      username: "jane_doe",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      password: "securePass456",
      age: 25
    },
    {
      username: "mike_smith",
      name: "Mike Smith",
      email: "mike.smith@example.com",
      password: "mike2023",
      age: 32
    },
    {
      username: "susan_lee",
      name: "Susan Lee",
      email: "susan.lee@example.com",
      password: "susan@789",
      age: 29
    },
    {
      username: "tom_hardy",
      name: "Tom Hardy",
      email: "tom.hardy@example.com",
      password: "hardyPass321",
      age: 35
    },
    {
      username: "anna_brown",
      name: "Anna Brown",
      email: "anna.brown@example.com",
      password: "anna_b_22",
      age: 27
    },
    {
      username: "jason_bourne",
      name: "Jason Bourne",
      email: "jason.bourne@example.com",
      password: "bourneUltimatum",
      age: 30
    },
    {
      username: "linda_hill",
      name: "Linda Hill",
      email: "linda.hill@example.com",
      password: "lind@hill123",
      age: 26
    },
    {
      username: "charlie_adams",
      name: "Charlie Adams",
      email: "charlie.adams@example.com",
      password: "charlie2024",
      age: 31
    },
    {
      username: "emma_clark",
      name: "Emma Clark",
      email: "emma.clark@example.com",
      password: "clarkEm@2024",
      age: 24
    },
    {
      username: "oliver_white",
      name: "Oliver White",
      email: "oliver.white@example.com",
      password: "oliver!white",
      age: 33
    },
    {
      username: "sophia_wilson",
      name: "Sophia Wilson",
      email: "sophia.wilson@example.com",
      password: "sophia@wilson",
      age: 29
    },
    {
      username: "noah_evans",
      name: "Noah Evans",
      email: "noah.evans@example.com",
      password: "noahevan$",
      age: 34
    },
    {
      username: "mia_moore",
      name: "Mia Moore",
      email: "mia.moore@example.com",
      password: "mi@moore23",
      age: 28
    },
    {
      username: "liam_james",
      name: "Liam James",
      email: "liam.james@example.com",
      password: "liamJames12",
      age: 27
    }
  ];
  
  // Insert many command example
  // const result = await UserModel.insertMany(users);
module.exports = users;