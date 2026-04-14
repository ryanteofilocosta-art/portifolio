function verificarsenha(senha){

let temNumero = /[0-9]/.test(senha)
let temMaiuscula = /[A-Z]/.test(senha)
let temMinuscula = /[a-z]/.test(senha)

if(senha.length<8){
return false
}

if(temNumero && temMaiuscula && temMinuscula){
return true
}

return false


}

function cadastrar(){

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

let mensagem = document.getElementById("mensagem")

if(nome === ""|| email === "" || senha === ""){
mensagem.innerText = "preencha todos os campos"
return
}
if(!verificarsenha(senha)){
mensagem.innerText = "senha fraca! Use 8 caracteres, numero,maiuscula e minuscula."
return
}

mensagem.innerText = " cadastro realizado com sucesso!"


}