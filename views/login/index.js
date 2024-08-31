// import { createNotification } from "../components/notification.js";

const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');
const errorText = document.querySelector('#error-text');
const eyePass = document.querySelector('#eye1');
const eyePassConfirm = document.querySelector('#eye2');

form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    // Creo un objeto con informacion del usuario 
    const user = {
      email: emailInput.value,
      password: passwordInput.value
    }
    await axios.post('/api/login', user);
    window.location.pathname = `/facturas/`
  } catch (error) {
    console.log(error);
  }
});

eyePass.addEventListener('click', e => {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});