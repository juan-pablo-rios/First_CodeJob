// ------------------------------------------- RESPONSIVE NAVBAR -------------------------------------------
const toggleMenu = () => document.body.classList.toggle("open");

// BOTÓN RESPONSIVE PARA ABRIR EL MODAL:
let openButtonSignInResponsive = document.getElementById(
  "openButtonSignInResponsive"
);

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
// INICIALIZACIÓN DE VARIABLE CON EL ID DEL CAMPO A LLENAR CON EL NOMBRE:
let putUserName = document.getElementById("userName");
// INICIALIZACIÓN DE VARIABLES CON LOS id DE LAS OPCIONES QUE SE DEBEN REMOVER Y AGREGAR AL INICIAR SESIÓN:
let profileOptionResponsive = document.getElementById("burger_menu_item_4");
let signUpOptionResponsive = document.getElementById("burger_menu_item_6");
let logOutOptionResponsive = document.getElementById("burger_menu_item_7");

// FUNCION PARA INICIAR SESIÓN:
function pressSignIn() {
    // INICIALIZACIÓN DE VARIABLES CON LOS VALORES DE LOS INPUTS:
    let email = document.getElementById("signInEmailInput").value;
    let password = document.getElementById("signInPasswordInput").value;
    
    /* INFORMACIÓN DE LA PÁGINA 'PROFILE' PARA MODIFICARLA SEGÚN EL USUARIO QUE INICIE SESIÓN */
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

    let jobCompany4 = document.getElementById("jobCompany4")
    let jobPosition4 = document.getElementById("jobPosition4"); 
    let placeJob4 = document.getElementById("placeJob4"); 
    let fromTime4 = document.getElementById("fromTime4"); 
    let toTime4 = document.getElementById("toTime4"); 
    let exp4 = document.getElementById("exp4");
    // FUNCIÓN fetch() PARA CONECTARSE CON EL json-server Y VERIFICAR LOS DATOS:
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((element) => {
    let result = element.filter(function (element) {
        return element.contact.mail == email && element.password == password;
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
        // INSERTAR NOMBRE DE USUARIO EN EL NAVBAR:
        putUserName.innerHTML = result[0].name;
        // ENVIAR USER NAME AL sessionStorage:
        sessionStorage.setItem('name', result[0].name);
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
// ------------------------------------------------------------------------------- PAGE CHANGE -------------------------------------------------------------------------------
// FUNCIÓN PARA COMPROBAR SI AL CAMBIAR DE PÁGINA EL USUARIO SIGUE 'ONLINE':
function pageChange(){
  // INICIALIZACIÓN DE VARIABLES CON LOS VALORES DE LOS INPUTS:
  let email = sessionStorage.getItem('email');
  let password = sessionStorage.getItem('password');
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((element) => {
    let result = element.filter(function (element) {
        return element.contact.mail == email && element.password == password;
    });
    // INICIALIZACIÓN DE VARIABLE QUE CAPTURA LA AUTORIZACIÓN DEL sessionStorage:
    let auth = sessionStorage.getItem('auth');
    // SI EL USUARIO SIGUE 'ONLINE':
    if (auth == 1){
      // DESAPARECER NAVBAR NORMAL:
      divNavNormal.classList.add("displayNone");
      // APARECER NAVBAR SIGN IN:
      divNavSignIn.classList.add("displayBlock");
      divNavSignIn.style.display = "flex";
      // INSERTAR NOMBRE DE USUARIO:
      putUserName.innerHTML = result[0].name;
      // DESAPARECER OPCIONES DEL NAVBAR RESPONSIVE:
      signInOptionResponsive.classList.add('displayNone');
      signUpOptionResponsive.classList.add('displayNone');
      // MOSTRAR OPCIONES DEL NAVBAR RESPONSIVE:
      logOutOptionResponsive.classList.add('displayBlock');
      profileOptionResponsive.classList.add('displayBlock');
      /* PROFILE */
      /* INFORMACIÓN DE LA PÁGINA 'PROFILE' PARA MODIFICARLA SEGÚN EL USUARIO QUE INICIE SESIÓN */
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

      let jobCompany4 = document.getElementById("jobCompany4")
      let jobPosition4 = document.getElementById("jobPosition4"); 
      let placeJob4 = document.getElementById("placeJob4"); 
      let fromTime4 = document.getElementById("fromTime4"); 
      let toTime4 = document.getElementById("toTime4"); 
      let exp4 = document.getElementById("exp4");

      // INSERTAR INFORMACIÓN DEL PERFIL:
      name.textContent = result[0].name;
      job.textContent = result[0].role;
      city.textContent = result[0].city;
      aboutMe.textContent = result[0].about_me;
      webSite.textContent = result[0].contact.link;
      emailProfile.textContent = result[0].contact.mail;
      telNumberProfile.textContent = result[0].contact.call;
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
    }
  });
}
// SE LLAMA A LA FUNCIÓN AL RECARGAR LA PÁGINA PARA COMPROBAR LA INFORMACIÓN CONSTANTEMENTE:
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

  // VARIABLE PARA VALIDAR SI HAY CAMPOS VACÍOS:
  let isValid = true;
  // VALIDACIÓN DEL CAMPO DE TELÉFONO:
  if (signUpPhoneInput.value === "") {
    signUpPhoneInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpPhoneInput.classList.remove("is-invalid");
    signUpPhoneInput.classList.add("is-valid");
  }
  // VALIDACIÓN DEL CAMPO DE CONTRASEÑA:
  if (signUpPasswordInput.value === "") {
    signUpPasswordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpPasswordInput.classList.remove("is-invalid");
    signUpPasswordInput.classList.add("is-valid");
  }
  // // VALIDACIÓN DEL CAMPO DE CONFIRMAR CONTRASEÑA:
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
  // VALIDACIÓN DEL CAMPO FECHA:
  if (signUpDateInput.value === "") {
    signUpDateInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpDateInput.classList.remove("is-invalid");
    signUpDateInput.classList.add("is-valid");
  }
  // VALIDACIÓN DEL CAMPO DE CIUDAD:
  if (signUpCityInput.value === "") {
    signUpCityInput.classList.add("is-invalid");
    isValid = false;
  } else {
    signUpCityInput.classList.remove("is-invalid");
    signUpCityInput.classList.add("is-valid");
  }
  // VALIDACIÓN DEL CAMPO DE SITIO WEB:
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

  // SI TODOS LOS CAMPOS SON VALIDOS, REALIZAR LA SOLICITUD FETCH:
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
    // FUNCIÓN FETCH PARA ENVIAR LOS DATOS Y CREAR UN NUEVO USUARIO:
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
function barraBusquedaIndex() {
  let inputSearchIndex = document.getElementById("inputBarraBusquedaIndex");
  
  let formSearchIndex = document.getElementById("resultIndex");
  
  inputSearchIndex.onkeyup = (e) => {
    let userDataIndex = e.target.value.toLowerCase();
    formSearchIndex.textContent = '';
  
    if (userDataIndex.length > 1) {
      fetch("http://localhost:4000/ofertasLaborales")
        .then(response => response.json())
        .then(data => {
          const matchingOffersIndex = data.filter(element => element.puesto.toLowerCase().includes(userDataIndex));
  
          matchingOffersIndex.forEach((element) => {
            let ilContentListIndex = document.createElement('button');
            ilContentListIndex.setAttribute("type", "button");
            ilContentListIndex.classList.add('list-group-item', 'list-group-item-action');
            ilContentListIndex.textContent = element.puesto;
  
            // Agrega el botón al formulario
            formSearchIndex.appendChild(ilContentListIndex);
  
            // Evento de clic al botón generado
            ilContentListIndex.addEventListener('click', function () {
              
              let selectedOfferTitle = element.puesto;
              let infoOfferElements = document.querySelectorAll(".infoOffer");
          
              // Iteramos sobre los elementos .infoOffer
              infoOfferElements.forEach(infoOffer => {

                  let offerTitle = infoOffer.querySelector('.offertTitle').textContent.trim();
                  
                  // Comparamos el título de la oferta con el título de la oferta seleccionada
                  if (offerTitle === selectedOfferTitle) {
                      infoOffer.classList.add("active");
                  } else {
                      // Si no coinciden, aseguramos de quitar la clase "active"
                      infoOffer.classList.remove("active");
                  }
              });
              location.href = "./html/offers.html"; // Redirige a la página de ofertas
            });

          });
        })
        .catch(error => {
          console.error('ERROR', error);
        });
  
      // Muestra el contenedor de resultados
      formSearchIndex.style.display = 'block';
    } else {
      // Oculta el contenedor de resultados si la entrada del usuario es corta
      formSearchIndex.style.display = 'none';
    }
  };
}

function barraBusquedaOffer() {
  // Obtiene el elemento de entrada de búsqueda de ofertas
  let inputSearchOffer = document.getElementById("inputBarraBusquedaOffer");
  // Obtiene el formulario de resultados de búsqueda de ofertas
  let formSearchOffer = document.getElementById("resultOffer");

  // Evento que se dispara al escribir en el campo de búsqueda
  inputSearchOffer.onkeyup = (e) => {
    // Obtiene el texto ingresado por el usuario y lo convierte a minúsculas
    let userDataOffer = e.target.value.toLowerCase();
    // Limpia el contenido del formulario de resultados
    formSearchOffer.textContent = '';

    // Verifica si la longitud del texto ingresado es mayor que 1
    if (userDataOffer.length > 1) {
      // Realiza una petición fetch para obtener las ofertas laborales
      fetch("http://localhost:4000/ofertasLaborales")
        .then(response => response.json()) // Convierte la respuesta a JSON
        .then(data => {
          // Filtra las ofertas laborales que coinciden con el texto ingresado por el usuario
          const matchingOffersOffer = data.filter(element => element.puesto.toLowerCase().includes(userDataOffer));

          // Itera sobre las ofertas coincidentes
          matchingOffersOffer.forEach((element) => {
            // Crea un elemento de botón para mostrar la oferta
            let ilContentListOffer = document.createElement('button');
            ilContentListOffer.setAttribute("type", "button");
            ilContentListOffer.classList.add('list-group-item', 'list-group-item-action');
            ilContentListOffer.textContent = element.puesto;

            // Evento de clic al botón generado
            ilContentListOffer.addEventListener('click', function () {
              
              let selectedOfferTitle = element.puesto;
              let infoOfferElements = document.querySelectorAll(".infoOffer");
          
              // Iteramos sobre los elementos .infoOffer
              infoOfferElements.forEach(infoOffer => {

                  let offerTitle = infoOffer.querySelector('.offertTitle').textContent.trim();
                  
                  // Comparamos el título de la oferta con el título de la oferta seleccionada
                  if (offerTitle === selectedOfferTitle) {
                      infoOffer.classList.add("active");
                  } else {
                      // Si no coinciden, aseguramos de quitar la clase "active"
                      infoOffer.classList.remove("active");
                  }
              });
            });

            // Agrega el botón al formulario de resultados
            formSearchOffer.appendChild(ilContentListOffer);
          });
        })
        .catch(error => {
          // Maneja cualquier error ocurrido durante la petición fetch
          console.error('ERROR', error);
        });

      // Muestra el contenedor de resultados
      formSearchOffer.style.display = 'block';
    } else {
      // Oculta el contenedor de resultados si la entrada del usuario es corta
      formSearchOffer.style.display = 'none';
    }
  };
}

fetch("http://localhost:4000/ofertasLaborales")
.then((response) => response.json())
.then((element) => {

  // Itera sobre las tarjetas de oferta y actualiza los elementos correspondientes
for (let i = 0; i < 4; i++) {
  // CARD
  let cardOfferTitle = document.querySelectorAll(".cardOfferTitle")[i];
  let cardCompanyName = document.querySelectorAll(".cardCompanyName")[i];
  let cardOfferModality = document.querySelectorAll(".cardOfferModality")[i];
  let cardOfferLenguage = document.querySelectorAll(".cardOfferLenguage")[i];
  let timeOffer = document.querySelectorAll(".timeOffer")[i];

  cardOfferTitle.textContent = element[i].puesto;
  cardCompanyName.textContent = element[i].empresa;
  cardOfferModality.textContent = element[i].modalidad;
  cardOfferLenguage.textContent = element[i].lenguage;
  timeOffer.textContent = element[i].fechaPublicacion;
}
})

fetch("http://localhost:4000/ofertasLaborales")
.then((response) => response.json())
.then((element) => {

  // Itera sobre las secciones de las tarjetas y actualiza los elementos correspondientes
  for (let i = 0; i < 4; i++) {
    // SECCION CARD
    let offertTitle = document.querySelectorAll(".offertTitle")[i];
    let companyName = document.querySelectorAll(".companyName")[i];
    let offerModality = document.querySelectorAll(".offerModality")[i];
    let offerLenguage = document.querySelectorAll(".offerLenguage")[i];
    let salary = document.querySelectorAll(".salary")[i];
    let contract = document.querySelectorAll(".contract")[i];
    let schedule = document.querySelectorAll(".schedule")[i];
    let offerDescriptionParagraph = document.querySelectorAll(".offerDescriptionParagraph")[i];
    let req1 = document.querySelectorAll(".req1")[i];
    let req2 = document.querySelectorAll(".req2")[i];

    offertTitle.textContent = element[i].puesto;
    companyName.textContent = element[i].empresa;
    offerModality.textContent = element[i].modalidad;
    offerLenguage.textContent = element[i].lenguage;
    salary.textContent = element[i].salarioTotal;
    // contract.textContent = element[i].
    schedule.textContent = element[i].horario;
    offerDescriptionParagraph.textContent = element[i].descripcion;
    req1.textContent = element[i].requisitos.educacionMinima;
    req2.textContent = element[i].requisitos.conocimientos;
  }

})

/**
 * Creación de un observador de intersección que aplica una clase CSS cuando los elementos entran en la vista.
 */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry); // Imprime la entrada del observador en la consola
    if (entry.isIntersecting) {
      // Si el elemento intersecta con el área visible de la página
      entry.target.classList.add('show'); // Agrega la clase 'show' al elemento
    } else {
      // Si el elemento ya no está intersectando con el área visible de la página
      entry.target.classList.remove('show'); // Elimina la clase 'show' del elemento
    }
  });
});

/**
 * Selección de elementos del DOM que se desvanecerán o aparecerán en la página.
 */
let apearLeft = document.querySelectorAll('.hidden'); // Selecciona elementos ocultos (corregido el nombre de la variable)
let hiddenStatic = document.querySelectorAll('.appear'); // Selecciona elementos estáticos ocultos
let appearRight = document.querySelectorAll('.appearRight'); // Selecciona elementos que aparecerán desde la derecha
let verticalUpDown = document.querySelectorAll('.verticalUpDown'); // Selecciona elementos que se desplazarán verticalmente

// Observa los elementos seleccionados y realiza acciones cuando se intersectan
apearLeft.forEach((el) => observer.observe(el));
hiddenStatic.forEach((el) => observer.observe(el));
appearRight.forEach((el) => observer.observe(el));
verticalUpDown.forEach((el) => observer.observe(el));

/**
 * Función de inicialización del widget de traducción de Google.
 */
function googleTranslateElementInit() {
  // Crea un nuevo widget de traducción de Google y lo inserta en el elemento con el ID "google_translate_element"
  new google.translate.TranslateElement({
    pageLanguage: 'es', // Idioma de la página original (español)
    includedLanguages: 'en,es', // Idiomas incluidos en la traducción (inglés y español)
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Diseño del widget
    gaTrack: true // Habilita el seguimiento de Google Analytics
  }, 'google_translate_element');
}
