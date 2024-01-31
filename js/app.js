// ------------------------------------------- RESPONSIVE NAVBAR -------------------------------------------
const toggleMenu = () => document.body.classList.toggle("open");

// BOTÓN RESPONSIVE PARA ABRIR EL MODAL:
let openButtonSignInResponsive = document.getElementById("openButtonSignInResponsive");

// let body = document.getElementById("body");
// openButtonSignInResponsive.onclick = function () {
//     body.classList.remove('open');
// }

// FUNCIÓN PARA ABRIR EL MODAL RESPONSIVE:
openButtonSignInResponsive.onclick = function() {
    signInModal.style.display = "block";
    toggleMenu();
}
// --------------------------------------------- SIGN IN MODAL ---------------------------------------------
// MODAL:
let signInModal = document.getElementById("signInModal");
// BOTÓN PARA ABRIR EL MODAL:
let openButtonSignIn = document.getElementById("openButtonSignIn");
// BOTÓN PARA CERRAR EL MODAL:
let closeModal = document.getElementById("closeModalSignIn");
// FUNCIÓN PARA ABRIR EL MODAL:
openButtonSignIn.onclick = function() {
    signInModal.style.display = "block";
}
// FUNCIÓN PARA CERRAR EL MODAL:
closeModal.onclick = function() {
    signInModal.style.display = "none";
}
// CLICK AFUERA DEL MODAL, CIERRA EL MODAL:
window.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
}



// ------------------------------------------------------------------ SIGN IN ------------------------------------------------------------------
// FUNCION PARA VERIFICAR SI EL BOTON INICIAR SESION ES PRESIONADO
function pressSignIn() {
    let email = document.getElementById("signInEmailInput").value;
    let password = document.getElementById("signInPasswordInput").value;
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(element => {
        let result = element.filter(function (element) { 
            return element.email == email && element.password == password
        })
        if (result.length > 0) {
            console.log("success")
        }
        else {
            console.log("error")
        }
    });
}
// ------------------------------------------------------------------ SIGN UP ------------------------------------------------------------------
function createUser() {
    // CAPTURAR VALORES DE LOS INPUTS:
    let signUpNameInput = document.getElementById('signUpNameInput').value;
    let signUpEmailInput = document.getElementById('signUpEmailInput').value;
    let signUpPhoneInput = document.getElementById('signUpPhoneInput').value;
    let signUpPasswordInput = document.getElementById('signUpPasswordInput').value;
    let signUpConfirmPasswordInput = document.getElementById('signUpConfirmPasswordInput');
    let signUpDateInput = document.getElementById('signUpDateInput').value;
    let signUpCityInput = document.getElementById('signUpCityInput').value;
    let signUpWebsiteInput = document.getElementById('signUpWebsiteInput').value;
    let signUpCvInput = document.getElementById('signUpCvInput').value;
    // SE CREA UN OBJETO CON LOS NUEVOS VALORES DE LOS ELEMENTOS:
    infoUpdated = {
        name: signUpNameInput,
        email: signUpEmailInput,
        password: signUpPhoneInput,
        password_confirmation : signUpPasswordInput,
        phone_number : signUpConfirmPasswordInput,
        country: signUpDateInput,
        city: signUpCityInput, 
        birthday : signUpWebsiteInput,
        CV : "",
    };
    // SE UTILIZA LA FUNCIÓN fetch() PARA COGER LA API Y ENVIARLE LOS DATOS ACTUALIZADOS DEL USER SELECCIONADO:
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(infoUpdated),
        })
        .then((response) => {
            console.log(response.ok);
            console.log('Success');
            location.reload();
        });
        signUpNameInput.value = '';
        signUpEmailInput.value = '';
        signUpPhoneInput.value = '';
        signUpPasswordInput.value = '';
        signUpConfirmPasswordInput.value = '';
        signUpDateInput.value = '';
        signUpCityInput.value = '';
        signUpWebsiteInput.value = '';
        signUpCvInput.value = '';
};