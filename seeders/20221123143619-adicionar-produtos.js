'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      { titulo: 'oculos', preco:'23', descricao:'oculos top', imagem:'https://assets.vtex.app/unsafe/1024x1024/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F308537%2FOculos-de-Sol-Life-Gatinho-em-Acetato-Vinho-m6200278_set.jpg%3Fv%3D1755451021'},
      { titulo: 'estojo', preco:'34', descricao:'estojo top', imagem:'https://cdn.awsli.com.br/500x500/765/765263/produto/128082532/f2d5b4df08.jpg'},
      { titulo: 'capinha', preco:'35', descricao:'capinha da seleção brasileira', imagem:'https://http2.mlstatic.com/D_NQ_NP_928609-MLB51774675263_092022-V.jpg'},
      { titulo: 'garrafinha', preco:'25', descricao:'garrafinha top', imagem:'https://http2.mlstatic.com/D_NQ_NP_705354-MLB43320964399_082020-O.jpg'},
      { titulo: 'mouse', preco:'239', descricao:'mouse gamer', imagem:'https://lojagoldentec.vteximg.com.br/arquivos/ids/161080-1000-1000/mouse-gamer-12000-dpi-space-com-led-e-7-botoes-gt-gamer-48211-01-min.jpg?v=637919593478900000'},
      { titulo: 'caderno', preco:'15', descricao:' caderno seleção brasileira', imagem:'https://io.convertiez.com.br/m/lojasmel/shop/products/images/2025614/medium/cadernouniversitarioespiralcapaduracbf10materias200folhasforoni_193105.jpg'},
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('produtos', null,{});
  }
};
