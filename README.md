# First_CodeJob

https://www.youtube.com/@andrescortesdev/featured


// FUNCION PARA VERIFICAR SI EL BOTON INICIAR SESION ES PRESIONADO

function pressSignIn() {
    let email = document.getElementById("signInEmailInput").value;
    let password = document.getElementById("signInPasswordInput").value;
    console.log("press");

    fetch("http://localhost:3000/users").then(response => response.json()).then(element => {
        console.log(element)

        let result = element.filter(function (element) { 
            return element.email == email && element.password == password
        })

        console.log(result);

        if (result.length > 0) {
            console.log("success")
        }
        else {
            console.log("error")
        }
        
    });
}

// JSON RECUERDE LOS COMANDOS ESTA EN EL VIDEO PARA EL FETCH

infoUpdated = {
            name: signUpNameInput,
            email: signUpEmailInput,
            password: signUpPhoneInput,
            password_confirmation : signUpPasswordInput,
            phone_number : signUpConfirmPasswordInput,
            city: signUpCityInput, 
            birthday : signUpDateInput,
            CV : "",
        };
