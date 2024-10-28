var dice = ['<img src="/src/images/dice1.png"/>',
    '<img src="/src/images/dice2.png"/>',
    '<img src="/src/images/dice3.png"/>',
    '<img src="/src/images/dice4.png"/>',
    '<img src="/src/images/dice5.png"/>',
    '<img src="/src/images/dice6.png"/>',

]

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (e) {
        e.preventDefault();

        //no ato do click tem q fazer o gif aparecer por 3 sec e sumir novamente
        document.querySelector('.loading').style.display = 'inline'
        document.querySelector('.resultado').style.display = 'none'

        setTimeout(function loading() {
            document.querySelector('.loading').style.display = 'none'
        }, 2000)

        //lógica
        let numeroAleatorio = Math.random() * 6;
        numeroAleatorio = Math.floor(numeroAleatorio);
        console.log(numeroAleatorio)


        //fazer a imagem correspondente ao numero aparecer dentro da div resultado
        setTimeout(function result() {
            document.getElementById('resultado-valor').innerHTML = dice[numeroAleatorio]
            document.querySelector('.resultado').style.display = 'block'
        }, 2200)



    })
})
