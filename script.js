var texto = document.getElementById('ftexto')
var lista = document.getElementById('flista')
var feitos = document.getElementById('feitos')
var concluido = document.getElementById('fofeitos')

function adicionar() {
    if (texto.value == '') {
        window.alert('Adicione um afazer para continuar')
    } else {
        var item = document.createElement('li')
        item.innerText += `${texto.value}`
        lista.appendChild(item)

        // criação de um button
        var botao = document.createElement('button')
        botao.appendChild(document.createTextNode('Fazendo'));
        lista.appendChild(botao)

        var botao1 = document.createElement('button')
        botao1.appendChild(document.createTextNode('Remover'));
        lista.appendChild(botao1)


        if (isFazendo(botao.addEventListener("click", function (event) {
            // console.log(event.target)
            // window.alert('O elemento clicado foi ' + event.target.innerHTML)
            var item2 = document.createElement('li')
            item2.innerText += `${item.innerText += texto.value}`
            feitos.appendChild(item2)

            var botao2 = document.createElement('button')
            botao2.appendChild(document.createTextNode('Feito'));
            feitos.appendChild(botao2)

            var botao3 = document.createElement('button')
            botao3.appendChild(document.createTextNode('Remover'));
            feitos.appendChild(botao3)

            item.appendChild(botao)
            item.appendChild(botao1)
            lista.removeChild(item)

            if (Remover(botao3.addEventListener("click", function (event3) {
                item2.appendChild(botao2)
                item2.appendChild(botao3)
                feitos.removeChild(item2)
            }))) {
            }

            if (Feito(botao2.addEventListener("click", function (event2) {
                // window.alert('O elemento clicado foi ' + event2.target.innerHTML)

                var item3 = document.createElement('li')
                item3.innerText += `${item2.innerText += texto.value}`
                concluido.appendChild(item3)

                var botao4 = document.createElement('button')
                botao4.appendChild(document.createTextNode('Concluido'))
                concluido.appendChild(botao4)

                item2.appendChild(botao2)
                item2.appendChild(botao3)
                feitos.removeChild(item2)

                if (isConcluido(botao4.addEventListener("click", function (event4) {
                    item3.appendChild(botao4)
                    concluido.removeChild(item3)
                }))) {
                }

                // criação de um checkbox

                var check = document.createElement('input')
                check.type = 'checkbox'
                item3.appendChild(check)

            }))) {
            }

        }))) {
        }

        if (isRemover(botao1.addEventListener("click", function (event1) {
            // console.log(event1.target)
            // window.alert('O elemento clicado foi ' + event1.target.innerHTML)

            item.appendChild(botao)
            item.appendChild(botao1)
            lista.removeChild(item)

        }))) {
        }


    }
    texto.value = ''
    texto.focus()
}

function isFazendo() {

}

function isRemover() {

}

function Feito() {

}

function isConcluido() {

}

function Remover() {

}

// código do relógio

setInterval(function () {
    var novaHora = new Date()

    var hora = novaHora.getHours()
    var minuto = novaHora.getMinutes()
    var segundo = novaHora.getSeconds()

    minuto = zero(minuto)
    segundo = zero(segundo)

    var horas = document.getElementById('horas')
    horas.textContent = hora + ':' + minuto + ':' + segundo
}, 1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x
    } return x
}
