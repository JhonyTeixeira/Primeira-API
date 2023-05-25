
        // req = dados da minha aplicação
        // res = resposta para o front end
        // Querry params = ?nome=NodeJS
        // Route Params = /cursus/2
        // Request body = {nome: 'nodejs', tipo: 'Backend'}

        // GET Busca uma informação
        // POST Enviar dados
        // DELETE Apaga uma informação
        // PUT Atualiza uma informação


const express = require('express');

const server = express();

server.use(express.json());


// crud = Create, Read, Update, Delete


const cursos = ['NodeJS', 'JavaScript', 'ReactNative'];

server.get('/cursos', (req, res)=> {
    return res.json(cursos);
})

        // localhost:3000/cursos
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
})
// Criando um novo curso
server.post('/cursos', (req, res)=> {
    const{name} = req.body;
    cursos.push(name);

    return res.json(cursos);
});


// Atualizando um curso
server.put('/cursos/:index', (req, res)=> {
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

// Excluindo algum curso
server.delete('/cursos/:index', (req, res)=> {
    const{index} = req.params;

    cursos.splice(index, 1);
    return res.json({ message: "Curso deletado com sucesso" });
})

server.listen(3000);


