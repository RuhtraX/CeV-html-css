function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        img.src = "manha.png"
        document.body.style.background = '#BAD0D9'
    } else if (hora <= 18) {
        img.src = "tarde.png"
        document.body.style.background = '#F2AE72'
    } else {
        img.src = "noite.png"
        document.body.style.background = '#473959'
    }
}