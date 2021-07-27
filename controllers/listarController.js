const { Livro, Sequelize } = require ('../models');

const op = Sequelize.Op;

const listarController = {

    listarTodos: async (request, response) => {
        
        const livros = await Livro.findAll();

        return  response.json(livros);
    },
    editarLivro: async (request, response) => {

        const { id } = request.params;
        const { estoque } = request.body;

        let livroEditado = await Livro.findByPk(id);

        console.log(livroEditado.Livro);

        livroEditado = await Livro.update({

            estoque
        },
        {
            where: {
                id
            }
        });

        return response.json(livroEditado);
    },
    criarLivro: async (request, response) => {

        let { titulo, quantidade_paginas, autor, ano_lancamento, estoque } = request.body;

        let livroCriado = await Livro.create({
            titulo,
            quantidade_paginas,
            ano_lancamento,
            autor,
            estoque
        });

        console.log(livroCriado);

        return response.send('Livro Cadastrado com sucesso');

    }
}

module.exports = listarController;