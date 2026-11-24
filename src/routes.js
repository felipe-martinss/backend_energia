const express = require('express');
const router = express.Router();

const usuarioController = require('./controllers/usuario');
router.post('/usuario/login', usuarioController.login)
router.get('/usuario', usuarioController.listar);
router.get('/usuario/:id', usuarioController.buscarPorId);
router.post('/usuario', usuarioController.criar);
router.put('/usuario/:id', usuarioController.atualizar);
router.delete('/usuario/:id', usuarioController.deletar);

const consumoController = require('./controllers/consumo');
router.get('/consumo', consumoController.listar);
router.get('/consumo/resumo', consumoController.resumo);
router.get('/consumo/:id', consumoController.buscarPorId);
router.post('/consumo', consumoController.criar);
router.put('/consumo/:id', consumoController.atualizar);
router.delete('/consumo/:id', consumoController.deletar);


module.exports = router;