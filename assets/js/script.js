let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk=false
let emailOk=false

nome.style.width = '100%'
email.style.width = '100%'



function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
        nomeOk=true
        }
    }

    function validaEmail() {
        let txtEmail = document.querySelector('#txtEmail') 
     
        if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
           txtEmail.innerHTML = 'E-mail inválido'
           txtEmail.style.color = 'red'
        } else {
           txtEmail.innerHTML = 'E-mail válido'
           txtEmail.style.color = 'green'
           emailOk = true
        }
     }
     function enviar() {
        if (nomeOk == true && emailOk == true) {
           alert ('Formulário enviado com sucesso!')
        } else {
           alert ('Preencha o formulário corretamente antes de enviar...')
        }
     }
// IDENTIFICAR O CLICK
const menuItens = document.querySelectorAll(".menu a") // seleciona o arrey do nav "a"
//VERIFICAR SE O ITEM FOI CLICADO E FAZER REFERENCIO AO ALVO
menuItens.forEach (item=> {
    item.addEventListener('click',scrollToIdOnClick)
})// Varrendo Arrey
function scrollToIdOnClick(event){
 event.preventDefault()
 const to = getScrollTopByHref(event.currentTarget)-100
 scrollToPosition(to)

}
//VERIFICAR DISTANCIA
function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}
//ANIMAR SCROLL
function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}
