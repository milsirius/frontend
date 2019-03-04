const express = require('express');
const router = express.Router();

const Dada = require('../models/Dada')
const Marca = require('../models/Marca')

router.get('/marcas', async (req, res) =>{
  const marques = await Marca.find()
  var array = []
  for (var i = 0; i < marques.length; ++i) {
    comu = marques[i].codi
    query = {"idprod":{'$regex': comu}}
    var noms = await Dada.find(query).distinct("nomprod");
    noms = noms.sort()
    if (noms.length>4) array.push(noms.slice(0,6))
    else array.push(noms)
  };
  console.log(array)
  res.render('marques',{
    marques,
    array
  });
});

module.exports = router;
