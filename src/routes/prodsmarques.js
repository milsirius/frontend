const express = require('express');
const router = express.Router();

const Dada = require('../models/Dada')
const Marca = require('../models/Marca')

router.get('/marcas/:marca', async (req, res) =>{
  const rmarca = req.params.marca
  const marca = await Marca.find({'nommarca':rmarca})
  var dades = []
  if (marca.length < 1) {
    res.send("error")
  }
  else {
    const totes_dades = await Dada.find().sort({"preu":1});;
    comu = marca[0].codi;
    query = {"idprod":{'$regex': comu}}
    var noms = await Dada.find(query).distinct("nomprod");
    var dades = []
    for (var i = 0; i < noms.length; i++) {
      var no_trobat = true;
      for (var e = 0; e < totes_dades.length && no_trobat; e++) {
        if (totes_dades[e].nomprod == noms[i]) {
          dades.push(totes_dades[e])
          no_trobat = false;
        }
      }
    }
    res.render('prodsmarques',{
      dades, // el mateix que posar tasks: tasks
    });
  };
  /*
  else {
    comu = marca[0].codi
    console.log(comu)
    query = {"idprod":{'$regex': comu}}
    var noms = await Dada.find(query).distinct("nomprod");
    console.log(noms)
    for (var i=0; i < noms.length; ++i) {
      const dada = await Dada.find({"nomprod":noms[i]}).sort({"preu":1});
      dades.push(dada[0])
    };
    res.render('prodsmarques',{
      dades, // el mateix que posar tasks: tasks
    });
  };*/
});


module.exports = router;
