function tabuada() {
    var num = Number(document.getElementById("txtNum").value);
    var res = document.getElementById("res")
    res.innerHTML = ''
    for (var c=1; c<11; c++){
        res.innerHTML += `<p>${c} * ${num} = ${c*num}</p>`
    }
}