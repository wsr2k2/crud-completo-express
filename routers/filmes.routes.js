const express = require("express");
const router = express.Router();

let filmes = [{
    titulo: "Invocação do Mal",
    genero: "Terror",
    lancamento: "2013"
},
{
    titulo: "Um Sonho de Liberdade",
    genero: "Drama",
    lancamento: "1994"
}];

router.get('/', (req, res) => {
    res.status(200).json(filmes);
});

router.get("/:id", (req, res) => {
    const id = req.params.id -1;
    const filme = filmes[id];

    if(!filme) {
        res.status(404).send("Filmes não encontrado!");
        return;
    }
    res.status(200).json(filme);
})

router.post('/', (req, res) => {
    const filme = req.body;

    if(!filme.titulo){
        res.status(400).json({ message: "Título do filme obrigatório!"});
        return;
    }
    if(!filme.genero){
        res.status(400).json({ message: "Genero do filme obrigatório"});
        return;
    }
    if(!filme.lancamento){
        res.status(400).json({message: "Lançamento do filme obrigatório"});
        return;
    }
    filmes.push(filme);
    res.status(201).json({ message: `Filme: '${filme.titulo}', cadastrado com sucesso!`});
});

router.put("/:id", (req, res) => {
    const id = req.params.id -1;
    const filme = filmes[id];

    if(!filme) {
        res.status(404).send("Filme não encontrado");
        return;
    } else {
        const filme = req.body;
    if(!filme.titulo){
        res.status(404).json({ message: "Titulo do filme obrigatório"});
        return;
    }
    if(!filme.genero){
        res.status(404).json({ message: "Genero do filme obrigatório"});
        return;
    }
    if(!filme.lancamento){
        res.status(404).json({ message: "Ano do filme obrigatório"})
        return;
    }
    filmes[id] = filme;
}
res.status(200).json(`Filme: '${filme.titulo}', alterado com sucesso!`)
});

router.delete("/:id", (req, res) => {
    const id = req.params.id -1;
    const filme = filmes[id];

    if(!filme) {
        res.status(404).send("Filme não encontrado");
        return;
    } else {
        delete filmes[id];
    }
    res.status(200).json(`Filme: '${filme.titulo}', excluído com sucesso!`);
})


module.exports = router;