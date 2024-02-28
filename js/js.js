

button.addEventListener("click",(event) => {
    event.preventDefault()  
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        alert("Sucesso");
        window.location.href = "pages/tela-principal.html";
    }else{
        alert('Preencha os campos ou login e senha errados!');
    }

})
