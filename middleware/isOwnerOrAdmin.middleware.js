const Product = require('./../model/product.model.js');

exports.isOwnerOrAdmin = async (req,res,next) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!product){
        res.status(404).json({error: "Produit non trouvé"});
    }
    if(product.UserId === req.payload.id || req.payload.role.some(r => r.code === 'ADM')){
        next();
    }else{
        res.status(403).json({error: "Vous n'avez pas les droits pour gérer ce produits"})
    }
}