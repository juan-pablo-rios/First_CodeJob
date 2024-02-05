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

    
    // FUNCIÓN fetch() PARA CONECTARSE CON EL json-server Y VERIFICAR LOS DATOS:
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((element) => {
    let result = element.filter(function (element) {
        var userOnline = element.contact.mail == email && element.password == password;
        console.log('Primer Fetch', userOnline);
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

        // ENVIAR USER NAME AL sessionStorage:
        sessionStorage.setItem('name', result[0].name);// ----------------aaaaaaaaaaaaaaaaaaaaaaaaaaa
        let effectTitleIntro = document.getElementById('effectTitleIntro');
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
        var userOnline = element.contact.mail == email && element.password == password;
        console.log('Tercer Fetch: ',userOnline);
        return userOnline
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
      

      /* PROFILE */ // --------------------------------------------¿SE DEBE DE REPETIR LA DECLARACIÓN DE VARIABLES NUEVAMENTE?
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
            
  
            ilContentListIndex.addEventListener('click', function () {
              verquepresiono(element.puesto, element.id);
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

  let inputSearchOffer = document.getElementById("inputBarraBusquedaOffer");
  let formSearchOffer = document.getElementById("resultOffer");
  
  inputSearchOffer.onkeyup = (e) => {
    let userDataOffer = e.target.value.toLowerCase();
    formSearchOffer.textContent = '';
  
    if (userDataOffer.length > 1) {
      fetch("http://localhost:4000/ofertasLaborales")
        .then(response => response.json())
        .then(data => {
          const matchingOffersOffer = data.filter(element => element.puesto.toLowerCase().includes(userDataOffer));
  
          matchingOffersOffer.forEach((element) => {
            let ilContentListOffer = document.createElement('button');
            ilContentListOffer.setAttribute("type", "button");
            ilContentListOffer.classList.add('list-group-item', 'list-group-item-action');
            ilContentListOffer.textContent = element.puesto;
  
            // Agrega el botón al formulario
            formSearchOffer.appendChild(ilContentListOffer);
            
  
            ilContentListOffer.addEventListener('click', function () {
              verquepresiono(element.puesto, element.id);
            });
          });
        })
        .catch(error => {
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




// // Crear y agregar elementos HTML utilizando JavaScript
// const containerOffer = document.querySelector('.containerOffer');
// const url = 'http://localhost:4000/ofertasLaborales';

// // Realizar la petición al servidor
// fetch(url)
//   .then(response => response.json())
//   .then(ofertasLaborales => {
//     // Supongamos que seleccionamos la primera oferta en la respuesta
//     const oferta = ofertasLaborales[0];

//     const infoOfferDiv = document.createElement('div');
//     infoOfferDiv.classList.add('infoOffer', 'rounded-4');

//     const titleH3 = document.createElement('h3');
//     titleH3.classList.add('offertTitle', 'mb-3');
//     titleH3.textContent = oferta.puesto;

//     const companyNameH4 = document.createElement('h4');
//     companyNameH4.classList.add('companyName', 'mb-3');
//     companyNameH4.textContent = oferta.empresa;

//     const modalityAndLanguageH4 = document.createElement('h4');
//     modalityAndLanguageH4.classList.add('modalityAndLenguage', 'mb-5');
//     const offerModalitySpan = document.createElement('span');
//     offerModalitySpan.classList.add('offerModality');
//     offerModalitySpan.textContent = oferta.ubicacion.split('/')[0]; // Supongamos que 'Remoto/Ingles' está en ubicacion
//     const offerLanguageSpan = document.createElement('span');
//     offerLanguageSpan.classList.add('offerLenguage');
//     offerLanguageSpan.textContent = oferta.ubicacion.split('/')[1];
//     modalityAndLanguageH4.appendChild(offerModalitySpan);
//     modalityAndLanguageH4.appendChild(document.createTextNode('/'));
//     modalityAndLanguageH4.appendChild(offerLanguageSpan);

//     const rowButtonOfferDiv = document.createElement('div');
//     rowButtonOfferDiv.classList.add('row', 'rowButtonOffer', 'd-flex', 'justify-content-center', 'mb-2');

//     const buttonSalaryOfferDiv = document.createElement('div');
//     buttonSalaryOfferDiv.classList.add('col-md-3', 'buttonSalaryOffer', 'd-flex', 'justify-content-center');
//     const salaryButton = document.createElement('button');
//     salaryButton.setAttribute('type', 'button');
//     salaryButton.classList.add('btn', 'btnStyleOffer');
//     salaryButton.textContent = oferta.salario;
//     buttonSalaryOfferDiv.appendChild(salaryButton);
//     rowButtonOfferDiv.appendChild(buttonSalaryOfferDiv);

//     const buttonContractOfferDiv = document.createElement('div');
//     buttonContractOfferDiv.classList.add('col-md-6', 'buttonContractOffer', 'd-flex', 'justify-content-center');
//     const contractButton = document.createElement('button');
//     contractButton.setAttribute('type', 'button');
//     contractButton.classList.add('btn', 'btnStyleOffer');
//     contractButton.textContent = oferta.tipoContrato;
//     buttonContractOfferDiv.appendChild(contractButton);
//     rowButtonOfferDiv.appendChild(buttonContractOfferDiv);

//     const buttonWorkDayOfferDiv = document.createElement('div');
//     buttonWorkDayOfferDiv.classList.add('col-md-3', 'buttonWorkDayOffer', 'd-flex', 'justify-content-center');
//     const workDayButton = document.createElement('button');
//     workDayButton.setAttribute('type', 'button');
//     workDayButton.classList.add('btn', 'btn-light', 'btnStyleOffer');
//     workDayButton.textContent = oferta.jornadaLaboral;
//     buttonWorkDayOfferDiv.appendChild(workDayButton);
//     rowButtonOfferDiv.appendChild(buttonWorkDayOfferDiv);

//     const lineOfferHr = document.createElement('hr');
//     lineOfferHr.classList.add('border', 'lineOffer', 'border-1', 'opacity-100');

//     const descriptionParagraphP = document.createElement('p');
//     descriptionParagraphP.classList.add('offerDescriptionParagraph');
//     descriptionParagraphP.innerHTML = oferta.descripcion;

//     const requisitosList = document.createElement('ol');
//     oferta.requisitos.forEach(requisito => {
//       const requisitoLi = document.createElement('li');
//       requisitoLi.textContent = requisito;
//       requisitosList.appendChild(requisitoLi);
//     });

//     const requisitosH5 = document.createElement('h5');
//     requisitosH5.textContent = 'Requerimientos';

//     const applyButtonDiv = document.createElement('div');
//     applyButtonDiv.classList.add('row', 'rowButtonOffer', 'd-flex', 'justify-content-center', 'align-content-end', 'mt-5');
//     const applyButtonContainerDiv = document.createElement('div');
//     applyButtonContainerDiv.classList.add('col-md-4', 'buttonapplyOffer');
//     const applyButton = document.createElement('button');
//     applyButton.setAttribute('type', 'button');
//     applyButton.classList.add('btn', 'btnStyleOffer');
//     applyButton.textContent = 'Aplicar a la Vacante';
//     applyButtonContainerDiv.appendChild(applyButton);
//     applyButtonDiv.appendChild(applyButtonContainerDiv);

//     // Agregar los elementos al contenedor principal
//     infoOfferDiv.appendChild(titleH3);
//     infoOfferDiv.appendChild(companyNameH4);
//     infoOfferDiv.appendChild(modalityAndLanguageH4);
//     infoOfferDiv.appendChild(rowButtonOfferDiv);
//     infoOfferDiv.appendChild(lineOfferHr);
//     infoOfferDiv.appendChild(descriptionParagraphP);
//     infoOfferDiv.appendChild(requisitosH5);
//     infoOfferDiv.appendChild(requisitosList);
//     infoOfferDiv.appendChild(applyButtonDiv);

//     containerOffer.appendChild(infoOfferDiv);
//   })
//   .catch(error => console.error('Error al obtener datos:', error));
