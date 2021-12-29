var verificar_email = document.querySelector("#verificar-email")
var verificar_telefone = document.querySelector("#verificar-telefone")
var verificar_cpf = document.querySelector("#verificar-cpf")

function verif_cpf(){
    const cpf = document.querySelector("#cpf").value
    const cpfRegex = /(?:\d{3}\.){2}\d{3}-\d{2}/g
    const resultado = document.querySelector("#resultado-cpf")
    const test = cpfRegExp.test(cpf)
    if(test == true){
        resultado.insertAdjacentHTML("afterend", "Modelo válido ->")
    }else{
        resultado.insertAdjacentHTML("afterend", "Modelo inválido ->") 
    }
    
}

function verif_telefone(){
    const telefone = document.querySelector("#telefone").value
    const telefoneRegex = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g
    const resultado = document.querySelector("#resultado-telefone")
    const test = telefoneRegex.test(telefone)
    if(test == true){
        resultado.insertAdjacentHTML("afterend", "Modelo válido ->")
    }else{
        resultado.insertAdjacentHTML("afterend", "Modelo inválido ->") 
    }
    
}

function verif_email(){
    const email = document.querySelector("#email").value
    const emailRegex = /^(\w|\.|-){3,25}@\w+\.(com(\.br)?|net)$/gi
    const resultado = document.querySelector("#resultado-email")
    const test = emailRegex.test(email)
    if(test == true){
        resultado.insertAdjacentHTML("afterend", "Modelo válido ->")
    }else{
        resultado.insertAdjacentHTML("afterend", "Modelo inválido ->") 
    }
    
}


verificar_cpf.addEventListener("click", verif_cpf)

verificar_telefone.addEventListener("click", verif_telefone)

verificar_email.addEventListener("click", verif_email)