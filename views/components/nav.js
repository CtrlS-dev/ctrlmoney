const navbar = document.querySelector('#navbar');

const createNavHome = () => {
  navbar.innerHTML = `
  <!-- creamos el contenido centrado -->
      <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">      
        <!-- Logo -->
        <a href="/" class="font-bold text-white text-xl">CTRL Money</a>
    
    <!-- version mobil -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="transition ease-in-out w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-slate-800 rounded-2xl"
          >
          <path
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        
    
    <!-- version escritorio -->
          <div class="hidden md:flex flex-row gap-4">
          <!-- menu de links -->
          <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-slate-800 py-2 px-4 rounded-2xl">Login</a>
          <a href="/signup/" class="transition ease-in-out text-black font-bold bg-slate-50 hover:bg-slate-200 py-2 px-4 rounded-2xl">Registro</a>
          </div>
    
          <!-- menu mobil -->
          <div class="backdrop-blur-sm bg-teal-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
            <!-- menu de links -->
            <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-slate-800 py-2 px-4 rounded-2xl">Login</a>
            <a href="/signup/" class="transition ease-in-out text-black font-bold bg-slate-50 hover:bg-slate-200 py-2 px-4 rounded-2xl">Registro</a>
          </div>
      </div>
  
  `;
}
const createNavLogin = () => {
  navbar.innerHTML = `
  <!-- creamos el contenido centrado -->
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">      
    <!-- Logo -->
    <a href="/" class="font-bold text-white text-xl">CTRL Money</a>

<!-- version mobil -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="transition ease-in-out w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-slate-800 rounded-2xl"
      >
      <path
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
    

<!-- version escritorio -->
      <div class="hidden md:flex flex-row gap-4">
      <!-- menu de links -->
      <a href="/signup/" class="transition ease-in-out text-black font-bold bg-indigo-50 hover:bg-indigo-200 py-2 px-4 rounded-2xl">Registro</a>
      </div>

      <!-- menu mobil -->
      <div class="backdrop-blur-sm bg-slate-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden ">
        <!-- menu de links -->
        <a href="/signup/" class="transition ease-in-out text-black font-bold bg-indigo-50 hover:bg-indigo-200 py-2 px-4 rounded-2xl">Registro</a>
      </div>
  </div>
  
  `;
}
const createNavSignup = () => {
  navbar.innerHTML = `
  <!-- creamos el contenido centrado -->
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">      
    <!-- Logo -->
    <a href="/" class="font-bold text-white text-xl">CTRL Money</a>

<!-- version mobil -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="transition ease-in-out w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-slate-800 rounded-2xl"
      >
      <path
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
    

<!-- version escritorio -->
      <div class=" hidden md:flex flex-row gap-4">
      <!-- menu de links -->
      <a href="/login/" class="transition ease-in-out text-black font-bold bg-indigo-50 hover:bg-indigo-200 py-2 px-4 rounded-2xl">Login</a>
      </div>

      <!-- menu mobil -->
      <div class="backdrop-blur-sm bg-slate-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden ">
        <!-- menu de links -->
        <a href="/login/" class="transition ease-in-out text-black font-bold bg-indigo-50 hover:bg-indigo-200 py-2 px-4 rounded-2xl">Login</a>
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