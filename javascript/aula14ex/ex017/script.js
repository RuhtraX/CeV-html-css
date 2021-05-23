function tabuada() {
    var num = Number(document.getElementById("txtNum").value);
    var tab = document.getElementById("seltabuada")
    tab.innerHTML = ''
    for (var c=1; c<11; c++){
        let item = document.createElement('option')
        item.text = `${c} * ${num} = ${c*num}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}