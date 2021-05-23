function contar() {
    var inicio = Number(document.getElementById("txtIni").value)
    var fim = Number(document.getElementById("txtFim").value)
    var passo = Number(document.getElementById("txtPas").value)
    var res = document.getElementById("res")
    res.innerHTML = ''
    var c = inicio
    if (fim > inicio) {
        if (passo < 1) {
            res.innerHTML += '<p>'
            res.innerHTML += `[AVISO] Passo ${passo} inválido. `
            if (passo == 0) {
                passo = 1
                res.innerHTML += `Alterado para ${passo}.</p>`
            } else {
                passo *= -1
                res.innerHTML += `Alterado para ${passo}.</p>`
            }
        }
        res.innerHTML += '<p>'
        while (c <= fim) {
            res.innerHTML += `${c} ➡️ `
            c += passo
        }
    } else {
        if (passo >= 0) {
            res.innerHTML += '<p>'
            res.innerHTML += `[AVISO] Passo ${passo} inválido. `
            if (passo == 0) {
                passo = -1
                res.innerHTML += `Alterado para ${passo}.</p>`
            } else {
                passo *= -1
                res.innerHTML += `Alterado para ${passo}.</p>`
            }
        }
        while (c >= fim) {
            res.innerHTML += `${c} ➡️ `
            c += passo
        }
    }
    res.innerHTML += '&#x1F3C1</p>'
}