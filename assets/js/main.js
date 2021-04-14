function myScopo() {
    const form = document.querySelector('.form')
    const alturaHtml = document.querySelector('#altura')
    const pesoHtml = document.querySelector('#peso')
    const resultHtml = document.querySelector('.result')

    form.addEventListener('submit', submitForm)

    function submitForm(event) {
        event.preventDefault()
        prevent(pesoHtml.value, alturaHtml.value)
    }

    function prevent(peso, altura) {
        if (isNaN(peso)) {
            resultHtml.innerHTML = `<p class="danger">${peso} não é um valor válido</p>`
            pesoHtml.focus()
        } else if (isNaN(altura)) {
            alturaHtml.focus()
            resultHtml.innerHTML = `<p class="danger">${altura} não é um valor válido</p>`
        } else if (altura == ``){
            resultHtml.innerHTML = '<p class="danger">Insira um valor na altura.</p>'
            alturaHtml.focus()
        } else if (peso == ``) {
            resultHtml.innerHTML = '<p class="danger">Insira um valor no peso.</p>'
            pesoHtml.focus()
        } else {
            imcResult(peso, altura)
        }


    }

    function imcResult(p, a) {
        a = (parseFloat(a)) ** 2
        p = parseFloat(p)
        const result = p / a

        let i;
        if (result <= 18.5) {
            i = '<p class="danger">Abaixo do peso'
        } else if (result < 25) {
            i = '<p class="true">Peso normal'
        } else if (result < 30) {
            i = '<p class="true">Sobrepeso'
        } else if (result < 35) {
            i = '<p class="danger">Obesidade grau 1'
        } else if (result < 40) {
            i = '<p class="danger">Obesidade grau 2'
        } else {
            i = '<p class="danger">Obesidade grau 3'
        }

        resultHtml.innerHTML = `${i} (IMC: ${result.toFixed(2)})</p>`

        pesoHtml.value = ``
        alturaHtml.value = ``
    }

}

myScopo()