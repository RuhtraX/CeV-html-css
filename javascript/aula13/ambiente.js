var c = 1

console.log("Estrutura de Repetição com teste no fim")
do {
    console.log(`Passo ${c}`)
    c++
} while (c < 6)

console.log("Estrutura de Repetição com teste no início")
c = 1
while (c < 6) {
    console.log(`Passo ${c}`)
    c++
}