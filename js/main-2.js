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
autoCompleteForm();

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
contactFormBtn.addEventListener("click", handlerContactFormBtn);

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
sendDataBtn.addEventListener("click", handlerSendDataBtn);

/* Save form data in localStorage for autocomplete on contact page */
const handlerSaveLocalStorageUserDataBtn = () => {
  localStorage.setItem("formContactData", JSON.stringify(formData));
};
const saveLocalStorageUserDataBtn = document.getElementById(
  "saveLocalStorageUserDataBtn",
);
saveLocalStorageUserDataBtn.addEventListener(
  "click",
  handlerSaveLocalStorageUserDataBtn,
);

/* /Logic for the contact form on the contact page */
