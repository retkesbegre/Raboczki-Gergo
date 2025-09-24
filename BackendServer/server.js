const express = require('express');
const app = express();
const PORT = 3000;

// Middleware példa
app.use(express.json());

// Teszt route
app.get('/', (req, res) => {
  res.send('Hello, világ!');
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
