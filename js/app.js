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
}

let signInOptionResponsive = document.getElementById("signInOptionResponsive");
// FUNCIÓN PARA ABRIR EL MODAL DESDE EL NAVBAR RESPONSIVE:
signInOptionResponsive.onclick = function () {
  signInModal.style.display = "block";
  toggleMenu();
};

// --------------------------------------------- SIGN IN MODAL ---------------------------------------------
// MODAL:
let signInModal = document.getElementById("signInModal");
// BOTÓN PARA ABRIR EL MODAL:
let openButtonSignIn = document.getElementById("openButtonSignIn");
// BOTÓN PARA CERRAR EL MODAL:
let closeModal = document.getElementById("closeModalSignIn");
// FUNCIÓN PARA ABRIR EL MODAL:
openButtonSignIn.onclick = function () {
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
// INICIALIZACIÓN DE VARIABLES CON LOS id DEL TOP BOX:
let divNavNormal = document.getElementById("topBoxNormal");
let divNavSignIn = document.getElementById("topBoxSignIn");
divNavSignIn.style.display = "none";

// FUNCION PARA INICIAR SESIÓN:
function pressSignIn() {
    // INICIALIZACIÓN DE VARIABLES CON LOS VALORES DE LOS INPUTS:
    let email = document.getElementById("signInEmailInput").value;
    let password = document.getElementById("signInPasswordInput").value;
    
    /*INPUTS DE DEL PROFILE LOS CUALES VAN A HACER CAMBIADOS*/
    let name = document.getElementById("nameUserProfile");
    let job = document.getElementById("job-profile");
    let city = document.getElementById("city");
    let aboutMe = document.getElementById("paragraph");

    let webSite = document.getElementById("profilePageWeb");
    let emailProfile = document.getElementById("profileEmail");
    let telNumberProfile = document.getElementById("profileTelNumber");

    let designItem1 = document.getElementById("designItem1");
    let designItem2 = document.getElementById("designItem2");
    let designItem3 = document.getElementById("designItem3");

    let techniques = document.getElementById("techniques");
    let process = document.getElementById("paragraphProcess"); 

    let UName = document.getElementById("UName"); 
    let UPostName = document.getElementById("UPostName"); 
    let UDate = document.getElementById("UDate"); 
    let ULocation = document.getElementById("ULocation"); 
    
    let jobCompany1 = document.getElementById("jobCompany1")
    let jobPosition1 = document.getElementById("jobPosition1"); 
    let placeJob1 = document.getElementById("placeJob1"); 
    let fromTime1 = document.getElementById("fromTime1"); 
    let toTime1 = document.getElementById("toTime1"); 
    let exp1 = document.getElementById("exp1");

    let jobCompany2 = document.getElementById("jobCompany2")
    let jobPosition2 = document.getElementById("jobPosition2"); 
    let placeJob2 = document.getElementById("placeJob2"); 
    let fromTime2 = document.getElementById("fromTime2"); 
    let toTime2 = document.getElementById("toTime2"); 
    let exp2 = document.getElementById("exp2");

    let jobCompany3 = document.getElementById("jobCompany3")
    let jobPosition3 = document.getElementById("jobPosition3"); 
    let placeJob3 = document.getElementById("placeJob3"); 
    let fromTime3 = document.getElementById("fromTime3"); 
    let toTime3 = document.getElementById("toTime3"); 
    let exp3 = document.getElementById("exp3");

    // INICIALIZACIÓN DE VARIABLES CON LOS id DE LAS OPCIONES QUE SE DEBEN REMOVER Y AGREGAR AL INICIAR SESIÓN:
    let profileOptionResponsive = document.getElementById("burger_menu_item_4");
    let signInOptionResponsive = document.getElementById("signInOptionResponsive");
    let signUpOptionResponsive = document.getElementById("burger_menu_item_6");
    let logOutOptionResponsive = document.getElementById("burger_menu_item_7");
    // INICIALIZACIÓN DE VARIABLE CON EL ID DEL CAMPO A LLENAR CON EL NOMBRE:
    let putUserName = document.getElementById("userName");
    // FUNCIÓN fetch() PARA CONECTARSE CON EL json-server Y VERIFICAR LOS DATOS:
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((element) => {
    let result = element.filter(function (element) {
        var userOnline = element.contact.mail == email && element.password == password;
        console.log(userOnline)
        return userOnline
    });
    // CONDICIONAL PARA COMPROBAR QUE SE ENCONTRÓ UN USUARIO VALIDO:
    if (result.length > 0) {
        
        // CERRAR MODAL:
        signInModal.style.display = "none";
        // DESAPARECER NAVBAR NORMAL:
        divNavNormal.classList.add("displayNone");
        // APARECER NAVBAR SIGN IN:
        divNavSignIn.classList.add("displayBlock");
        divNavSignIn.style.display = "flex";
        // DESAPARECER OPCIONES DEL NAVBAR RESPONSIVE:
        signInOptionResponsive.classList.add('displayNone');
        signUpOptionResponsive.classList.add('displayNone');
        // MOSTRAR OPCIONES DEL NAVBAR RESPONSIVE:
        logOutOptionResponsive.classList.add('displayBlock');
        profileOptionResponsive.classList.add('displayBlock');
        // INSERTAR NOMBRE DE USUARIO:
        putUserName.innerHTML = result[0].name;

        // ENVIAR USER NAME AL localstorage:
        sessionStorage.setItem('name', result[0].name);// ----------------asdsasdasdad
        let effectTitleIntro = document.getElementById('effectTitleIntro');
        effectTitleIntro.innerHTML = sessionStorage.getItem('name');
        // SE ENVIA EL EMAIL Y LA PASSWORD DE LOS INPUTS AL SESSIONSTORAGE:
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        // ENVIAR AUTORIZACIÓN DE INICIO DE SESIÓN AL sessionStorage:
        sessionStorage.setItem('auth', 1);
        // INSERTAR INFORMACIÓN DEL PERFIL:
        name.textContent = result[0].name;
        job.textContent = result[0].role;
        city.textContent = result[0].city;
        aboutMe.textContent = result[0].about_me;

        webSite.textContent = result[0].contact.link;
        emailProfile.textContent = result[0].contact.mail;
        telNumberProfile.textContent = result[0].contact.call;

        console.log(result[0].skills);
        designItem1.textContent = result[0].skills.design[0]
        designItem2.textContent = result[0].skills.design[1]
        designItem3.textContent = result[0].skills.design[2]

        techniques.textContent = result[0].skills.techniques
        process.textContent = result[0].skills.processes

        UName.textContent = result[0].education.university
        UPostName.textContent = result[0].education.degree
        UDate.textContent = result[0].education.graduation_year
        ULocation.textContent = result[0].location

        jobCompany1.textContent = result[0].experience[0].company
        jobPosition1.textContent = result[0].experience[0].position
        placeJob1.textContent = result[0].experience[0].location
        fromTime1.textContent = result[0].experience[0].durationStart
        toTime1.textContent = result[0].experience[0].durationEnd
        exp1.textContent = result[0].experience[0].description
        

        jobCompany2.textContent = result[0].experience[1].company
        jobPosition2.textContent = result[0].experience[1].position
        placeJob2.textContent = result[0].experience[1].location
        fromTime2.textContent = result[0].experience[1].durationStart
        toTime2.textContent = result[0].experience[1].durationEnd
        exp2.textContent = result[0].experience[1].description
        
        jobCompany3.textContent = result[0].experience[2].company
        jobPosition3.textContent = result[0].experience[2].position
        placeJob3.textContent = result[0].experience[2].location
        fromTime3.textContent = result[0].experience[2].durationStart
        toTime3.textContent = result[0].experience[2].durationEnd
        exp3.textContent = result[0].experience[2].description

        jobCompany4.textContent = result[0].experience[3].company
        jobPosition4.textContent = result[0].experience[3].position
        placeJob4.textContent = result[0].experience[3].location
        fromTime4.textContent = result[0].experience[3].durationStart
        toTime4.textContent = result[0].experience[3].durationEnd
        exp4.textContent = result[0].experience[3].description
      } else {
        alert("¡Los datos ingresados no son válidos!");
        }
    });
}

// FUNCIÓN PARA COMPROBAR SI AL CAMBIAR DE PÁGINA EL USUARIO SIGUE 'ONLINE' PARA MANTENER EL NAVBAR SIGNIN:
function pageChange(){
  // INICIALIZACIÓN DE VARIABLES CON LOS VALORES DE LOS INPUTS:
  let email = sessionStorage.getItem('email');
  let password = sessionStorage.getItem('password');
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((element) => {
    let result = element.filter(function (element) {
        var userOnline = element.contact.mail == email && element.password == password;
        console.log(userOnline)
        console.log(email);
        return userOnline
    });
    if (result.length > 0){
      // ENVIAR USER NAME AL localstorage:
      sessionStorage.setItem('name', result[0].name);// ---------------- REVISAR CÓDIGO PARA PODER PONER EL NAVBAR Y EL PERFIL AL RECARGAR PÁGINA
      let effectTitleIntro = document.getElementById('effectTitleIntro');
      effectTitleIntro.innerHTML = sessionStorage.getItem('name');
    }
  });
}
pageChange();
// ------------------------------------------------------------------ LOG OUT ------------------------------------------------------------------
// FUNCIÓN PARA CERRAR SESIÓN:
function logOut(){
  // MODIFICACIÓN DE LA AUTORIZACIÓN EN EL sessionStorage:
  sessionStorage.setItem('auth', 0);
  let auth = sessionStorage.getItem('auth');
  if(auth != 1){
    location.href = '../index.html';
  }
}
// FUNCIÓN PARA CERRAR SESIÓN DESDE EL INDEX:
function logOutIndex(){
  // MODIFICACIÓN DE LA AUTORIZACIÓN EN EL sessionStorage:
  sessionStorage.setItem('auth', 0);
  let auth = sessionStorage.getItem('auth');
  if(auth != 1){
    location.href = './index.html';
  }
}
// ------------------------------------------------------------------ SIGN UP ------------------------------------------------------------------

function createUser() {
  // CAPTURAR VALORES DE LOS INPUTS:
  let signUpNameInput = document.getElementById("signUpNameInput");
  let signUpEmailInput = document.getElementById("signUpEmailInput");
  let signUpPhoneInput = document.getElementById("signUpPhoneInput");
  let signUpPasswordInput = document.getElementById("signUpPasswordInput");
  let signUpConfirmPasswordInput = document.getElementById("signUpConfirmPasswordInput");
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
