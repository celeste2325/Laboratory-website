/* Logic for the contact form on the contact page */

let formData = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  message: document.getElementById("message"),
};
let getFormDataLocalStorage = JSON.parse(
  localStorage.getItem("formContactData"),
);
/* The idea is this method will be invoked when the user enters the contact
page to automplete the form if there is data in local storage */
const autoCompleteForm = () => {
  if (getFormDataLocalStorage) {
    const formDataLocalStorage = getFormDataLocalStorage;
    formData.name.value = formDataLocalStorage.name;
    formData.email.value = formDataLocalStorage.email;
    formData.message.value = formDataLocalStorage.message;
  }
};
/* avoid errors when opening other pages */
const titlePage = document.title;
if (titlePage === "Contact") {
  autoCompleteForm();
}
/* set modal data to confirm form information before sending */
const createConfirmModalMessage = (data) => {
  const headerModal = document.getElementById("modalHeader");
  const modalBody = document.getElementById("modalBody");
  headerModal.textContent = "Please confirm your information before sending.";
  modalBody.textContent = `
    Name: ${data.name} | Email: ${data.email} | Message: ${data.message} 
    `;
};

/* sends form data to modal for confirmation before submit */
const handlerContactFormBtn = (event) => {
  /* prevents form submission because backend is not running */
  event.preventDefault();
  /* This data is sent to the modal for confirmation */
  formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  createConfirmModalMessage(formData);
};
const buttonContactForm = document.getElementById("contactFormBtn");
/* avoid errors when opening other pages */
if (buttonContactForm) {
  buttonContactForm.addEventListener("click", handlerContactFormBtn);
}
/* set Modal data to ask user if they want to save info for next time */
//to use localStorage
const handlerSendDataBtn = () => {
  /* the idea of this method is send the data in the backend 
and ask to the user if wants to save the data localy*/
  const saveDataLocalyHeader = document.getElementById("saveDataLocalyHeader");
  const saveDataLocalyBody = document.getElementById("saveDataLocalyBody");
  saveDataLocalyHeader.textContent =
    "Would you like to save your information to help with autocomplete?";
  saveDataLocalyBody.textContent = `
    Name: ${JSON.stringify(formData.name)} | Email: ${JSON.stringify(formData.email)} | Message: ${JSON.stringify(formData.message)} 
    `;
};
const sendDataBtn = document.getElementById("sendDataBtn");
/* avoid errors when opening other pages */
if (sendDataBtn) {
  sendDataBtn.addEventListener("click", handlerSendDataBtn);
}
/* Save form data in localStorage for autocomplete on contact page */
const handlerSaveLocalStorageUserDataBtn = () => {
  localStorage.setItem("formContactData", JSON.stringify(formData));
};
const saveLocalStorageUserDataBtn = document.getElementById(
  "saveLocalStorageUserDataBtn",
);
/* avoid errors when opening other pages */
if (saveLocalStorageUserDataBtn) {
  saveLocalStorageUserDataBtn.addEventListener(
    "click",
    handlerSaveLocalStorageUserDataBtn,
  );
}

/* /Logic for the contact form on the contact page */

/* laboratory-test-accepted-insurance */
/* insurances list mock */
const insurances = [
  {
    name: "elevar",
    src: "https://i.ibb.co/N2882S9x/elevar.png",
    alt: "elevar-insurance-logo",
  },
  {
    name: "ensalud",
    src: "https://i.ibb.co/LhgqD34s/ensalud.png",
    alt: "ensalud-insurance-logo",
  },
  {
    name: "galeno",
    src: "https://i.ibb.co/gbM3GjyQ/galeno.png",
    alt: "galeno-insurance-logo",
  },
  {
    name: "hospital-britanico",
    src: "https://i.ibb.co/8L2dcLsc/hospital-britanico.png",
    alt: "hospital-britanico-insurance",
  },
  {
    name: "ioma",
    src: "https://i.ibb.co/cXS6xrPm/ioma.png",
    alt: "ioma-insurance-logo",
  },
  {
    name: "luis-pasteur",
    src: "https://i.ibb.co/Rk7B9Rtq/luis-pasteur.png",
    alt: "luis-pasteur-insurance-logo",
  },
  {
    name: "medicus",
    src: "https://i.ibb.co/d4PTK4pm/medicus.png",
    alt: "medicus-insurance-logo",
  },
  {
    name: "medife",
    src: "https://i.ibb.co/xKSNGq0v/medife.png",
    alt: "medife-insurance-logo",
  },
  {
    name: "omint",
    src: "https://i.ibb.co/9XF93sv/omint.png",
    alt: "omint-insurance-logo",
  },
  {
    name: "osde",
    src: "https://i.ibb.co/qLwVpL32/osde.png",
    alt: "osde-insurance-logo",
  },
  {
    name: "osdepym",
    src: "https://i.ibb.co/5xt93v2J/osdepym.png",
    alt: "osdepym-insurance-logo",
  },
  {
    name: "osmata",
    src: "https://i.ibb.co/hJCbLQf1/osmata.png",
    alt: "osmata-insurance-logo",
  },
  {
    name: "osseg",
    src: "https://i.ibb.co/TD0d8zKX/osseg.png",
    alt: "osseg-insurance-logo",
  },
  {
    name: "pami",
    src: "https://i.ibb.co/qYqsTVJ4/pami.png",
    alt: "pami-insurance-logo",
  },
  {
    name: "sancor-salud",
    src: "https://i.ibb.co/wZ67Dj9W/sancor-salud.png",
    alt: "sancor-salud-insurance-logo",
  },
];
const insuranceContainer = document.getElementById("insuranceContainer");
/* update the list of insurances based on user input */
const showInsurancesByFilter = (insurancesByFilter) => {
  let elements = "";
  insurancesByFilter.forEach((insurance) => {
    elements += `<img
          src=${insurance.src}
          alt=${insurance.alt}
        />`;
  });
  /* update the DOM with filtered insurances */
  insuranceContainer.innerHTML = elements;
};
const handlerSearchBtn = (event) => {
  /* prevent page reload */
  event.preventDefault();
  const searchInput = document.getElementById("search");
  /* only filter if input has at least 3 letters */
  let insurancesByFilter =
    searchInput.value.length < 3
      ? []
      : insurances.filter((insurance) =>
          insurance.name
            .toUpperCase()
            .startsWith(searchInput.value.toUpperCase()),
        );
  showInsurancesByFilter(insurancesByFilter);
};
const searchBtn = document.getElementById("searchBtn");
/* avoid errors when opening other pages */
if (searchBtn) {
  searchBtn.addEventListener("click", handlerSearchBtn);
}
/* /laboratory-test-accepted-insurance */
