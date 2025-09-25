const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307, // ha ezen fut a MySQL szervered
  user: 'root', // vagy amit beállítottál
  password: 'jelszavad', // cseréld ki a sajátodra
  database: 'fogado'
});

connection.connect((err) => {
  if (err) {
    console.error('Nem sikerült csatlakozni az adatbázishoz:', err);
    return;
  }
  console.log('Sikeres kapcsolat a panzio adatbázissal!');
});

const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3307;

app.get('/szobak', (req, res) => {
  db.query('SELECT sznev, agy FROM fogado.szobak', (err, results) => {
    if (err) {
      res.status(500).send('Hiba történt a lekérdezés során');
    } else {
      res.json(results);
    }
  });
});

app.get('/vendegek', (req, res) => {
    db.query('SELECT vnev, szoba from fogado.foglalasok, fogado.vendegek order by vnev ASC', (err, results) => {
      if (err) {
        res.status(500).send('Hiba történt a lekérdezés során');
      } else {
        res.json(results);
      }
    });
  });

  app.get('/vendegek', (req, res) => {
    db.query(`SELECT 
  DATEDIFF(tav, erk) AS vendegelyszakak,
  fo AS vendegek
FROM foglalasok
ORDER BY vendegek ASC;
`, (err, results) => {
      if (err) {
        res.status(500).send('Hiba történt a lekérdezés során');
      } else {
        res.json(results);
      }
    });
  });



app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});

export default express.Router


//A copilotot megkértem, hogy a terminalba irandó parancsokat mutassa meg mert elfelejtettem őket.
//leírta sorba a kódokat

//A copilotot megkértem hogy segítsen összekötni a fogado adatbázist az express szerverrel
//Írta, hogy le kell installálni a mysql2-t

// megkértem a copilotot, hogy segítsen kiszámítani, hogy a vendégek tartózkodási idelyét vendegelyszakak néven
// ez nem sikerült, nem fut le

// megkértem, hogy segítsen növekvő sorrendbe a fo oszlopot
// ez order by paranccsal működött, de a vendegelyszakakkal együtt nem
// a b feladat lekérdezésénél elakadtam



