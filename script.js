// Variabili che ci servono per creare la Password
const firstName = prompt('Inserisci il tuo Nome');
const lastName = prompt('Inserisci il tuo Cognome');
const favouriteColor = prompt('Inserisci il tuo Colore Preferito');
const number = 24;

 
// Nuova variabile che unisce i valori precedenti
const passwordGenerated = firstName + lastName + favouriteColor + number;

console.log(passwordGenerated);


// Comunichiamo con il file HTML, e gli aggiungiamo i Tag <p> <strong> e la Password generata   
document.getElementById('password').innerHTML =
`<p>Questa sarà la tua nuova Password<strong> ${passwordGenerated}<\strong><\p>`;
