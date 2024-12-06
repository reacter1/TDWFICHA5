var express = require('express');
var router = express.Router();
const User = require('../models/user');



router.get('/', async (req, res) => { 
    console.log("users.js");
    const users = await User.find();  // Não preciso de usar o populate porque nao tenho nenhum dado nos users que é utilizado noutro controller
    res.json(users); 
  }); 
  //create 
  router.post('/', async (req, res) => { 
    console.log("create");
    const user =  new User(req.body); 
    console.log(user);
    await user.save(); 
    res.status(201).json(user); 
  }); 
  //update 
  router.put('/:id', async (req, res) => { 
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { 
  new: true }); 
    res.json(user); 
  }); 
  //delete 
  router.delete('/:id', async (req, res) => { 
    await User.findByIdAndDelete(req.params.id); 
    res.json({ mensagem: 'user apagado' }); 
  }); 
  //disponibilização externa da rota 
  module.exports = router; 
  
  