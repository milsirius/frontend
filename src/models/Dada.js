const mongoose = require('mongoose');

const DadaSchema = new mongoose.Schema({
    preu: {
      type: Number,
      required: true
    },

    nomprod: {
      type: String,
      required: true,
      trim: true
    },
    botiga: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true,
        trim: true
    },
    width: {
        type: String,
        required: true,
        trim: true
    },
    height: {
        type: String,
        required: true,
        trim: true
    },
    linkimg: {
        type: String,
        required: true,
        trim: true
    },
    principal: {
        type: Boolean,
        required: true,
    },
    millora: {
      type: Number,
      required: true
    }
});

const Dada = mongoose.model('Dada', DadaSchema);
module.exports = Dada;
