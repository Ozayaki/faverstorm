let splash = document.getElementById('splash')
let splash1 = "Имбовый сервер для игры с друзьями!"
let splash2 = "Почему бы тебе не зайти?"
let splash3 = "Здесь очень много халявы!"

function splashl() {
    let rand = Math.ceil(Math.random()*10);
    if (rand<3) {
        splash.textContent = splash1
    }else if (rand>6){
        splash.textContent = splash2
    } else {
        splash.textContent = splash3
    }
    
}
splashl()