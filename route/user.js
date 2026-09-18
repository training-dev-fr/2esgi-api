const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json("Récupération liste utilisateur");
});

router.get('/:id', (req, res, next) => {
    res.status(200).json("Récupération un utilisateur, id:" + req.params.id);
});

router.get('/filter/:name/:limit', (req, res, next) => {
    res.status(200).json("Filtre des utilisateur, name:" + req.params.name + " limit:" + req.params.limit);
});

router.post('/', (req, res, next) => {
    res.status(201).json("Création utilisateur : " + req.body.firstname + " " + req.body.lastname);
});

router.put('/:id', (req, res, next) => {
    res.status(201).json("Modification utilisateur id: " + req.params.id + ", modification :" + req.body.firstname + " " + req.body.lastname);
});

router.delete('/:id', (req, res, next) => {
    res.status(204).json("Suppression utilisateur : " + req.params.id);
});

module.exports = router;