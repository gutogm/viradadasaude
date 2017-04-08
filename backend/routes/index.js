let express = require('express');
let router = express.Router();

let models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).send({ title: 'Express' });
});

router.get('/dados-importados', (req, res) => {
  new models.dadosImportados().fetchAll().then((dadosImportados) => {
    res.status(200).send(dadosImportados);
  }); 
});

router.get('/classificacao', (req, res) => {
  new models.classificacao().fetchAll().then((classificacao) => {
    res.status(200).send(classificacao);
  });
});

router.get('/ouvidorias', (req, res) => {
  new models.ouvidorias().fetchAll().then((ouvidorias) => {
    res.status(200).send(ouvidorias);
  });
});

router.get('/meio-atendimento', (req, res) => {
  new models.meioAtendimento().fetchAll().then((meioAtendimento) => {
    res.status(200).send(meioAtendimento);
  });
});

router.get('/status-demanda', (req, res) => {
  new models.statusDemanda().fetchAll().then((statusDemanda) => {
    res.status(200).send(statusDemanda);
  });
});

router.get('/assuntos', (req, res) => {
  new models.assuntos().fetchAll().then((assuntos) => {
    res.status(200).send(assuntos);
  });
});

router.get('/sub-assunto1', (req, res) => {
  new models.subAssunto1().fetchAll().then((subAssunto1) => {
    res.status(200).send(subAssunto1);
  });
});

router.get('/sub-assunto2', (req, res) => {
  new models.subAssunto2().fetchAll().then((subAssunto2) => {
    res.status(200).send(subAssunto2);
  });
});

router.get('/sub-assunto3', (req, res) => {
  new models.subAssunto3().fetchAll().then((subAssunto3) => {
    res.status(200).send(subAssunto3);
  });
});

router.get('/farmacos', (req, res) => {
  new models.farmacos().fetchAll().then((farmacos) => {
    res.status(200).send(farmacos);
  });
});

router.get('/daps', (req, res) => {
  new models.daps().fetchAll().then((daps) => {
    res.status(200).send(daps);
  });
});

router.get('/prazo', (req, res) => {
  new models.prazo().fetchAll().then((prazo) => {
    res.status(200).send(prazo);
  });
});

router.get('/origemdoc', (req, res) => {
  new models.origemdoc().fetchAll().then((origemdoc) => {
    res.status(200).send(origemdoc);
  });
});

router.get('/hospitais', (req, res) => {
  new models.hospitais().fetchAll().then((hospitais) => {
    res.status(200).send(hospitais);
  });
});

router.get('/destino-atual', (req, res) => {
  new models.destinoAtual().fetchAll().then((destinoAtual) => {
    res.status(200).send(destinoAtual);
  });
});

router.get('/municipios', (req, res) => {
  new models.municipios().fetchAll().then((municipios) => {
    res.status(200).send(municipios);
  });
});

router.get('/ufs', (req, res) => {
  new models.ufs().fetchAll().then((ufs) => {
    res.status(200).send(ufs);
  });
});

router.get('/estabelecimentos-comerciais', (req, res) => {
  new models.estabelecimentosComerciai().fetchAll().then((estabelecimentosComerciai) => {
    res.status(200).send(estabelecimentosComerciai);
  });
});
module.exports = router;