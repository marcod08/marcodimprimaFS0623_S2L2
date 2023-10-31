/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
const num1 = parseInt(prompt("inserisci il primo numero"))
const num2 = parseInt(prompt("inserisci il secondo numero"))

if(num1 > num2){
  alert("il numero " + num1 + " è il piu grande")
}
else if (num2 > num1){
  alert("il numero " + num2 + " è il piu grande")
}
else {
  alert("i 2 numeri devono essere diversi fra loro")
}
/*

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*
const num3 = prompt("Inserisci un numero intero diverso da 5")

if (num3 / 1 === num3 && num3 !== 5){
  console.log("not equal")
}
*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
const num4 = parseInt(prompt("Inserisci un numero divisibile per 5"))

if (num4 % 5 == 0) {
  alert("il numero è divisibile per 5")
}
else if(num4 % 5 !== 0) {
  alert("il numero non è divisibile per 5")
}
else {
  alert("non hai inserito un numero valido")
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
const totalShoppingCart = parseFloat(prompt("valore spesa"))
const spedizione = 10
let spesaFinale

if (totalShoppingCart > 50) {
  spesaFinale = totalShoppingCart
}
else {
  spesaFinale = totalShoppingCart + 10
}

alert("Il totale del tuo ordine è " + spesaFinale)
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
const totalShoppingCart = parseFloat(prompt("valore spesa"))
const spedizione = 10
const blackFriday = 0.8
let spesaFinale

if (totalShoppingCart > 50) {
  spesaFinale = totalShoppingCart * blackFriday
}
else {
  spesaFinale = (totalShoppingCart * blackFriday)+ 10
}

alert("Il totale del tuo ordine è " + spesaFinale)
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/*
let var1 = parseFloat(prompt("inserisci il primo valore"))
let var2 = parseFloat(prompt("inserisci il secondo valore"))
let var3 = parseFloat(prompt("inserisci il terzo valore"))

if(var1 > var2 && var1 > var3){
  if (var2 > var3){
    console.log(var1, var2, var3)
  }
  else {
    console.log(var1, var3, var2)
  }
}

else if (var2 > var1 && var2 > var3){
  if (var1 > var3) {
    console.log(var2, var1, var3)
  }
  else {
    console.log(var2, var3, var1)
  }
}

else {
  if (var2 > var1) {
    console.log(var3, var2, var1)
  }
  else {
    console.log(var3, var1, var2)
  }
}
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/*
let val = prompt("Inserisci un valore per verificare che sia un numero o meno")

if (isNaN(val)) {
  console.log("il valore non è un numero")
}
else {
  console.log("il valore è un numero")
}
*/
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
