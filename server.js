const express = require('express');
const app = express();
const port = 3000;

const movies = [
  { id: 1, title: "The Shawshank Redemption", year: 1994 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Inception", year: 2010 },
  { id: 4, title: "Friday the 13th: The Final Chapter", year: 1984 },
  { id: 5, title: "Tall Girl", year: 2019 },
  { id: 6, title: "Taken", year: 2008 },
  { id: 7, title: "Free Willy", year: 1993 },
  { id: 8, title: "Minions: The Rise of Gru", year: 2022 },
  { id: 9, title: "The Twilight Saga: Eclipse", year: 2010 },
  { id: 10, title: "Monolith", year: 2023 },
  { id: 11, title: "Locke", year: 2014 },
  { id: 12, title: "Cars", year: 2011 },
  { id: 13, title: "Bolt", year: 2008 },
  { id: 14, title: "Avengers: Endgame", year: 2019 },
  { id: 15, title: "10 Cloverfield Lane", year: 2016 },
  { id: 16, title: "Goon", year: 2012 },
  { id: 17, title: "Dirty Dancing", year: 2017 },
  { id: 18, title: "Oliver!", year: 1968 },
  { id: 19, title: "The Lion King", year: 2019 },
  { id: 20, title: "Rocky III", year: 1982 },
];

app.get('/api/movies', (req, res) => {
  res.json(movies); // Send the movies array as a JSON response
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
