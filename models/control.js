const mongoose = require('mongoose');

const controlSchema = new mongoose.Schema({
  fecha: {
    type: Date, 
    required: true 
  },
  descripcion: { 
    type: String,
    required: true 
  },
  cantidad: { 
    type: Number,
    required: true 
  },
  metodos_pago: { 
    type: [String],
    required: true 
  },
  valor_metodos: { 
    type: [String],
    required: true 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});


controlSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    returnedObject.descripcion = returnedObject.descripcion.toString();
    returnedObject.cantidad = returnedObject.cantidad.toString();
    returnedObject.metodos_pago = returnedObject.metodos_pago.toString();
    returnedObject.valor_metodos = returnedObject.valor_metodos.toString();

    const date = new Date(returnedObject.fecha);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');

    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Control = mongoose.model('Control', controlSchema);
module.exports = Control;