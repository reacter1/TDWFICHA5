var express = require('express');
var router = express.Router();
const Prato = require('../models/pratos');



//read 
router.get('/', async (req, res) => { 
  const pratos = await Prato.find();
  console.log(pratos);
  if(pratos == null || pratos.length == 0){
    res.status(404).send("Pratos não encontrados");
  }
  else{
    res.json(pratos);
  }
}); 
//create 
router.post('/', async (req, res) => { 
  const prato = new Prato(req.body); 
  await prato.save(); 
  res.status(201).json(prato); 
}); 
//update 
router.put('/:id', async (req, res) => { 
  console.log("estou aqui");
  const prato = await Prato.findByIdAndUpdate(req.params.id, req.body, { 
new: true }); 

  res.json(prato); 
}); 
//delete 
router.delete('/:id', async (req, res) => { 
  const result = await Prato.findByIdAndDelete(req.params.id); 
  if(result == null){
    res.status(404).send("Prato não encontrado");
  }
  else{
    res.json({ mensagem: 'Prato apagado' });
  }
}); 
//disponibilização externa da rota 
module.exports = router; 


