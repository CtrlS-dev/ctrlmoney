import { createNotification } from '../components/notification.js';

// funcion para desplegar secciones
function clickOn(sectionOn, sectionOut, otherSectionOut) {
  sectionOn.classList.add('bg-[#f5f23b]', 'text-black', 'hover:bg-yellow-200');
  sectionOn.classList.remove('hover:bg-yellow-100');
  sectionOut.classList.remove('bg-[#f5f23b]', 'text-black', 'hover:bg-yellow-200');
  sectionOut.classList.add('hover:bg-yellow-100');
  otherSectionOut.classList.remove('bg-[#f5f23b]', 'text-black', 'hover:bg-yellow-200');
  otherSectionOut.classList.add('hover:bg-yellow-100');
}

const seccionVentas = document.querySelector('#seccion-ventas');
const seccionFacturas = document.querySelector('#seccion-facturas');
const seccionControl = document.querySelector('#seccion-control');
const tableVentas = document.querySelector('#table-ventas');
const tableFacturas = document.querySelector('#table-facturas');
const tableControl = document.querySelector('#table-control');
const divTotalesFacturas = document.querySelector('#div-totales-facturas');
const divTotalesVentas = document.querySelector('#div-totales-ventas');
const divFiltrarFacturas = document.querySelector('#div-filtrar-facturas');
const divFiltrarVentas = document.querySelector('#div-filtrar-ventas');
const divValorDolar = document.querySelector('#div-valor-dolar');
const inputsFacturas = document.querySelector('#inputs-facturas');
const inputsVentas = document.querySelector('#inputs-ventas');
const inputsControl = document.querySelector('#inputs-control');
const divAddVentas = document.querySelector('#div-add-ventas');
const divCierreBtn = document.querySelector('#div-cierre-btn');
const divCierre = document.querySelector('#div-cierre');
const menuDesplegable = document.querySelector('#menu-desplegable');
const seccionInicio = document.querySelector('#inicio');
const inicioPc = document.querySelector('#inicio-pc');
const seccionFacturasPc = document.querySelector('#seccion-facturas-pc');
const seccionControlPc = document.querySelector('#seccion-control-pc');
const seccionVentasPc = document.querySelector('#seccion-ventas-pc');
const preload = document.querySelector('#preload');

// desplegar secciones
// seccionInicio.addEventListener('click', e => {
  
// });
seccionFacturas.addEventListener('click', e =>  {
  // agregar clases
  clickOn(seccionFacturas, seccionVentas, seccionControl);
  // desplegar html
  inputsFacturas.classList.remove('hidden');
  inputsFacturas.classList.add('grid', 'md:grid-cols-5', 'grid-cols-1');
  tableFacturas.classList.remove('hidden');
  divFiltrarFacturas.classList.remove('hidden');
  divFiltrarFacturas.classList.add('flex');
  divTotalesFacturas.classList.remove('hidden');
  divTotalesFacturas.classList.add('flex', 'flex-col');
  // Verificar y agregar la clase 'hidden' si es necesario

  if (!tableVentas.classList.contains('hidden')) {
    tableVentas.classList.add('hidden');
    inputsVentas.classList.add('hidden');
    inputsVentas.classList.remove('grid', 'md:grid-cols-3', 'grid-cols-1');
    divAddVentas.classList.add('hidden');
    divFiltrarVentas.classList.add('hidden');
    divFiltrarVentas.classList.remove('flex');
    divTotalesVentas.classList.add('hidden');
    divTotalesVentas.classList.remove('flex', 'flex-col');
  }
  if (!tableControl.classList.contains('hidden')) {
    tableControl.classList.add('hidden');
    inputsControl.classList.add('hidden');
    inputsControl.classList.remove('grid');
    divCierreBtn.classList.add('hidden');
    divCierreBtn.classList.remove('flex');
    divCierre.classList.add('hidden');
    divCierre.classList.remove('flex');
  }
  if (divValorDolar.classList.contains('hidden')) {
    divValorDolar.classList.remove('hidden');
    divValorDolar.classList.add('flex', 'flex-col');
  }
});


seccionVentas.addEventListener('click', e => {
  clickOn(seccionVentas, seccionFacturas, seccionControl);
  tableVentas.classList.remove('hidden');
  inputsVentas.classList.remove('hidden');
  divAddVentas.classList.remove('hidden');
  inputsVentas.classList.add('grid', 'md:grid-cols-3', 'grid-cols-1');
  divFiltrarVentas.classList.remove('hidden');
  divFiltrarVentas.classList.add('flex');
  divTotalesVentas.classList.remove('hidden');
  divTotalesVentas.classList.add('flex', 'flex-col');

  // Verificar y agregar la clase 'hidden' si es necesario
  if (!tableFacturas.classList.contains('hidden')) {
    divTotalesFacturas.classList.add('hidden');
    divTotalesFacturas.classList.remove('flex', 'flex-col');
    tableFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.remove('flex');
    inputsFacturas.classList.add('hidden');
    inputsFacturas.classList.remove('grid', 'grid-cols-5');
  }

  if (!tableControl.classList.contains('hidden')) {
    tableControl.classList.add('hidden');
    inputsControl.classList.add('hidden');
    inputsControl.classList.remove('grid');
    divCierreBtn.classList.add('hidden');
    divCierreBtn.classList.remove('flex');
    divCierre.classList.add('hidden');
    divCierre.classList.remove('flex');
  }
  if (divValorDolar.classList.contains('hidden')) {
    divValorDolar.classList.remove('hidden');
    divValorDolar.classList.add('flex', 'flex-col');
  }
});


seccionControl.addEventListener('click', e => {
  clickOn(seccionControl, seccionFacturas, seccionVentas);
  tableControl.classList.remove('hidden');
  inputsControl.classList.remove('hidden');
  inputsControl.classList.add('grid');
  divCierreBtn.classList.add('flex');
  divCierreBtn.classList.remove('hidden');
  divCierre.classList.add('flex');
  divCierre.classList.remove('hidden');
  // Verificar y agregar la clase 'hidden' si es necesario
  if (!tableFacturas.classList.contains('hidden')) {
    divTotalesFacturas.classList.add('hidden');
    divTotalesFacturas.classList.remove('flex', 'flex-col');
    tableFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.remove('flex');
    inputsFacturas.classList.add('hidden');
    inputsFacturas.classList.remove('grid', 'grid-cols-5');
  }

  if (!tableVentas.classList.contains('hidden')) {
    tableVentas.classList.add('hidden');
    inputsVentas.classList.add('hidden');
    divAddVentas.classList.add('hidden');
    inputsVentas.classList.remove('grid', 'md:grid-cols-3', 'grid-cols-1');
    divFiltrarVentas.classList.add('hidden');
    divFiltrarVentas.classList.remove('flex');
    divTotalesVentas.classList.add('hidden');
    divTotalesVentas.classList.remove('flex', 'flex-col');
  }
  if (divValorDolar.classList.contains('hidden')) {
    divValorDolar.classList.remove('hidden');
    divValorDolar.classList.add('flex', 'flex-col');
  }
});


// inicioPc.addEventListener('click', e => {

// });

seccionFacturasPc.addEventListener('click', e =>  {
  // agregar clases
  clickOn(seccionFacturasPc, seccionVentasPc, seccionControlPc);
  // desplegar html
  inputsFacturas.classList.remove('hidden');
  inputsFacturas.classList.add('grid', 'md:grid-cols-5', 'grid-cols-1');
  tableFacturas.classList.remove('hidden');
  divFiltrarFacturas.classList.remove('hidden');
  divFiltrarFacturas.classList.add('flex');
  divTotalesFacturas.classList.remove('hidden');
  divTotalesFacturas.classList.add('flex', 'flex-col');
  // Verificar y agregar la clase 'hidden' si es necesario

  if (!tableVentas.classList.contains('hidden')) {
    tableVentas.classList.add('hidden');
    inputsVentas.classList.add('hidden');
    inputsVentas.classList.remove('grid', 'md:grid-cols-3', 'grid-cols-1');
    divAddVentas.classList.add('hidden');
    divFiltrarVentas.classList.add('hidden');
    divFiltrarVentas.classList.remove('flex');
    divTotalesVentas.classList.add('hidden');
    divTotalesVentas.classList.remove('flex', 'flex-col');
  }
  if (!tableControl.classList.contains('hidden')) {
    tableControl.classList.add('hidden');
    inputsControl.classList.add('hidden');
    inputsControl.classList.remove('grid');
    divCierreBtn.classList.add('hidden');
    divCierreBtn.classList.remove('flex');
    divCierre.classList.add('hidden');
    divCierre.classList.remove('flex');
  }
  if (divValorDolar.classList.contains('hidden')) {
    divValorDolar.classList.remove('hidden');
    divValorDolar.classList.add('flex', 'flex-col');
  }
});


seccionVentasPc.addEventListener('click', e => {
  clickOn(seccionVentasPc, seccionFacturasPc, seccionControlPc);
  tableVentas.classList.remove('hidden');
  inputsVentas.classList.remove('hidden');
  divAddVentas.classList.remove('hidden');
  inputsVentas.classList.add('grid', 'md:grid-cols-3', 'grid-cols-1');
  divFiltrarVentas.classList.remove('hidden');
  divFiltrarVentas.classList.add('flex');
  divTotalesVentas.classList.remove('hidden');
  divTotalesVentas.classList.add('flex', 'flex-col');

  // Verificar y agregar la clase 'hidden' si es necesario
  if (!tableFacturas.classList.contains('hidden')) {
    divTotalesFacturas.classList.add('hidden');
    divTotalesFacturas.classList.remove('flex', 'flex-col');
    tableFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.remove('flex');
    inputsFacturas.classList.add('hidden');
    inputsFacturas.classList.remove('grid', 'grid-cols-5');
  }

  if (!tableControl.classList.contains('hidden')) {
    tableControl.classList.add('hidden');
    inputsControl.classList.add('hidden');
    inputsControl.classList.remove('grid');
    divCierreBtn.classList.add('hidden');
    divCierreBtn.classList.remove('flex');
    divCierre.classList.add('hidden');
    divCierre.classList.remove('flex');
  }
  if (divValorDolar.classList.contains('hidden')) {
    divValorDolar.classList.remove('hidden');
    divValorDolar.classList.add('flex', 'flex-col');
  }
});


seccionControlPc.addEventListener('click', e => {
  clickOn(seccionControlPc, seccionFacturasPc, seccionVentasPc);
  tableControl.classList.remove('hidden');
  inputsControl.classList.remove('hidden');
  inputsControl.classList.add('grid');
  divCierreBtn.classList.add('flex');
  divCierreBtn.classList.remove('hidden');
  divCierre.classList.add('flex');
  divCierre.classList.remove('hidden');
  // Verificar y agregar la clase 'hidden' si es necesario
  if (!tableFacturas.classList.contains('hidden')) {
    divTotalesFacturas.classList.add('hidden');
    divTotalesFacturas.classList.remove('flex', 'flex-col');
    tableFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.add('hidden');
    divFiltrarFacturas.classList.remove('flex');
    inputsFacturas.classList.add('hidden');
    inputsFacturas.classList.remove('grid', 'grid-cols-5');
  }

  if (!tableVentas.classList.contains('hidden')) {
    tableVentas.classList.add('hidden');
    inputsVentas.classList.add('hidden');
    divAddVentas.classList.add('hidden');
    inputsVentas.classList.remove('grid', 'md:grid-cols-3', 'grid-cols-1');
    divFiltrarVentas.classList.add('hidden');
    divFiltrarVentas.classList.remove('flex');
    divTotalesVentas.classList.add('hidden');
    divTotalesVentas.classList.remove('flex', 'flex-col');
  }
  if (divValorDolar.classList.contains('hidden')) {
    divValorDolar.classList.remove('hidden');
    divValorDolar.classList.add('flex', 'flex-col');
  }
});

const showLogOut = document.querySelector('#show-logout')
const showLogOutPc = document.querySelector('#show-logout-pc');
menuDesplegable.addEventListener('click', e => {
  showLogOut.classList.toggle('hidden');
});

showLogOutPc.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
});

showLogOut.addEventListener('click', async e => {
  try {
    await axios.get('/api/logout');
    window.location.pathname = '/login';
  } catch (error) {
    console.log(error);
  }
});

// -------------------------------------------> FACTURAS <----------------------------------------

// total de montos y cantidad de facturas
let totalMontos = 0;
let cantidadFacturas = 0;

const cantidadFacturasHTML = document.querySelector('#cantidad-facturas');
const tableBodyFacturas = document.querySelector('#table-body-facturas');
const actualizarTotales = () => {
  const filas = tableBodyFacturas.querySelectorAll('tr');
  totalMontos = 0;
  cantidadFacturas = filas.length;

  filas.forEach(fila => {
    const monto = parseFloat(fila.querySelector('td:nth-child(3)').innerText.replace(' BsS', '').replace(/,/g, ''));
    totalMontos += monto;
  });
  cantidadFacturasHTML.innerHTML = `• Cantidad de facturas: ${cantidadFacturas} <br>• Monto total de facturas: ${totalMontos.toLocaleString('es-ES')}`;
};

const notification = document.querySelector('#notification');
// eliminar factura
tableBodyFacturas.addEventListener('click', async e => {
  if (e.target.closest('.accion-delete')) {
    const line = e.target.closest('.accion-delete').parentElement.parentElement.parentElement;

    //mostrar preload
    preload.classList.remove('hidden');
    preload.classList.add('flex');
    try {
      await axios.delete(`/api/facturas/${line.id}`);
      line.remove();

      createNotification(true, 'Factura eliminada');
      setTimeout(() => {
        notification.innerHTML = "";
      }, 5000);
      actualizarTotales();
    } catch (error) {
      createNotification(true, error.response.data.error);
      setTimeout(() => {
        notification.innerHTML = "";
      }, 5000);
    } finally {
      // ocultar preload
      preload.classList.remove('flex');
      preload.classList.add('hidden');
    }
  } 
});


// Función para convertir el número del mes a nombre
const getMonthName = (monthNumber) => {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  return months[monthNumber];
};



// filtrar por día
const filterDateInput = document.querySelector('#filter-date');
const btnFilterDay = document.querySelector('#btn-filter-day');
btnFilterDay.addEventListener('click', async () => {
  const selectedDate = filterDateInput.value;
  // control de error
  if (!selectedDate) {
    createNotification(true, "Por favor, selecciona una fecha.");
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
    return;
  }
  preload.classList.remove('hidden');
  preload.classList.add('flex');
  try {
    const { data } = await axios.get(`/api/facturas?fecha=${selectedDate}`);
    
    // Limpiar la tabla antes de mostrar los resultados filtrados (solo dejar los inputs)
    tableBodyFacturas.innerHTML = '';
    
    // Mostrar las facturas filtradas en la tabla
    data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    data.forEach(factura => {
      const fecha = new Date(factura.fecha);
      // Sumar un día
      fecha.setDate(fecha.getDate() + 1);
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = getMonthName(fecha.getMonth());
      const year = fecha.getFullYear();

      const newLine = document.createElement('tr');
      newLine.id = factura.id;
      newLine.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
      newLine.innerHTML = `
        <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
          <div>
            <p class="">${dia} de ${mes}</p>
            <p class="text-justify"><span class="font-semibold">${year}</span></p>
          </div>
        </td>
        <td class="p-3 text-sm text-gray-700">
          <div><p class="uppercase">${factura.descripcion}</p></div>
        </td>
        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <p>${factura.monto}<span> BsS</span></p>
        </td>
        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <p>${factura.numero_factura}</p>
        </td>
        <!-- Buttons -->
          <td>
            <div id="btns-acciones" class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
              <!-- Edit -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <!-- Delete -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
            </div>
          </td>
      `;
      tableBodyFacturas.appendChild(newLine);
    });
    actualizarTotales();
    createNotification(false, `Facturas filtradas por el día ${selectedDate}`);
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } catch (error) {
    createNotification(true, error.response.data.error);
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
});
// filtrar VENTA por día
const filterDateInputVenta = document.querySelector('#filter-date-venta');
const btnFilterDayVenta = document.querySelector('#btn-filter-day-venta');
btnFilterDayVenta.addEventListener('click', async () => {
  const selectedDate = filterDateInputVenta.value;
  // control de error
  if (!selectedDate) {
    createNotification(true, "Por favor, selecciona una fecha.");
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
    return;
  }
  preload.classList.remove('hidden');
  preload.classList.add('flex');
  try {
    const { data } = await axios.get(`/api/ventas?fecha=${selectedDate}`);
    
    // Limpiar la tabla antes de mostrar los resultados filtrados (solo dejar los inputs)
    tableBodyVentas.innerHTML = '';
    
    // Mostrar las facturas filtradas en la tabla
    data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    data.forEach(venta => {
      const fecha = new Date(venta.fecha);
      // Sumar un día
      fecha.setDate(fecha.getDate() + 1);
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = getMonthName(fecha.getMonth());
      const year = fecha.getFullYear();

      const newVenta = document.createElement('tr');
      newVenta.id = venta.id;
      newVenta.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
      newVenta.innerHTML = `
    <!-- Fecha -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
            <div>
                <p class="">${dia} de ${mes}</p>
                <p class="text-justify"><span class="font-semibold">${year}</span></p>
              </div>
          </td>
          <!-- pos -->
          <td class="p-3 text-sm text-gray-700">
            <div>
              <p>${venta.pos}</p>
            </div>
          </td>
          <!-- efectivo bs -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${venta.efectivo_bs}<span> BsS</span></p>
          </td>
          <!-- transferencias -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${venta.transferencias}</p>
          </td>
          <!-- efectivo dolar -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${venta.efectivo_dolares}</p>
          </td>
          <!-- dolar value-->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${venta.dolar_veneco}</p>
          </td>
          <!-- Ventas sin facturas -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${venta.ventas_sin_facturas}</p>
          </td>
          <!-- Dolares en boivares -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${venta.dolares_en_bs.toLocaleString('es-ES')}</p>
          </td>
          <!-- Buttons -->
          <td>
            <div class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
              <!-- Edit -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <!-- Delete -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24 class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
            </div>
          </td>
      `;
      tableBodyVentas.appendChild(newVenta);
    });
    actualizarTotales();
    createNotification(false, `Facturas filtradas por el día ${selectedDate}`);
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } catch (error) {
    console.log(error);
    
    createNotification(true, error.response.data.error);
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
});

// borrar filtro
const btnBorrarFiltro = document.querySelector('#btn-borrar-filtro');
btnBorrarFiltro.addEventListener('click', async e => { 
  filterDateInput.value = '';
    try {
      // Mostrar el preload mientras se cargan los datos originales
      preload.classList.remove('hidden');
      preload.classList.add('flex');
        // Obtener todas las facturas sin filtrar
        const { data } = await axios.get('/api/facturas');
    
        // Limpiar la tabla antes de mostrar los datos originales (solo dejar los inputs)
        tableBodyFacturas.innerHTML = '';
    
        data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        // Mostrar todas las facturas en la tabla
        data.forEach(factura => {
          // Formatear la fecha
          const fecha = new Date(factura.fecha);
          // Sumar un día
          fecha.setDate(fecha.getDate() + 1);
          const dia = fecha.getDate().toString().padStart(2, '0');
          const mes = getMonthName(fecha.getMonth());
          const year = fecha.getFullYear();
      
          const newLine = document.createElement('tr');
          newLine.id = factura.id;
          newLine.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
          newLine.innerHTML = `
          <!-- Fecha -->
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
                  <div>
                    <p class="">${dia} de ${mes}</p>
                     <p class="text-justify"><span class="font-semibold">${year}</span></p>
                   </div>
                </td>
                <!-- Descripción -->
                <td class="p-3 text-sm text-gray-700">
                  <div>
                    <p class="">${factura.descripcion.toUpperCase()}</p>
                  </div>
                </td>
                <!-- Monto -->
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <p>${factura.monto}<span> BsS</span></p>
                </td>
                <!-- Numero de factura -->
                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <p>${factura.numero_factura}</p>
                </td>
                <!-- Buttons -->
                <td>
                  <div id="btns-acciones" class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
                    <!-- Edit -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <!-- Delete -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
                  </div>
                </td>
          `;
          tableBodyFacturas.append(newLine);
          actualizarTotales();
        });
    } catch (error) {
      createNotification(true, 'Error al cargar todas las facturas');
      setTimeout(() => {
        notification.innerHTML = "";
      }, 5000);
    } finally {
      preload.classList.remove('flex');
      preload.classList.add('hidden');
    }    
});


const inputFecha = document.querySelector('#input-fecha');
const inputDescripcion = document.querySelector('#input-descripcion');
const inputMonto = document.querySelector('#input-monto');
const inputNumeroDeFactura = document.querySelector('#input-numero-de-factura');
const btnAddLine = document.querySelector('#btn-add');

// agregar factura
btnAddLine.addEventListener('click', async e => {
  //mostrar preload
  preload.classList.remove('hidden');
  preload.classList.add('flex');
  try {
    const { data } = await axios.post('/api/facturas', 
      { fecha: inputFecha.value, 
        descripcion: inputDescripcion.value, 
        monto: inputMonto.value, 
        numero_factura: inputNumeroDeFactura.value });
    
    // Formatear la fecha
    const fecha = new Date(data.fecha);
    // Sumar un día
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = getMonthName(fecha.getMonth())
    const year = fecha.getFullYear();

    const newLine = document.createElement('tr');
    newLine.id = data.id;
    newLine.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
    newLine.innerHTML = `
    <!-- Fecha -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
            <div>
                <p class="">${dia} de ${mes}</p>
                <p class="text-justify"><span class="font-semibold">${year}</span></p>
              </div>
          </td>
          <!-- Descripción -->
          <td class="p-3 text-sm text-gray-700">
            <div>
              <p class="uppercase">${data.descripcion}</p>
            </div>
          </td>
          <!-- Monto -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.monto}<span> BsS</span></p>
          </td>
          <!-- Numero de factura -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.numero_factura}</p>
          </td>
          <!-- Buttons -->
          <td>
            <div id="btns-acciones" class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
              <!-- Edit -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
            </div>
          </td>
    `;
    
    createNotification(false, 'Factura creada');
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
    tableBodyFacturas.append(newLine);
    actualizarTotales();
    inputFecha.value = '';
    inputDescripcion.value = '';
    inputMonto.value = '';
    inputNumeroDeFactura.value = '';
  } catch (error) {
    createNotification(true, 'Ha ocurrido un error al crear la factura');
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } finally {
    // ocultar preload
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
});


const menuError = document.querySelector('#menu-error');
const divReload = document.querySelector('#div-reload');
(async () => {
  //mostrar preload
  preload.classList.remove('hidden');
  preload.classList.add('flex');
  
  try {
    const { data } = await axios.get('/api/facturas', {
      withCredentials: true
    });
  
    // Función para convertir el número del mes a nombre
    const getMonthName = (monthNumber) => {
      const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      return months[monthNumber];
    };
    data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    data.forEach(factura => {      
      // Formatear la fecha
      const fecha = new Date(factura.fecha);
      // Sumar un día
      fecha.setDate(fecha.getDate() + 1);
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = getMonthName(fecha.getMonth());
      const year = fecha.getFullYear();
  
      
      const newLine = document.createElement('tr');
      newLine.id = factura.id;
      newLine.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
      newLine.innerHTML = `
      <!-- Fecha -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
              <div>
                <p class="">${dia} de ${mes}</p>
                <p class="text-justify"><span class="font-semibold">${year}</span></p>
              </div>
            </td>
            <!-- Descripción -->
            <td class="p-3 text-sm text-gray-700">
              <div>
                <p class="">${factura.descripcion.toUpperCase()}</p>
              </div>
            </td>
            <!-- Monto -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${factura.monto}<span> BsS</span></p>
            </td>
            <!-- Numero de factura -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${factura.numero_factura}</p>
            </td>
            <!-- Buttons -->
            <td>
              <div id="btns-acciones" class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
                <!-- Edit -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <!-- Delete -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
              </div>
            </td>
      `;
      tableBodyFacturas.append(newLine);
      actualizarTotales();
    });
  } catch (error) {
    console.log(error);
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
})();


// -------------------------------------------> VENTAS <----------------------------------------

let cantidadVentas = 0;

const tableBodyVentas = document.querySelector('#table-body-ventas');
const actualizarTotalesVentas = () => {
  const filas = tableBodyVentas.querySelectorAll('tr');
  cantidadVentas = filas.length;
  document.querySelector('#cantidad-ventas').innerText = `Cantidad de ventas: ${cantidadVentas}
  `;
};

// eliminar una venta
tableBodyVentas.addEventListener('click', async e => {
  if (e.target.closest('.accion-delete')) {
    const lineVenta = e.target.closest('.accion-delete').parentElement.parentElement.parentElement;    
    
    //mostrar preload
    preload.classList.remove('hidden');
    preload.classList.add('flex');
    try {
      await axios.delete(`/api/ventas/${lineVenta.id}`);
      lineVenta.remove();

      createNotification(true, 'Venta eliminada');
      setTimeout(() => {
        notification.innerHTML = "";
      }, 5000);
      actualizarTotales();
    } catch (error) {
      createNotification(true, error.response.data.error);
      setTimeout(() => {
        notification.innerHTML = "";
      }, 5000);
    } finally {
      // ocultar preload
      preload.classList.remove('flex');
      preload.classList.add('hidden');
    }
  } 
});

// agregar venta

const inputFechaVentas = document.querySelector('#input-fecha-ventas');
const inputPos = document.querySelector('#input-pos');
const inputEfectivoBs = document.querySelector('#input-efectivo-bs');
const inputTransferencias = document.querySelector('#input-transferencias');
const inputDolarEfectivo = document.querySelector('#input-dolar-efectivo');
const btnAddVentas = document.querySelector('#btn-add-ventas');


const getDollarPrices = async () => {
  try {
    const response = await fetch('https://venecodollar.vercel.app/api/v2/dollar/entity?name=BCV');
    const data = await response.json();
    const dolarVeneco = data.Data.info.dollar;
    return dolarVeneco;
  } catch (error) {
    console.log(error);
    menuError.classList.add('flex');
    menuError.classList.remove('hidden');
    menuError.addEventListener('click', e => {
      if (e.target.closest('#reload-acept')) {
      location.reload();
      }
      if (e.target.closest('#reload-cancel')) {
        menuError.classList.add('hidden');
        menuError.classList.remove('flex');
      }
    });
  }
};

// getDollarPrices().then(dolarVeneco => {
//   console.log('obtenido el dolar');
// });

// Agregar venta
btnAddVentas.addEventListener('click', async e => {
  //mostrar preload
  preload.classList.remove('hidden');
  preload.classList.add('flex');
  try {

    const efectivoDolares = parseFloat(inputDolarEfectivo.value) || 0;
    const ventasSinFacturas = parseFloat(inputPos.value) + parseFloat(inputEfectivoBs.value) + parseFloat(inputTransferencias.value) + efectivoDolares;
    const dolaresEnBs = efectivoDolares * dolarVeneco;

    const { data } = await axios.post('/api/ventas', {
      fecha: inputFechaVentas.value,
      pos: inputPos.value,
      efectivo_bs: inputEfectivoBs.value,
      transferencias: inputTransferencias.value,
      efectivo_dolares: inputDolarEfectivo.value,
      dolar_veneco: dolarVeneco,
      ventas_sin_facturas: ventasSinFacturas,
      dolares_en_bs: dolaresEnBs,
    });
    
    // Formatear la fecha
    const fecha = new Date(data.fecha);
    // Sumar un día
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = getMonthName(fecha.getMonth())
    const year = fecha.getFullYear();

    const newVenta = document.createElement('tr');
    newVenta.id = data.id;
    newVenta.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
    newVenta.innerHTML = `
    <!-- Fecha -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
            <div>
                <p class="">${dia} de ${mes}</p>
                <p class="text-justify"><span class="font-semibold">${year}</span></p>
              </div>
          </td>
          <!-- pos -->
          <td class="p-3 text-sm text-gray-700">
            <div>
              <p>${data.pos}</p>
            </div>
          </td>
          <!-- efectivo bs -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.efectivo_bs}<span> BsS</span></p>
          </td>
          <!-- transferencias -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.transferencias}</p>
          </td>
          <!-- efectivo dolar -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.efectivo_dolares}</p>
          </td>
          <!-- dolar value-->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.dolar_veneco}</p>
          </td>
          <!-- Ventas sin facturas -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.ventas_sin_facturas}</p>
          </td>
          <!-- Dolares en boivares -->
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <p>${data.dolares_en_bs.toLocaleString('es-ES')}</p>
          </td>
          <!-- Buttons -->
          <td>
            <div class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
              <!-- Edit -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
                  <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
          </td>
    `;
    
    createNotification(false, 'Venta creada');
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
    tableBodyVentas.append(newVenta);
    actualizarTotalesVentas();
    inputFechaVentas.value = '';
    inputPos.value = '';
    inputEfectivoBs.value = '';
    inputTransferencias.value = '';
    inputDolarEfectivo.value = '';

  } catch (error) {
    console.log(error);
    createNotification(true, 'Ha ocurrido un error al crear la venta');
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } finally {
   preload.classList.add('hidden');
   preload.classList.remove('flex');
  }
});




(async () => {
  //mostrar preload
  preload.classList.remove('hidden');
  preload.classList.add('flex');

  // consultar dollar
  const getDollarPrices = async () => {
    try {
      const response = await fetch('https://venecodollar.vercel.app/api/v2/dollar/entity?name=BCV');
      const data = await response.json();
      const dollarValue = data.Data.info.dollar;
      const dollarDate = data.Data.info.updatedDate;
      const dollarOptions = { dollarDate, dollarValue };
      return dollarOptions;
    } catch (error) {
      console.log(error);
      menuError.classList.remove('flex');
      menuError.classList.add('hidden');
      menuError.addEventListener('click', e => {
        if (e.target.closest('#reload-acept')) {
        location.reload();
        }
        if (e.target.closest('#reload-cancel')) {
          menuError.classList.add('hidden');
          menuError.classList.remove('flex');
        }
      });      
    }
  };
  
  getDollarPrices().then(dollarOptions => {
    divValorDolar.innerHTML = `
    <p id="dollar-value" class="text-center text-green-900">${dollarOptions.dollarValue}<span> BsS</span></p>
    <div class="text-center text-sm text-gray-500">Fecha: ${dollarOptions.dollarDate}</div>
    `;
  });
  
  try {
    const { data } = await axios.get('/api/ventas', {
      withCredentials: true
    });
  
    // Función para convertir el número del mes a nombre
    const getMonthName = (monthNumber) => {
      const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      return months[monthNumber];
    };
    data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    data.forEach(venta => {
      // Formatear la fecha
      const fecha = new Date(venta.fecha);
      // Sumar un día
      fecha.setDate(fecha.getDate() + 1);
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = getMonthName(fecha.getMonth());
      const year = fecha.getFullYear();
  
  
      const newVenta = document.createElement('tr');
      newVenta.id = venta.id;
      newVenta.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
      newVenta.innerHTML = `
      <!-- Fecha -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
              <div>
                  <p class="">${dia} de ${mes}</p>
                  <p class="text-justify"><span class="font-semibold">${year}</span></p>
                </div>
            </td>
            <!-- pos -->
            <td class="p-3 text-sm text-gray-700">
              <div>
                <p>${venta.pos}</p>
              </div>
            </td>
            <!-- efectivo bs -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${venta.efectivo_bs}<span> BsS</span></p>
            </td>
            <!-- transferencias -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${venta.transferencias}</p>
            </td>
            <!-- efectivo dolar -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${venta.efectivo_dolares}</p>
            </td>
            <!-- dolar value-->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${venta.dolar_veneco}</p>
            </td>
            <!-- Ventas sin facturas -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${venta.ventas_sin_facturas}</p>
            </td>
            <!-- Dolares en boivares -->
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <p>${venta.dolares_en_bs.toLocaleString('es-ES')}</p>
            </td>
            <!-- Buttons -->
            <td>
              <div class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
                <!-- Edit -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <!-- Delete -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
              </div>
            </td>
      `;
    tableBodyVentas.append(newVenta);
    actualizarTotalesVentas();
    inputFechaVentas.value = '';
    inputPos.value = '';
    inputEfectivoBs.value = '';
    inputTransferencias.value = '';
    inputDolarEfectivo.value = '';
    });
  } catch (error) {
    console.log(error);
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
})();


// -------------------------------------------> CONTROL <----------------------------------------

const btnAddControl = document.querySelector('#btn-add-control');
const tableBodyControl = document.querySelector('#table-body-control');
const fechaControl = document.querySelector('#fecha-control');
const descripcionControl = document.querySelector('#descripcion-control');
const cantidadControl = document.querySelector('#cantidad-control');

const metodoButtons = document.querySelector('#metodo-buttons');
const metodoShow = document.querySelector('#metodo-show');

// Función para alternar la visibilidad de los inputs
const toggleInput = (value, placeholder) => {
  const existingInput = document.getElementById(`metodo-${value}`);
  const existingButton = document.getElementById(`btn-${value}`);
  
  if (existingInput) {
    existingInput.remove();
    existingButton.classList.remove('bg-blue-500', 'text-white');
    existingButton.classList.add('bg-white', 'text-gray-700');
  } else {
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `metodo-${value}`;
    input.placeholder = placeholder;
    input.className = 'metodo-input rounded-2xl border w-[70%] ml-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-linear p-3 bg-white text-gray-700 shadow-md hover:bg-gray-200';
    metodoShow.appendChild(input);

    existingButton.classList.remove('bg-white', 'text-gray-700');
    existingButton.classList.add('bg-blue-500', 'text-white');
  }
};

// Crear botones para cada método de pago
const createPaymentButtons = () => {
  const paymentMethods = [
    { value: 'pdv', label: 'PDV' },
    { value: 'pm', label: 'PM' },
    { value: 'bs', label: 'Efectivo Bs' },
    { value: 'dolar', label: 'Efectivo $' }
  ];

  paymentMethods.forEach(method => {
    const button = document.createElement('button');
    button.id = `btn-${method.value}`;
    button.innerText = `Añadir ${method.label}`;
    button.className = 'rounded-2xl border w-[30%] ml-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-linear p-3 bg-white text-gray-700 shadow-md hover:bg-gray-200';
    
    button.addEventListener('click', () => {
      toggleInput(method.value, method.label);
    });

    metodoButtons.appendChild(button);
  });
};

// Función para obtener los nombres y valores de los métodos de pago
const getPaymentMethods = () => {
  const inputs = document.querySelectorAll('.metodo-input');
  const names = [];
  const values = [];

  inputs.forEach(input => {
    if (input.value) {
      names.push(input.placeholder);
      values.push(input.value);
    }
  });

  return { names, values };
};



// Evento para añadir una nueva fila a la tabla
btnAddControl.addEventListener('click', async e => {
    preload.classList.add('flex');
    preload.classList.remove('hidden');
  try {
    const { names, values } = getPaymentMethods();

    const { data } = await axios.post('/api/controls', {
      fecha: fechaControl.value,
      descripcion: descripcionControl.value,
      cantidad: cantidadControl.value,
      metodos_pago: names,
      valor_metodos: values,
    });

    const fecha = new Date(data.fecha);
    // Sumar un día
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const year = fecha.getFullYear().toString().padStart(4, '0');
    
    const newRow = document.createElement('tr');
    newRow.id = data.id;
    newRow.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
    // Crear la celda de métodos de pago
    let metodosPagoHTML = '';
    names.forEach((name, index) => {

      if (name === 'PDV') { 
        metodosPagoHTML += `
        <p class="inline-block bg-blue-300 text-blue-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
          <span class="">• ${name}</span>: <span class="font-medium">${values[index].toLocaleString('es-ES')} BsS</span>
        </p>
      `;
      } else if (name === 'PM'){
        metodosPagoHTML += `
        <p class="inline-block bg-yellow-300 text-yellow-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
          <span class="">• ${name}</span>: <span class="font-medium">${values[index].toLocaleString('es-ES')} BsS</span>
        </p>
      `;
      } else if (name === 'Efectivo Bs') {
        metodosPagoHTML += `
        <p class="inline-block bg-red-300 text-red-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
          <span class="">• ${name}</span>: <span class="font-medium">${values[index].toLocaleString('es-ES')} BsS</span>
        </p>
      `;
      } else if (name === 'Efectivo $') {
        metodosPagoHTML += `
        <p class="inline-block bg-green-300 text-green-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
          <span class="">• ${name}</span>: <span class="font-medium">${values[index].toLocaleString('es-ES')} $</span>
        </p>
      `;
      }
    });
    newRow.innerHTML = `
    <!-- Fecha -->
          <td class="p-3 text-base text-gray-700 whitespace-nowrap indent-9">
            <div>
                <p class="">${year}-${mes}-${dia}</p>
              </div>
          </td>
    <!-- Descripción -->
          <td class="p-3 text-base text-gray-700">
            <div>
              <p class="uppercase">${data.descripcion}</p>
            </div>
          </td>
    <!-- Cantidad -->
          <td class="p-3 text-base text-gray-700 whitespace-nowrap">
            <p>${data.cantidad}<span> Und</span></p>
          </td>
    <!-- Metodos de pago -->
          <td class="p-3 text-base text-gray-700 whitespace-nowrap flex flex-col gap-2">
            <p>${metodosPagoHTML}</p>
          </td>
          <!-- Buttons -->
          <td>
            <div id="btns-acciones" class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
              <!-- Edit -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
            </div>
          </td>
    `;
    
    tableBodyControl.append(newRow);
    
  } catch (error) {
    createNotification(true, error.response.data.error);
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
});

// Inicializar botones de métodos de pago
createPaymentButtons();
const dolarVeneco = await getDollarPrices();
(async () => {
  //mostrar preload
  preload.classList.remove('hidden');
  preload.classList.add('flex');
  
  try {
    const { data } = await axios.get('/api/controls', {
      withCredentials: true
    });
    const { names, values } = getPaymentMethods();    
    // Función para convertir el número del mes a nombre
    const getMonthName = (monthNumber) => {
      const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      return months[monthNumber];
    };
    data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    data.forEach(control => {
      // Formatear la fecha
      const fecha = new Date(control.fecha);
      // Sumar un día
      fecha.setDate(fecha.getDate() + 1);
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const year = fecha.getFullYear().toString().padStart(4, '0');
      
  
      const newRow = document.createElement('tr');
      newRow.id = control.id;
      newRow.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
      // Crear la celda de métodos de pago
      // Primero convierto la cadena en un array
      let metodosPago = control.metodos_pago ? control.metodos_pago.split(',') : [];
      let valoresMetodos = control.valor_metodos ? control.valor_metodos.split(',') : [];
      // Inicializar HTML y variables
      let metodosPagoHTML = '';
      let totalValores = 0;
      let totalValoresDolar = 0;


      // Asegurarse de que valoresMetodos contenga números válidos
      valoresMetodos = valoresMetodos.map(valor => parseFloat(valor.replace(',', '')) || 0);

      // Calcular el total de valores
      // totalValores = valoresMetodos.reduce((sum, valor) => sum + valor, 0);

      // totalValoresDolar = totalValores * dolarVeneco;


      // Crear el HTML para los métodos de pago
    if (metodosPago.length > 0 && valoresMetodos.length > 0) {
      metodosPago.forEach((name, index) => {
        
        if (name === 'PDV') { 
          metodosPagoHTML += `
          <p class="inline-block bg-blue-300 text-blue-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} BsS</span>
          </p>
        `;
        } else if (name === 'PM'){
          metodosPagoHTML += `
          <p class="inline-block bg-yellow-300 text-yellow-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} BsS</span>
          </p>
        `;
        } else if (name === 'Efectivo Bs') {
          metodosPagoHTML += `
          <p class="inline-block bg-red-300 text-red-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} BsS</span>
          </p>
        `;
        } else if (name === 'Efectivo $') {
          metodosPagoHTML += `
          <p class="inline-block bg-green-300 text-green-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} $</span>
          </p>
        `;
        }
      });

      // Añadir el total
      // metodosPagoHTML += `
      //   <p class="inline-block bg-green-500 text-white text-base px-3 w-fit py-1 rounded-full font-medium h-8">
      //     Total: <span class="font-medium">${totalValores.toLocaleString('es-ES')}</span>
      //   </p>
      // `;
      // metodosPagoHTML += `
      //   <p class="inline-block bg-green-500 text-white text-base px-3 w-fit py-1 rounded-full font-medium h-8">
      //     Total en $: <span class="font-medium">${totalValoresDolar.toLocaleString('es-ES')}</span>
      //   </p>
      // `;

      
      } else {
        metodosPagoHTML = '<p>No hay métodos de pago disponibles</p>';
      }
      newRow.innerHTML = `
      <!-- Fecha -->
            <td class="p-3 text-base text-gray-700 whitespace-nowrap indent-9">
              <div>
                  <p class="fechas">${year}-${mes}-${dia}</p>
                </div>
            </td>
      <!-- Descripción -->
            <td class="p-3 text-base text-gray-700">
              <div>
                <p class="uppercase">${control.descripcion}</p>
              </div>
            </td>
      <!-- Cantidad -->
            <td class="p-3 text-base text-gray-700 whitespace-nowrap">
              <p>${control.cantidad}<span> Und</span></p>
            </td>
      <!-- Metodos de pago -->
            <td class="p-3 text-base text-gray-700 whitespace-nowrap flex flex-col gap-2">
              <p>${metodosPagoHTML}</p>
            </td>
            <!-- Buttons -->
            <td>
              <div id="btns-acciones" class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
                <!-- Edit -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
                    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
            </td>
      `;    
    tableBodyControl.append(newRow);
    });
  } catch (error) {
    console.log(error);
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
})();

const btnCierre = document.querySelector('#btn-cierre');
const modalCierre = document.getElementById('modal-cierre');
const btnCancelar = document.getElementById('btn-cancelar');
const dollarSource = document.querySelector('#dollar-source');
const dollarShow = document.querySelector('#dolar-show');
const inputDolarVeneco = document.getElementById('dolar-veneco');
const btnHacerCierre = document.querySelector('#btn-hacer-cierre');

const dollarToShow = await getDollarPrices();
dollarShow.innerHTML = `${dollarToShow}`;

// Evento para cambiar entre BCV y Otro
let dolarVenecoValue = 0;
dollarSource.addEventListener('change', (e) => {
  if (e.target.value === 'BCV') {
    inputDolarVeneco.classList.add('hidden');
    inputDolarVeneco.value = '';
    dollarShow.classList.remove('hidden');
  } else {
    inputDolarVeneco.classList.remove('hidden');
    dollarShow.classList.add('hidden');
  }
});


btnCierre.addEventListener('click', () => {
  modalCierre.classList.remove('hidden');
  modalCierre.classList.add('flex');
  tableBodyControl.innerHTML = '';
  (async () => {
  //mostrar preload
  preload.classList.remove('hidden');
  preload.classList.add('flex');
  
  try {
    const { data } = await axios.get('/api/controls', {
      withCredentials: true
    });
    const { names, values } = getPaymentMethods();    
    // Función para convertir el número del mes a nombre
    const getMonthName = (monthNumber) => {
      const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      return months[monthNumber];
    };
    data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    data.forEach(control => {
      // Formatear la fecha
      const fecha = new Date(control.fecha);
      // Sumar un día
      fecha.setDate(fecha.getDate() + 1);
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const year = fecha.getFullYear().toString().padStart(4, '0');
      
  
      const newRow = document.createElement('tr');
      newRow.id = control.id;
      newRow.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
      // Crear la celda de métodos de pago
      // Primero convierto la cadena en un array
      let metodosPago = control.metodos_pago ? control.metodos_pago.split(',') : [];
      let valoresMetodos = control.valor_metodos ? control.valor_metodos.split(',') : [];
      // Inicializar HTML y variables
      let metodosPagoHTML = '';
      let totalValores = 0;
      let totalValoresDolar = 0;


      // Asegurarse de que valoresMetodos contenga números válidos
      valoresMetodos = valoresMetodos.map(valor => parseFloat(valor.replace(',', '')) || 0);

      // Calcular el total de valores
      // totalValores = valoresMetodos.reduce((sum, valor) => sum + valor, 0);

      // totalValoresDolar = totalValores * dolarVeneco;


      // Crear el HTML para los métodos de pago
    if (metodosPago.length > 0 && valoresMetodos.length > 0) {
      metodosPago.forEach((name, index) => {
        
        if (name === 'PDV') { 
          metodosPagoHTML += `
          <p class="inline-block bg-blue-300 text-blue-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} BsS</span>
          </p>
        `;
        } else if (name === 'PM'){
          metodosPagoHTML += `
          <p class="inline-block bg-yellow-300 text-yellow-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} BsS</span>
          </p>
        `;
        } else if (name === 'Efectivo Bs') {
          metodosPagoHTML += `
          <p class="inline-block bg-red-300 text-red-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} BsS</span>
          </p>
        `;
        } else if (name === 'Efectivo $') {
          metodosPagoHTML += `
          <p class="inline-block bg-green-300 text-green-900 text-base px-3 w-fit py-1 rounded-full font-medium h-8">
            <span class="">• ${name}</span>: <span class="font-medium">${valoresMetodos[index].toLocaleString('es-ES')} $</span>
          </p>
        `;
        }
      });

      // Añadir el total
      // metodosPagoHTML += `
      //   <p class="inline-block bg-green-500 text-white text-base px-3 w-fit py-1 rounded-full font-medium h-8">
      //     Total: <span class="font-medium">${totalValores.toLocaleString('es-ES')}</span>
      //   </p>
      // `;
      // metodosPagoHTML += `
      //   <p class="inline-block bg-green-500 text-white text-base px-3 w-fit py-1 rounded-full font-medium h-8">
      //     Total en $: <span class="font-medium">${totalValoresDolar.toLocaleString('es-ES')}</span>
      //   </p>
      // `;

      
      } else {
        metodosPagoHTML = '<p>No hay métodos de pago disponibles</p>';
      }
      newRow.innerHTML = `
      <!-- Fecha -->
            <td class="p-3 text-base text-gray-700 whitespace-nowrap indent-9">
              <div>
                  <p class="fechas">${year}-${mes}-${dia}</p>
                </div>
            </td>
      <!-- Descripción -->
            <td class="p-3 text-base text-gray-700">
              <div>
                <p class="uppercase">${control.descripcion}</p>
              </div>
            </td>
      <!-- Cantidad -->
            <td class="p-3 text-base text-gray-700 whitespace-nowrap">
              <p>${control.cantidad}<span> Und</span></p>
            </td>
      <!-- Metodos de pago -->
            <td class="p-3 text-base text-gray-700 whitespace-nowrap flex flex-col gap-2">
              <p>${metodosPagoHTML}</p>
            </td>
            <!-- Buttons -->
            <td>
              <div id="btns-acciones" class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
                <!-- Edit -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
                    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
              </div>
            </td>
      `;    
    tableBodyControl.append(newRow);
    });
  } catch (error) {
    console.log(error);
  } finally {
    preload.classList.remove('flex');
    preload.classList.add('hidden');
  }
})();
});

btnCancelar.addEventListener('click', async e => {
  modalCierre.classList.add('hidden');
  modalCierre.classList.remove('flex');
});

function sumarValoresPorNombre(nombre, elementos) {
  let total = 0;

  elementos.forEach(row => {
    const metodosPagoTd = row.querySelector('td:nth-child(4)');
    const metodoPagoParrafos = metodosPagoTd.querySelectorAll('p');
    if (metodosPagoTd) {
      metodoPagoParrafos.forEach(p => {
        const texto = p.innerText.trim();

        if (texto.includes(nombre)) {
          let [_, valor] = texto.split(':');

          // Limpiar el valor para quitar BsS y espacios extra
          valor = valor.trim().replace('BsS', '').replace(/\./g, '').replace(',', '.');

          // Validar si el valor es numérico
          const valorNumerico = parseFloat(valor);
          if (!isNaN(valorNumerico)) {
            // Limitar el rango de valores a un máximo razonable (ej. 1e9)
            if (valorNumerico < 1e9) {
              total += valorNumerico;
            } else {
              console.warn(`Valor excesivamente grande encontrado y excluido: ${valorNumerico}`);
            }
          } else {
            console.warn(`Valor no válido encontrado: ${valor}`);
          }
        }
      });
    }
  });

  return total;
}


// crear un cierre
btnHacerCierre.addEventListener('click', async e => {
  const fechaCierre = document.querySelector('#fecha-cierre').value;  

  // Obtener el valor de dolarVeneco
  const fechas = document.querySelectorAll('.fechas');
  const filasIguales = [];
  fechas.forEach(p => {
  const elementos = p.parentElement.parentElement.parentElement;
  if (fechaCierre === elementos.children[0].children[0].children[0].innerHTML) {
    filasIguales.push(elementos);
  }
  });
  
  let dolarVeneco = dollarSource.value === 'BCV' ? dolarVenecoValue : parseFloat(inputDolarVeneco.value) || 0;
  if (!dolarVeneco) {
    dolarVeneco = await getDollarPrices();
  }
    
  // Obtener los valores de la tabla de cierre
  const totalPDV = sumarValoresPorNombre('PDV', filasIguales);
  const totalPM = sumarValoresPorNombre('PM', filasIguales);
  const totalEDolar = sumarValoresPorNombre('Efectivo $', filasIguales);
  const totalEBs = sumarValoresPorNombre('Efectivo Bs', filasIguales);

  // Calcular ventas sin facturas y dolares en Bs
  const dolaresEnBs = totalEDolar * dolarVeneco;
  const ventasSinFacturas = totalPDV + totalEBs + totalPM + dolaresEnBs;

  // Mostrar preload
  modalCierre.classList.remove('flex');
  modalCierre.classList.add('hidden');
  preload.classList.remove('hidden');
  preload.classList.add('flex');

  try {
    const { data } = await axios.post('/api/ventas', {
      fecha: fechaCierre,
      pos: totalPDV,
      efectivo_bs: totalEBs,
      transferencias: totalPM,
      efectivo_dolares: totalEDolar,
      dolar_veneco: dolarVeneco,
      ventas_sin_facturas: ventasSinFacturas,
      dolares_en_bs: dolaresEnBs,
    });

    
    // Formatear la fecha
    const fecha = new Date(data.fecha);
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = getMonthName(fecha.getMonth());
    const year = fecha.getFullYear();


    const newVenta = document.createElement('tr');
    newVenta.id = data.id;
    newVenta.classList.add('bg-white', 'cursor-pointer', 'hover:bg-slate-200', 'transition-all', 'duration-300', 'ease-linear');
    newVenta.innerHTML = `
      <!-- Fecha -->
      <td class="p-3 text-sm text-gray-700 whitespace-nowrap indent-9">
        <div>
          <p>${dia} de ${mes}</p>
          <p class="text-justify"><span class="font-semibold">${year}</span></p>
        </div>
      </td>
      <!-- POS -->
      <td class="p-3 text-sm text-gray-700">
        <div><p>${data.pos}</p></div>
      </td>
      <!-- Efectivo Bs -->
      <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><p>${data.efectivo_bs}<span> BsS</span></p></td>
      <!-- Transferencias -->
      <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><p>${data.transferencias}</p></td>
      <!-- Efectivo Dólar -->
      <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><p>${data.efectivo_dolares}</p></td>
      <!-- Dólar Veneco -->
      <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><p>${data.dolar_veneco}</p></td>
      <!-- Ventas sin facturas -->
      <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><p>${data.ventas_sin_facturas}</p></td>
      <!-- Dólares en Bs -->
      <td class="p-3 text-sm text-gray-700 whitespace-nowrap"><p>${data.dolares_en_bs.toLocaleString('es-ES')}</p></td>
      <!-- Buttons -->
      <td>
        <div class="p-3 text-sm text-gray-700 whitespace-nowrap flex gap-2 items-center justify-center mr-4">
          <!-- Edit -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="accion-edit size-8 text-green-500 hover:text-green-900 transition-all duration-300 ease-linear">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="accion-delete size-8 text-red-500 hover:text-red-800 transition-all duration-300 ease-linear" width="24" height="24" color="#000000" fill="none">
            <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>
      </td>
    `;
    tableBodyVentas.append(newVenta);
    actualizarTotalesVentas();
    createNotification(false, 'Cierre de venta creado');
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);

  } catch (error) {
    createNotification(true, error.response.data.error);
    setTimeout(() => {
      notification.innerHTML = "";
    }, 5000);
  } finally {
    preload.classList.add('hidden');
    preload.classList.remove('flex');
  }
});

// eliminar
tableBodyControl.addEventListener('click', async e => {
  if (e.target.closest('.accion-delete')) {
    const line = e.target.closest('.accion-delete').parentElement.parentElement.parentElement;

    //mostrar preload
    preload.classList.remove('hidden');
    preload.classList.add('flex');
    try {
      await axios.delete(`/api/controls/${line.id}`);
      line.remove();

      createNotification(false, 'Venta eliminada');
      setTimeout(() => {
        notification.innerHTML = "";
      }, 5000);
    } catch (error) {
      createNotification(true, error.response.data.error);
      setTimeout(() => {
        notification.innerHTML = "";
      }, 5000);
    } finally {
      // ocultar preload
      preload.classList.remove('flex');
      preload.classList.add('hidden');
    }
  } 
});