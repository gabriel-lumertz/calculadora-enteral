

function calcular() {
    const idade = document.getElementById('idade')
    const valorIdade = idade.value

    const peso = document.getElementById('peso')
    const valorPeso = peso.value

    const altura = document.getElementById('altura')
    const valorAltura = altura.value / 100

    const imc = (valorPeso / valorAltura) / valorAltura

    document.getElementById('imc').textContent = imc.toFixed(2)
    document.getElementById('pesoideal').textContent = ((valorAltura * valorAltura) * 24.9).toFixed(2)

    console.log(valorAltura)
}

const sexo = document.getElementById('woman')
const valorSexo = sexo.value
console.log(valorSexo)