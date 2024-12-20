/* Mail
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: Non è necessario provvedere alla validazione delle email */


//creo array con lista email
//creo prompt per chiedere l'email all'utente
//ciclo:
    //creo condizionale per verificare che l'email inserita sia nella lista di chi può accedere
    //stampo esito
//fine ciclo

let listaInvitati = ["carlo.rossi@gmail.com", "luca.verdi@gmail.com", "maria.bianchi@gmail.com"];
let emailInserite = [];

let userEmail = prompt("inserisci la tua email");

for (i = 0; i < 2; i++) {
    if (userEmail === listaInvitati[i]) {
        alert("Il tuo indirizzo e-mail è presente nella lista degli invitati: puoi partecipare alla festa");
        emailInserite.push(userEmail);
    }

    else if (userEmail === emailInserite[i]) {
        alert("Questo indirizzo e-mail è stato già registrato");
    }
        
    else {
        let userEmail = prompt("Controlla di aver digitato l'email correttamente. Hai solo un altro tentativo.")
        if (userEmail !== listaInvitati[i]) {
            alert("Il tuo indirizzo e-mail non è presente nella lista degli invitati: purtroppo non potrai partecipare alla festa.")
            
        }
        else {
            alert("Il tuo indirizzo e-mail è presente nella lista degli invitati: puoi partecipare alla festa");
        }
    
    }
}

















/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve? */