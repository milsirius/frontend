const express = require('express');
const router = express.Router();

const Dada = require('../models/Dada')
const Marca = require('../models/Marca')


router.get('/', async (req, res) =>{
  query = { "principal":true }
  const dades = await Dada.find(query).sort({"millora":-1});
  res.render('index',{
    dades, // el mateix que posar tasks: tasks
  });

});

router.get('/idprod/:idprod', async (req, res) =>{
  const id = req.params.idprod
  query = { "nomprod":id}
  const dades = await Dada.find(query).sort({"preu":1});
  console.log(dades)
  res.render('prods',{
    dades
  });
});

module.exports = router;
