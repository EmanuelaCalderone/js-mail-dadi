/* Mail
Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: Non è necessario provvedere alla validazione delle email */

//creo l'array con la lista delle email
let listaInvitati = ["carlo.rossi@gmail.com", "luca.verdi@gmail.com", "maria.bianchi@gmail.com"];

//creo il prompt per chiedere all'utente di inserire la propria email
let userEmail = prompt("inserisci la tua email");

//ciclo 
for (i = 0; i < 1; i++) {
    //verifico se l'email inserita rientra nella lista di chi può accedere
    if (userEmail === listaInvitati[i]) {
        //alert con esito positivo
        alert("Il tuo indirizzo e-mail è presente nella lista degli invitati: puoi partecipare alla festa");
    }
        
    else {
        //se l'utente sbaglia a digitare l'indirizzo, glielo chiedo di nuovo
        let userEmail = prompt("Controlla di aver digitato l'email correttamente. Hai solo un altro tentativo.")
        //verifico se l'utente inserisce di nuovo un indirizzo sbagliato
        if (userEmail !== listaInvitati[i]) {
        //alert con esito negativo
            alert("Il tuo indirizzo e-mail non è presente nella lista degli invitati: purtroppo non potrai partecipare alla festa.")
            
        }
        //altrimenti alert con esito positivo
        else {
            alert("Il tuo indirizzo e-mail è presente nella lista degli invitati: puoi partecipare alla festa");
        }   
    }
}
//fine ciclo

















/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve? */