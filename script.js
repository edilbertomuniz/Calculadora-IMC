

function calcIMC() {

    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const Idmassa = document.getElementById("Idmassa")
    console.log("peso", peso)
    console.log("altura", altura)
    console.log("Idmassa", Idmassa)
    console.log("Condição",Condição)
    if (altura.value !== ' ' && peso.value !== '') {
        const Imc = (parseFloat(peso.value) / ((parseFloat(altura.value)/100) * (parseFloat(altura.value)/100))).toFixed(2)
        let classification = ''

        console.log("Imc", Imc)

        if (Imc < 18.5) {
            classification = 'abaixo do peso'
        } 
        else if (Imc < 25) {
            classification = 'normal'
        }
        else if (Imc < 30) {
            classification = 'acima do peso'
        }
        else if (Imc < 35) {
            classification = 'obesidade'
        }

        alert(classification)

        Idmassa.innerHTML = `${Imc}`
        Condição.innerHTML=`${classification}`

    }
    else {
        Idmassa.innerHTML = 'Não deixe os campos em branco'
    }
}