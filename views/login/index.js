// import { createNotification } from "../components/notification.js";
const errorText = document.querySelector('#error-text');
const div = document.querySelector('#notification');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');
const eyePass = document.querySelector('#eye1');
const eyePassConfirm = document.querySelector('#eye2');
const preload = document.querySelector('#preload');


form.addEventListener('submit', async e => {
  e.preventDefault();
  preload.classList.add('flex');
  preload.classList.remove('hidden');
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
    if (error.response.data.error === 'Email o contraseña incorrectos') {
      errorText.innerHTML = 'Email o contraseña incorrectos' 
    }
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
});

eyePass.addEventListener('click', e => {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});