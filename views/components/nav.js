const navbar = document.querySelector('#navbar');

const createNavHome = () => {
  navbar.innerHTML = `
    <div class="justify-between fixed top-0 right-0 left-0 bg-white p-2 grid grid-cols-2 items-center w-full backdrop-blur-xl h-16 text-nowrap">  
  <!-- logo -->
  <div class="mx-2">
  <h1 class="text-2xl font-[800] my-2 cursor-default">Ctrl Money</h1>
  </div>
  <!-- btns -->
    <div id="show-logout-pc" class="hidden md:flex justify-end items-center gap-4">
     <!-- iniciar sesion btn -->
     <div class="w-40 h-12 bg-white text-black border-2 border-black rounded-2xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer">
     <a href="/login/" class="h-full text-center items-center justify-center flex gap-2 p-2">
     <p class="font-semibold">Iniciar sesion</p>
     </a>
     </div>
     <!-- Registrarse btn -->
     <div class="w-40 h-12 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-2xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer">
     <a href="/login/" class="h-full text-center items-center justify-center flex gap-2 p-2">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg> 
          <p class="font-semibold">Iniciar sesion</p>
        </a>
      </div>
    </div>
    <!-- version mobil -->
    <div class="flex justify-end">
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="transition ease-linear w-10 h-10 md:hidden text-black cursor-pointer p-2 hover:bg-slate-800 rounded-2xl"
      >
      <path
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
      </svg>
    </div>
  <!-- sections -->
  <div class="divide-y-2 divide-gray-600/60">
    <div class="grid grid-cols-4 gap-14">
    </div>
  </div>
  </div> 
  `;
}
const createNavLogin = () => {
  navbar.innerHTML = `
  <div class="justify-between fixed top-0 right-0 left-0 bg-white p-2 grid md:grid-cols-3 grid-cols-2 items-center w-full backdrop-blur-xl h-16 text-nowrap">  
  <!-- logo -->
  <div class="mx-2">
  <h1 class="text-2xl font-[800] my-2 cursor-default">Ctrl Money</h1>
  </div>
  <a href="/signup/" class="px-4 md:hidden flex justify-end">Registrarse</a>
  <!-- sections -->
  <div class="divide-y-2 divide-gray-600/60">
    <div class="grid grid-cols-4 gap-14">
    </div>
  </div>
    <!-- menu desplegable -->
    <div id="show-logout-pc" class="hidden md:flex justify-end items-center">
    <h2 class="px-4">¿Aún no tienes una cuenta? </h2>
      <div class="w-40 h-12 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-2xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer">
        <a href="/signup/" class="h-full text-center items-center justify-center flex gap-2 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
          </svg>   
          <p class="font-semibold">Registrate aquí</p>
        </a>
        </div>
        </div>
        </div>  
        `;
      }
      
const createNavSignup = () => {
  navbar.innerHTML = `
  <div class="justify-between fixed top-0 right-0 left-0 bg-white p-2 grid md:grid-cols-3 grid-cols-2 items-center w-full backdrop-blur-xl h-16 text-nowrap">  
  <!-- logo -->
  <div class="mx-2">
  <h1 class="text-2xl font-[800] my-2 cursor-default">Ctrl Money</h1>
  </div>
  <a href="/signup/" class="px-4 md:hidden flex justify-end">Iniciar sesion</a>
  <!-- sections -->
  <div class="divide-y-2 divide-gray-600/60">
    <div class="grid grid-cols-4 gap-14">
    </div>
  </div>
    <!-- menu desplegable -->
    <div id="show-logout-pc" class="hidden md:flex justify-end items-center">
    <h2 class="px-4">¿Ya tienes una cuenta? </h2>
      <div class="w-40 h-12 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-2xl hover:rounded-md transition-all duration-300 ease-linear cursor-pointer">
        <a href="/login/" class="h-full text-center items-center justify-center flex gap-2 p-2">
          <p class="font-semibold">Iniciar sesion</p>
        </a>
      </div>
    </div>
  </div>  
  `;
}



// condicional para acceder a la página
if (window.location.pathname === '/') {
  createNavHome();
} else if (window.location.pathname === '/signup/') {
  createNavSignup();
} else if (window.location.pathname === '/login/') {
  createNavLogin();
}

const navBtn = navbar.children[0].children[1];
const menuMobile = navbar.children[0].children[3];
const divPass = document.querySelector('#div-pass');
const divMatch = document.querySelector('#div-match-pass');
const eye = document.querySelector('#eye1');
const eye2 = document.querySelector('#eye2');
const formBtn = document.querySelector('#form-btn');

// menu mobil
navBtn.addEventListener('click', e => {
  if (!navBtn.classList.contains('active')) {
    navBtn.classList.add('active');
    navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />';
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('flex');
    divPass.classList.remove('relative');
    divMatch.classList.remove('relative');
    eye.classList.add('hidden');
    eye2.classList.add('hidden');
    formBtn.classList.remove('disabled:opacity-50');
  } else {
    navBtn.classList.remove('active');
    navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>';
    menuMobile.classList.add('hidden');
    menuMobile.classList.remove('flex');
    divPass.classList.add('relative');
    divMatch.classList.add('relative');
    eye.classList.remove('hidden');
    eye2.classList.remove('hidden');
    formBtn.classList.remove('disabled:opacity-50');
  }
});