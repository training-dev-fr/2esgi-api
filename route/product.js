const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json("Récupération produit");
});

router.post('/',(req,res,next) => {
    res.status(201).json("Création produit");
});

router.put('/',(req,res,next) => {
    res.status(201).json("Modification produit");
});

router.delete('/',(req,res,next) => {
    res.status(204).json("Suppression produit");
});

module.exports = router;