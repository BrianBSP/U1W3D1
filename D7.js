/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("-------- Es 01 -------");
function twoString(str1, str2) {
  const primeDue = str1.slice(0, 2);
  const ultimeTre = str2.slice(-3);

  return primeDue.toUpperCase() + ultimeTre.toUpperCase();
}
console.log(twoString("aldo", "poretti"));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("-------- Es 02 ---------");
function dieciNumeri() {
  const numeri = [];
  for (let i = 0; i < 10; i++) {
    const element = Math.round(Math.random() * 100);
    numeri[i] = element;
  }
  return numeri;
}
console.log(dieciNumeri());
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("--------- Es 03 -----------");
function soloPari() {
  const numeri = [5, 10, 19, 21, 22, 45, 46, 86, 99, 100];
  const numeriPari = numeri.filter((elemento) => elemento % 2 === 0);
  return numeriPari;
}
console.log(soloPari());

/* const numeri = [5, 10, 46, 86, 99, 100]; //ho fatto le prove per vedere come funzionava il % per svolgere correttamente l'esercizio 3
for (let i = 0; i < numeri.length; i++) {
  const element = numeri[i] % 2 === 0;
  console.log("Questo numero è: ", element);
} */

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("-------- Es 04 ----------");
function sommaNumeri() {
  let somma = 0;
  const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numeri.forEach((element) => (somma += element));
  return somma;
}
console.log("La somma dei numeri è ", sommaNumeri());

/* let somma = 0;  // prova effettuata per verificare il se il ragionamento era giusto.
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeri.length; i++) {
  somma = somma + numeri[i];
}
console.log(somma); */

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("--------- Es 05 ----------");
function sommaTotale() {
  /* let somma = 0;
  let totale = 0;
  let valoreCorrente = 0; */
  const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  somma = numeri.reduce((totale, valoreCorrente) => totale + valoreCorrente, 0);
  return somma;
}
console.log("La somma dei numeri è ", sommaTotale());

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i 
  valori del precedente incrementati di n
*/
console.log("-------- Es 06 ----------");
const soliNumeri = [2, 4, 5, 7, 12, 25, 67];
function numeriSommati(numeri, n) {
  numeri = soliNumeri.map((elemento) => elemento + n);
  return numeri;
}
console.log("Numeri sommati a n: ", numeriSommati(soliNumeri, 10));
/* function numeriSommati(numeri, n) {
  const somma = [];
  let numeri = [];
  numeri = soliNumeri.map((element) => (somma = element + n));
  return numeri;
}
console.log(numeriSommati(soliNumeri, 10)); */

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive 
  stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("-------- Es 07 ---------");

const str1 = ["sei", "tu", "john", "wayne"];
console.log(str1);
function lunghezzaStringhe(stringa) {
  parola = str1.map((elemento) => elemento.length);
  return parola;
}
console.log(lunghezzaStringhe(str1));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("------ Es 08 -------");

// Non riesco a completare l'esercizio con la funzione forEach
function numeriDispari() {
  const numeri = [];
  for (let i = 0; i < 100; i++) {
    numeri.push(i);
  }
  let numDisp = [];
  console.log(numeri);
  numDisp = numeri.forEach((element) => {
    element % 2 !== 0;
  });
}
console.log("Numeri Dispari", numeriDispari());
// Invece con il For sono riuscito in maniera abbastanza semplice
/* let numeri = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    numeri.push(i);
  }
}
console.log(numeri); */
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
