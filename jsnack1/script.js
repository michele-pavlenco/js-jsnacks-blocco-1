//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
let userName = prompt("Benvenuto alla festa, come ti chiami?")
//console.log(userName)
const userInvited = ['Clelia','Flavio','Simone',]
//console.log(userInvited)
const app = document.querySelector("div.app")
let invited = false

for (let i = 0; i < userInvited.length; i++){
    if(userName === userInvited[i]) invited = true
}
if (invited){
    app.append("Benvenuto/a")
}
else {
    app.append("non sei invitato")
}
app.append(" ", "alla festa di addiao a Flavio")