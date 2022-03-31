
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.
let numb = prompt("Scegli un numero di 4 cifre")
    sum = 0;
let app = document.querySelector("div.app")


if(numb.length == 4){
   while (numb) {
    sum += numb % 10;
    numb = Math.floor(numb / 10);
}
app.append(sum)
console.log(sum);
  }else {
    alert("Inserimento non corretto. Ricarica la pagina");
  }

