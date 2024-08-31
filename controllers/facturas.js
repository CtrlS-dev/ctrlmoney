const facturasRouter = require('express').Router();
const User = require('../models/user');
const Factura = require('../models/factura');


// facturasRouter.get('/', async (request, response) => {
//     const user = request.user;
//     const facturas = await Factura.find({ user: user.id });
//     return response.status(200).json(facturas);
// });

// Ruta en facturasRouter para obtener facturas filtradas por usuario y opcionalmente por fecha
facturasRouter.get('/', async (request, response) => {
  const user = request.user;

  const { fecha } = request.query;
  try {
    // Crear filtro básico por usuario
    const filter = { user: user.id };

    if (fecha) {
      // Si se proporciona una fecha, filtrar por esa fecha exacta (ignorando la hora)
      const startOfDay = new Date(fecha);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(fecha);
      endOfDay.setHours(23, 59, 59, 999);

      filter.fecha = { $gte: startOfDay, $lte: endOfDay };
    }

    const facturas = await Factura.find(filter);
    return response.status(200).json(facturas);
  } catch (error) {
    return response.status(500).json({ error: "Error al obtener las facturas" });
  }
});

facturasRouter.post('/', async (request, response) => {
    const user = request.user;
    const { fecha, descripcion, monto, numero_factura } = request.body;
    if (!fecha || !descripcion || !monto || !numero_factura) {
      return response.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const newFactura = new Factura({
      fecha,
      descripcion,
      monto,
      numero_factura,
      user: user._id
    });
    const savedFactura = await newFactura.save();
    user.facturas = user.facturas.concat(savedFactura._id);
    await user.save();

    return response.status(201).json(savedFactura);
});

facturasRouter.delete('/:id', async (request, response) => {
  try {
    const user = request.user;
    const facturaId = request.params.id;

    // Verificar si la factura existe antes de intentar eliminarla
    const factura = await Factura.findById(facturaId);
    if (!factura) {
      return response.status(404).json({ error: 'La factura no existe' });
    }


    // Eliminar la factura
    await Factura.findByIdAndDelete(facturaId);

    // Actualizar el array de facturas del usuario
    user.facturas = user.facturas.filter(factura => factura.toString() !== facturaId);
    await user.save();

    return response.status(201).json('Factura eliminada');
  } catch (error) {
    return response.status(500).json({ error: 'Error eliminando factura' });
  }
});

// salesRouter.patch('/:id', async (request, response) => {
//   try {
//     const user = request.user;
//     // const { checked } =  request.body;

//     const updatedSale = await Sale.findByIdAndUpdate(request.params.id, request.body, { new: true });
//     if (!updatedSale) {
//       return response.status(404).json({ error: 'Sale not found' });
//     }

//     return response.status(200).json(updatedSale);
//   } catch (error) {
//     return response.status(500).json({ error: 'Error updating sale' });
//   }
// });

module.exports = facturasRouter;