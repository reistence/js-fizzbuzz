// **Consegna:**
//  Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//  **Prima di partire a scrivere codice poniamoci qualche domanda:**

//  Come faccio a sapere se un numero è divisibile per un altro? x % 3 === 0; x % 5 === 0;
//  Abbiamo visto qualcosa di particolare che possiamo usare?
//  **Consigli del giorno:**
//  1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// **BONUS 1:**
//  Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento html con il numero o la stringa corretta da mostrare.
// **BONUS 2:**
//  Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
//  Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

// grab the dom elements
const row = document.querySelector(".row");
console.log(row);

// iterate for each number from 1 to 100
for (let i = 1; i <= 100; i++) {
  let fizzBuzz = "FizzBuzz";
  let fizz = "Fizz";
  let buzz = "Buzz";
  const cell = document.createElement("div");
  console.log(cell);
  cell.classList.add("cell");

  // if i is a multiple of 3 and 5 then fizzbuzz
  if (i % 3 === 0 && i % 5 === 0) {
    cell.classList.add("fizz-buzz");

    cell.innerHTML = fizzBuzz;
    row.append(cell);
    console.log(i, "fizzbuzz");
  } else if (i % 3 === 0 && !(i % 5 === 0)) {
    // if i is a multiple of 3  but not of 5 then fizz
    cell.classList.add("fizz");
    cell.innerHTML = fizz;
    row.append(cell);
    console.log(i, "fizz");
  } else if (i % 5 === 0 && !(i % 3 === 0)) {
    // if i is a multiple of 5  but not of 3 then buzz
    cell.classList.add("buzz");
    cell.innerHTML = buzz;
    row.append(cell);
    console.log(i, "buzz");
  } else {
    // if i is not a multiple of 5 or 3 then i
    cell.innerHTML = i;
    row.append(cell);
    console.log(i);
  }
}
