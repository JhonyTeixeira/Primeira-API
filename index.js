const express = require('express');

const server = express();
        // req = dados da minha aplicação
        // res = resposta para o front end
        // Querry params = ?nome=NodeJS
        // Route Params = /cursus/2
        // Request body = {nome: 'nodejs', tipo: 'Backend'}
        
        // localhost:3000/cursos
server.get('/curso/:id', (req, res) => {
    const id = req.params.id;

    return res.json({curso: `Curso: ${id}`});
})

server.listen(3000);