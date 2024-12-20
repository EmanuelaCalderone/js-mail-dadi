/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//genero un numero random per l'utente
const giocataUtente = Math.floor(Math.random() * 6) + 1; 

//genero un numero random per il pc
const giocataPc = Math.floor(Math.random() * 6) + 1; 

// verifico chi vince

if (giocataUtente > giocataPc) {
    console.log("il numero", giocataUtente, "batte", giocataPc, "vince l'utente");
}
else if (giocataPc > giocataUtente){
    console.log("il numero", giocataPc, "batte", giocataUtente, "vince il computer");
}
else {
    console.log("numero dell'utente: ", giocataUtente, "e il numero del computer: ", giocataPc, "sono uguali: pareggio");
}
