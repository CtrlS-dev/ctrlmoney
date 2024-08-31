const ventasRouter = require('express').Router();
const User = require('../models/user');
const Venta = require('../models/venta');

ventasRouter.get('/', async (request, response) => {
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
    const ventas = await Venta.find(filter);
      return response.status(200).json(ventas);
  } catch (error) {
    return response.status(500).json({ error: "Error al obtener las ventas" });
  }
});

ventasRouter.post('/', async (request, response) => {
  const user = request.user;
  
    const { fecha, ventas_sin_facturas, dolares_en_bs, pos, efectivo_bs, transferencias, efectivo_dolares, dolar_veneco } = request.body;
    // if (!fecha || !ventas_sin_facturas || !dolares_en_bs || !pos || !efectivo_bs || !transferencias || !efectivo_dolares || !dolar_veneco) {
    //   return response.status(400).json({ error: 'TODOS LOS CAMPOS SON OBLIGATORIOS' });
    // }

    const newVenta = new Venta({
      fecha,
      ventas_sin_facturas,
      dolares_en_bs,
      pos,
      efectivo_bs,
      transferencias,
      efectivo_dolares,
      dolar_veneco,
      user: user._id
    });
    if (!newVenta) {
      console.log('error al crear venta');
    }
    const savedVenta = await newVenta.save();
    user.ventas = user.ventas.concat(savedVenta._id);
    await user.save();

    return response.status(201).json(savedVenta);
});

ventasRouter.delete('/:id', async (request, response) => {
  try {
    const user = request.user;
    const ventaId = request.params.id;

    // Verificar si la venta existe antes de intentar eliminarla
    const venta = await Venta.findById(ventaId);
    if (!venta) {
      return response.status(404).json({ error: 'La venta no existe' });
    }


    // Eliminar la venta
    await Venta.findByIdAndDelete(ventaId);

    // Actualizar el array de ventas del usuario
    user.ventas = user.ventas.filter(venta => venta.toString() !== ventaId);
    await user.save();

    return response.status(201).json('VENTA ELIMINADA');
  } catch (error) {
    return response.status(500).json({ error: 'ERROR ELIMINANDO VENTA' });
  }
});

module.exports = ventasRouter;