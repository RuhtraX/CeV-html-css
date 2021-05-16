function contar() {
    var inicio = Number(document.getElementById("txtIni").value)
    var fim = Number(document.getElementById("txtFim").value)
    var passo = Number(document.getElementById("txtPas").value)
    var res = document.getElementById("res")
    if (fim < inicio) {
        res.innerHTML = '<p>[ERRO] Fim não pode ser menor que o início.</p>'
    } else {
        res.innerHTML = ''
        if (passo < 1) {
            res.innerHTML = `<p>[AVISO] Passo ${passo} inválido. Alterando passo para 1.</p>`
            passo = 1
        }
        res.innerHTML += '<p>'
        var c = inicio
        while (c <= fim) {
            res.innerHTML += `${c} ➡️ `
            c += passo
        }
        res.innerHTML += '&#x1F3C1</p>'
    }
}