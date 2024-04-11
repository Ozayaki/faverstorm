let join = document.getElementById("join")
let joinmsg = document.getElementById('jointext');

join.onclick = function () {
    joinmsg.textContent= "АЙПИ СКОПИРОВАН!"
    navigator.clipboard.writeText('faverstorm.run.place')
    setTimeout(() => {
        joinmsg.textContent= "ПРИСОЕДИНИТЬСЯ"
    }, 3500)
}