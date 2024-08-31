const controlsRouter = require('express').Router();
const User = require('../models/user');
const Control = require('../models/control');

controlsRouter.get('/', async (request, response) => {
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

    const controls = await Control.find(filter);
    return response.status(200).json(controls);
  } catch (error) {
    return response.status(500).json({ error: "Error al obtener las facturas" });
  }
});

controlsRouter.post('/', async (request, response) => {
  const user = request.user;
    const { fecha, descripcion, cantidad, metodos_pago, valor_metodos } = request.body;
  // Creo notificacion de error en caso de que algun campo esté vacío o incorrecto
  if (!fecha || !descripcion || !cantidad || !metodos_pago || !valor_metodos) {
    return response.status(400).json({error: 'Todos los espacios son requeridos'});
  }
    const newControl = new Control({ 
      fecha,
      descripcion,
      cantidad,
      metodos_pago,
      valor_metodos,
      user: user._id
    });
    const savedControl = await newControl.save();
    user.controls = user.controls.concat(savedControl._id);
    await user.save();

    return response.status(201).json(savedControl);
});

controlsRouter.delete('/:id', async (request, response) => {
  try {
    const user = request.user;
    const controlId = request.params.id;

    // Verificar si el control de venta existe antes de intentar eliminarlo
    const control = await Control.findById(controlId);
    if (!control) {
      return response.status(404).json({ error: 'Esta venta no existe' });
    };


    // Eliminar la factura
    await Control.findByIdAndDelete(controlId);

    // Actualizar el array de facturas del usuario
    user.controls = user.controls.filter(control => control.toString() !== controlId);
    await user.save();

    return response.status(201).json('Venta eliminada');
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: 'Error eliminando venta' });
  }
});

module.exports = controlsRouter;