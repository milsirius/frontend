const mongoose = require('mongoose');

const MarcaSchema = new mongoose.Schema({
    codi: {
      type: String,
      trim: true,
      required: true
    },
    nommarca: {
      type: String,
      trim: true,
      required: true
    },
    width: {
      type: String,
      trim: true,
      required: true
    },
    height: {
      type: String,
      trim: true,
      required: true
    },
    linkimg: {
      type: String,
      trim: true,
      required: true
    }
});



const Marca = mongoose.model('Marca', MarcaSchema);
module.exports = Marca;
