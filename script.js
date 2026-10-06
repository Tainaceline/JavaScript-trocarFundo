
const botao = document.querySelector('#botao');


botao.addEventListener('click', function clicar(){
 let conteudo = document.querySelector('#principal')
 let body = document.querySelector('#body')

 if(body.style.background=='black'){
    body.style.background='white'

    conteudo.style.background='black'
    conteudo.style.color='white'
    botao.style.background='black'
    botao.style.color='white'
 }else{
    body.style.background ='black'
    conteudo.style.background='white'
    conteudo.style.color='black'
    botao.style.background='white'
    botao.style.color='black'
 }


})