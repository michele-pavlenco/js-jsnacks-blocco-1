//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

alert ("Ciao, inserisci sei numeri uno alla volta")

const div = document.querySelector("div.app")
let nums = []
let shots = []



for(let i = 0; i< 6; i++){
     let promp = prompt("Scegli un numero")
   nums.push(promp )
    console.log(promp)

    if(!(parseInt(nums[i]) % 2 === 0)){
        shots.push(nums[i])
        div.append(nums[i])
        
        

    }
}
    console.log(shots)