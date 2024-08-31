const mongoose = require('mongoose');

// Modelo de estructura de datos (Tablas)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  passwordHash:{ 
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  facturas: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Factura'
  }],
  ventas: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Venta'
  }],
  controls: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Control'
  }]
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;