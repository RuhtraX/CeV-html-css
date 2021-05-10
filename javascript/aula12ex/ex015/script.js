function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src','homembebe.png')
            } else if (idade < 21) {
                img.setAttribute('src','homemjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','homemadulto.png')
            } else {
                img.setAttribute('src','homemidoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src','mulherbebe.png')
            } else if (idade < 21) {
                img.setAttribute('src','mulherjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src','mulheradulta.png')
            } else {
                img.setAttribute('src','mulheridosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
        res.appendChild(img)
    }
}