// ------------------------------------------- RESPONSIVE NAVBAR -------------------------------------------
const toggleMenu = () => document.body.classList.toggle("open");

// BOTÓN RESPONSIVE PARA ABRIR EL MODAL:
let signInOptionResponsive = document.getElementById("signInOptionResponsive");
// FUNCIÓN PARA ABRIR EL MODAL DESDE EL NAVBAR RESPONSIVE:
signInOptionResponsive.onclick = function() {
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
// FUNCION PARA INICIAR SESIÓN:
function pressSignIn() {
    // INICIALIZACIÓN DE VARIABLES CON LOS VALORES DE LOS INPUTS:
    let email = document.getElementById("signInEmailInput").value;
    let password = document.getElementById("signInPasswordInput").value;
    // INICIALIZACIÓN DE VARIABLES CON LOS id DE LOS NAVBAR:
    let navbarSignIn = document.getElementById("containeMenuSignin");
    let navbarNormal = document.getElementById("containerMenu");
    // INICIALIZACIÓN DE VARIABLES CON LOS id DE LAS OPCIONES signIn DEL NAVBAR:
    let profileOptionResponsive = document.getElementById('burger_menu_item_4');
    let logOutOptionResponsive = document.getElementById('burger_menu_item_7');
    let signUpOption = document.getElementById('burger_menu_item_6');
    // INICIALIZACIÓN DE VARIABLE CON EL ID DEL CAMPO A LLENAR CON EL NOMBRE:
    let putUserName = document.getElementById('userName');
    // FUNCIÓN fetch() PARA CONECTARSE CON EL json-server Y VERIFICAR LOS DATOS:
    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(element => {
        let result = element.filter(function (element) { 
            return element.email == email && element.password == password
        })
        if (result.length > 0) {
            console.log("ingreso");
            // CERRAR MODAL:
            signInModal.style.display = "none";
            // DESAPARECER NAVBAR NORMAL:
            navbarNormal.classList.add('displayNone');
            // HACER APARECER NAVBAR SIGN IN:
            navbarSignIn.classList.add('displayBlock');
            // HACER APARECER logOut OPTION:
            logOutOptionResponsive.classList.add('displayBlock');
            // HACER APARECER profile OPTION:
            profileOptionResponsive.classList.add('displayBlock');
            // HACER DESAPARECER signIn OPTION:
            signInOptionResponsive.classList.add('displayNone');
            // HACER DESAPARECER signUp OPTION:
            signUpOption.classList.add('displayNone');
            // PONER NOMBRE DEL USUARIO EN EL NAVBAR:
            putUserName.innerHTML = result[0].name;
        }
        else {
            alert('¡Los datos ingresados no son válidos!');
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

function createUser() {
    // CAPTURAR VALORES DE LOS INPUTS:
    let signUpNameInput = document.getElementById('signUpNameInput').value;
    let signUpEmailInput = document.getElementById('signUpEmailInput').value;
    let signUpPhoneInput = document.getElementById('signUpPhoneInput').value;
    let signUpPasswordInput = document.getElementById('signUpPasswordInput').value;
    let signUpConfirmPasswordInput = document.getElementById('signUpConfirmPasswordInput').value;
    let signUpDateInput = document.getElementById('signUpDateInput').value;
    let signUpCityInput = document.getElementById('signUpCityInput').value;
    let signUpWebsiteInput = document.getElementById('signUpWebsiteInput').value;
    // let signUpCvInput = document.getElementById('signUpCvInput').value;

    // Validación de campos vacíos
    let isValid = true;

    // Validación del campo de teléfono
    if (signUpPhoneInput === '') {
        document.getElementById('signUpPhoneInput').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('signUpPhoneInput').classList.remove('is-invalid');
        document.getElementById('signUpPhoneInput').classList.add('is-valid');
    }

    // Validación del campo de contraseña
    if (signUpPasswordInput === '') {
        document.getElementById('signUpPasswordInput').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('signUpPasswordInput').classList.remove('is-invalid');
        document.getElementById('signUpPasswordInput').classList.add('is-valid');
    }

    // Validación del campo de confirmación de contraseña
    if (signUpConfirmPasswordInput === '') {
        document.getElementById('signUpConfirmPasswordInput').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('signUpConfirmPasswordInput').classList.remove('is-invalid');
        document.getElementById('signUpConfirmPasswordInput').classList.add('is-valid');
    }

    // Validación del campo de fecha
    if (signUpDateInput === '') {
        document.getElementById('signUpDateInput').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('signUpDateInput').classList.remove('is-invalid');
        document.getElementById('signUpDateInput').classList.add('is-valid');
    }

    // Validación del campo de ciudad
    if (signUpCityInput === '') {
        document.getElementById('signUpCityInput').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('signUpCityInput').classList.remove('is-invalid');
        document.getElementById('signUpCityInput').classList.add('is-valid');
    }

    // Validación del campo de sitio web
    if (signUpWebsiteInput === '') {
        document.getElementById('signUpWebsiteInput').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('signUpWebsiteInput').classList.remove('is-invalid');
        document.getElementById('signUpWebsiteInput').classList.add('is-valid');
    }

    // Validación del campo de CV
    // if (signUpCvInput === '') {
    //     document.getElementById('signUpCvInput').classList.add('is-invalid');
    //     isValid = false;
    // } else {
    //     document.getElementById('signUpCvInput').classList.remove('is-invalid');
    //     document.getElementById('signUpCvInput').classList.add('is-valid');
    // }

    // Si todos los campos son válidos, realiza la solicitud fetch
    if (isValid) {

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
    }
};
