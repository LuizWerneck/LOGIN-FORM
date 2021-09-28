function confirmar(){
    var username = document.getElementById('username')
    var password = document.getElementById('password')
    var usuario = (username.value)
    var senha = (password.value)
    String.prototype.capitalize = function(){ // Colocar a primeira letra maiuscula
        return this.charAt(0).toUpperCase() + this.substr(1)
    }
    if (usuario == 'luiz' && senha == '123'){
        alert(`Seja bem vindo ${usuario.capitalize()}`)
    }else{
        alert(`Usuário ${usuario.capitalize()} não encontrado`)
    }
}