// ------------------------------------------- RESPONSIVE NAVBAR -------------------------------------------
const toggleMenu = () => document.body.classList.toggle("open");

// BOTÓN RESPONSIVE PARA ABRIR EL MODAL:
let openButtonSignInResponsive = document.getElementById(
  "openButtonSignInResponsive"
);

// let body = document.getElementById("body");
// openButtonSignInResponsive.onclick = function () {
//     body.classList.remove('open');
// }

// FUNCIÓN PARA ABRIR EL MODAL RESPONSIVE:
function modal() {
  signInModal.style.display = "block";
  toggleMenu();
};

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
openButtonSignIn.onclick = function () {
  console.log("hjjjj");
  signInModal.style.display = "block";
};
// FUNCIÓN PARA CERRAR EL MODAL:
closeModal.onclick = function () {
  signInModal.style.display = "none";
};
// CLICK AFUERA DEL MODAL, CIERRA EL MODAL:
window.onclick = function (event) {
  if (event.target == signInModal) {
    signInModal.style.display = "none";
  }
};

// ------------------------------------------------------------------ SIGN IN ------------------------------------------------------------------

// FUNCION PARA INICIAR SESIÓN:
function pressSignIn() {
    // INICIALIZACIÓN DE VARIABLES CON LOS VALORES DE LOS INPUTS:
    let email = document.getElementById("signInEmailInput").value;
    let password = document.getElementById("signInPasswordInput").value;

    /*INPUTS DE DEL PROFILE LOS CUALES VAN A HACER CAMBIADOS*/
    let webSite = document.getElementById("profilePageWeb")
    let emailProfile = document.getElementById("profileEmail");
    let telNumberProfile = document.getElementById("profileTelNumber");
    let country = document.getElementById("country");
    let name = document.getElementById("nameUserProfile");
    
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
            
            webSite.textContent = result[0].contact.link;
            emailProfile.textContent = result[0].contact.mail;
            telNumberProfile.textContent = result[0].contact.call;
            country.textContent = result[0].city;
            name.textContent = result[0].name;
        }
        else {
            alert('¡Los datos ingresados no son válidos!');
        }
    })
}
// ------------------------------------------------------------------ SIGN UP ------------------------------------------------------------------

function createUser() {
  // CAPTURAR VALORES DE LOS INPUTS:
  let signUpNameInput = document.getElementById("signUpNameInput");
  let signUpEmailInput = document.getElementById("signUpEmailInput");
  let signUpPhoneInput = document.getElementById("signUpPhoneInput");
  let signUpPasswordInput = document.getElementById("signUpPasswordInput");
  let signUpConfirmPasswordInput = document.getElementById(
    "signUpConfirmPasswordInput"
  );
  let signUpDateInput = document.getElementById("signUpDateInput");
  let signUpCityInput = document.getElementById("signUpCityInput");
  let signUpWebsiteInput = document.getElementById("signUpWebsiteInput");
  // let signUpCvInput = document.getElementById('signUpCvInput').value;

  // Validación de campos vacíos
  let isValid = true;

  // Validación del campo de teléfono
  if (signUpPhoneInput.value === "") {
    signUpPhoneInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpPhoneInput.classList.remove("is-invalid");
    signUpPhoneInput.classList.add("is-valid");
  }

  // Validación del campo de contraseña
  if (signUpPasswordInput.value === "") {
    signUpPasswordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpPasswordInput.classList.remove("is-invalid");
    signUpPasswordInput.classList.add("is-valid");
  }

  // Validación del campo de confirmación de contraseña
  if (
    signUpConfirmPasswordInput.value === "" ||
    signUpPasswordInput.value != signUpConfirmPasswordInput.value
  ) {
    signUpConfirmPasswordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpConfirmPasswordInput.classList.remove("is-invalid");
    signUpConfirmPasswordInput.classList.add("is-valid");
  }

  // Validación del campo de fecha
  if (signUpDateInput.value === "") {
    signUpDateInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpDateInput.classList.remove("is-invalid");
    signUpDateInput.classList.add("is-valid");
  }

  // Validación del campo de ciudad
  if (signUpCityInput.value === "") {
    signUpCityInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpCityInput.classList.remove("is-invalid");
    signUpCityInput.classList.add("is-valid");
  }

  // Validación del campo de sitio web
  if (signUpWebsiteInput.value === "") {
    signUpWebsiteInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpWebsiteInput.classList.remove("is-invalid");
    signUpWebsiteInput.classList.add("is-valid");
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
      name: signUpNameInput.value,
      email: signUpEmailInput.value,
      password: signUpConfirmPasswordInput.value,
      password_confirmation: signUpPasswordInput.value,
      phone_number: signUpPhoneInput.value,
      website: signUpWebsiteInput.value,
      city: signUpCityInput.value,
      birthday: signUpDateInput.value,
      CV: "",
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoUpdated),
    }).then((response) => {
      console.log(response.ok);
      console.log("Success");
      signUpNameInput.value = "";
      signUpEmailInput.value = "";
      signUpPhoneInput.value = "";
      signUpPasswordInput.value = "";
      signUpConfirmPasswordInput.value = "";
      signUpDateInput.value = "";
      signUpCityInput.value = "";
      signUpWebsiteInput.value = "";
    });
  }
}
