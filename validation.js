const form = document.querySelector("form")
const email = document.getElementById("email")
const textEmail = document.getElementById("textEmail")
const password = document.getElementById("password")
const textPassword = document.getElementById("textPassword")
const textForm = document.getElementById("textForm")


form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    if(email.value === "" && password.value === "") {
        textForm.textContent = "Você precisa preencher todos os campos"
    } else if (
        validadeEmail(email.value) === true &&
        validadePassword(password.value) === true) {
            textEmail.textContent = ""
            textPassword.textContent = ""
            textForm.textContent = "Email e senha validados com sucesso"
            console.log(`E-mail: ${email.value}`)
            console.log(`Senha: ${password.value}`)
    } else {
            textForm.textContent = "Email e senha com formato inadequado"
            console.log("Não foi possível fazer a validação")
    }
})

email.addEventListener("keyup", () => {
    if(validadeEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser Ex: abc@email.com"
    } else {
        textEmail.textContent = ""
    }
})

password.addEventListener("keyup", () => {
    if(validadePassword(password.value) !== true) {
        textPassword.textContent = "O formato da senha deve ser no min 6 caracteres e carater especial"
    } else {
        textPassword.textContent = ""
    }
})



function validadeEmail (email) {
    const emailParameter =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    return emailParameter.test(email)
}

function validadePassword (password) {
    const passwordParameter = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^6&*]{6,16}$/
    return passwordParameter.test(password)
}