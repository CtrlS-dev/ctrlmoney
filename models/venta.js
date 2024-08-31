const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: false,
  },
  ventas_sin_facturas: {
    type: mongoose.Types.Decimal128,
    required: false,
  },
  dolares_en_bs: {
    type: mongoose.Types.Decimal128,
    required: false,
  },
  pos: {
    type: mongoose.Types.Decimal128,
    required: false,
  },
  efectivo_bs: {
    type: mongoose.Types.Decimal128,
    required: false,
  },
  transferencias: {
    type: mongoose.Types.Decimal128,
    required: false,
  },
  efectivo_dolares: {
    type: mongoose.Types.Decimal128,
    required: false,
  },
  dolar_veneco: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

ventaSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    try {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;

      returnedObject.ventas_sin_facturas = parseFloat(returnedObject.ventas_sin_facturas.toString());
      returnedObject.dolares_en_bs = parseFloat(returnedObject.dolares_en_bs.toString());
      returnedObject.pos = parseFloat(returnedObject.pos.toString());
      returnedObject.efectivo_bs = parseFloat(returnedObject.efectivo_bs.toString());
      returnedObject.transferencias = parseFloat(returnedObject.transferencias);
      returnedObject.efectivo_dolares = parseFloat(returnedObject.efectivo_dolares.toString());
      returnedObject.dolar_veneco = parseFloat(returnedObject.dolar_veneco.toString());
    } catch (error) {
      console.error('Error during toJSON transformation:', error);
    }
  }
});


const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;