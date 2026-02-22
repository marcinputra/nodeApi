const express = require("express");
const path = require("path");
const cors = require("cors");

// baza danych
const mysql = require("mysql");

const port = 3000;

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
});

var poloczenie = "";

db.connect((err) => {
  if (err) {
    poloczenie = "NIE";
    console.log("Error", err);
  } else {
    poloczenie = "TAK";
    console.log("Połczono ... z DB");
  }
});

app.set("view engine", "hbs");

console.log(__dirname);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Strona główna projektu CKU",
    bodyTitle: "Witaj na stronie CKU",
    bodyContent:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum debitis nam optio repellendus cupiditate molestiae quo nisi magnam nemo dignissimos in quibusdam iste, est inventore fugit deleniti consequuntur, cum facere. ",
  });
});

app.get("/contact", (req, res) => {
  res.send("Kontak z nami ...");
});

app.get("/baza", (req, res) => {
  res.render("index", {
    pageTitle: "Połączenie z bazą",
    bodyTitle: "Czy połczono z bazą?",
    bodyContent: poloczenie,
  });
});

app.get("/selectdb", (req, res) => {
  const sqlQuery = "SELECT * FROM samochod;";
  const resultQuery = db.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.listen(port);

// app.get() - obieranie danych
// app.post() - wysylanie danych
// app.put() - aktlizacja danych
// app.delete() - usuwanie danych
