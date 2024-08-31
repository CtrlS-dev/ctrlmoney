const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
    fecha: { 
      type: Date,
      required: true 
    },
    descripcion: {
      type: String,
      required: false
    },
    monto: {
      type: mongoose.Types.Decimal128,
      required: true
    },
    numero_factura: {
      type: String,
      required: false
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });

facturaSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.monto = returnedObject.monto.toString();

    // coloco en mayusculas la descripcion
    if (returnedObject.descripcion) {
      returnedObject.descripcion = returnedObject.descripcion.toUpperCase();
    };    

    const date = new Date(returnedObject.fecha);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');

    returnedObject.diaMes = `${day}-${month}`;

    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

// filter element ((element) => if element object  mayor igual)

const Factura = mongoose.model('Factura', facturaSchema);
module.exports = Factura;