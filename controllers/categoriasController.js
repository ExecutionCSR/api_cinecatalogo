const express = require('express'),
    categorias = require('../models/categoriasModel'),
    router = express.Router();

router.get(('/categorias'), (req, res) => {
    categorias.findAll().then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.statusCode(500).send(err);
    });
});
router.post(('/categorias'), (req, res) => {
    let body = req.body;
    categorias.create(body).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.statusCode(500).send(err);
    });
});
router.put(('/categorias/:id'), (req, res) => {
    let { id } = req.params,
        body = req.body;

    categorias.update(body,
        {
            where: { id }
        }).then((result) => {
            let resultado = result[0];
            if(resultado){
                res.status(200).send({"message": "alterado com sucesso"});
            }else{
                res.status(502).send({"message": "falha ao alterar"});
            };
        }).catch((err) => {
            res.status(500).send(err);
        });
});
router.delete(('/categorias/:id'), (req, res) => {
    let { id } = req.params;
    categorias.destroy(
        {
            where: { id }
        }
    ).then((result) => {
        let resultado = result;
        if(resultado){
            res.status(200).send({"message": "deletado com sucesso"});
        }else{
            res.status(502).send({"message": "falha ao deletar"});
        };
    }).catch((err) => {
        res.statusCode(500).send(err);
    });
});


module.exports = router;