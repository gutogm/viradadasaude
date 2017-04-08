let dbConfig = require('../config');
let knex = require('knex')({
  client: 'mysql',
  connection: dbConfig
});

let bookshelf = require('bookshelf')(knex);

module.exports ={
    dadosImportados : bookshelf.Model.extend({ tableName: 't01_dados_importados' }),
    classificacao : bookshelf.Model.extend({ tableName: 't02_classificacao' }),
    ouvidorias : bookshelf.Model.extend({ tableName: 't03_ouvidorias' }),
    meioAtendimento : bookshelf.Model.extend({ tableName: 't04_meio_atendimento' }),
    statusDemanda : bookshelf.Model.extend({ tableName: 't05_statusdemanda' }),
    assuntos : bookshelf.Model.extend({ tableName: 't06_assuntos' }),
    subAssunto1 : bookshelf.Model.extend({ tableName: 't07_subassunto1' }),
    subAssunto2 : bookshelf.Model.extend({ tableName: 't08_subassunto2' }),
    subAssunto3 : bookshelf.Model.extend({ tableName: 't09_subassunto3' }),
    farmacos : bookshelf.Model.extend({ tableName: 't10_farmacos' }),
    daps : bookshelf.Model.extend({ tableName: 't11_daps' }),
    prazo : bookshelf.Model.extend({ tableName: 't12_prazo' }),
    origemdoc : bookshelf.Model.extend({ tableName: 't13_origemdoc' }),
    hospitais : bookshelf.Model.extend({ tableName: 't14_hospitais' }),
    destinoAtual : bookshelf.Model.extend({ tableName: 't15_destinoatual' }),
    municipios : bookshelf.Model.extend({ tableName: 't16_municipios' }),
    ufs : bookshelf.Model.extend({ tableName: 't17_ufs' }),
    estabelecimentosComerciai : bookshelf.Model.extend({ tableName: 't18_estabelecimentoscomerciai' })
};
