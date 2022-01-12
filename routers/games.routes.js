const express = require("express");
const router = express.Router();

let games = [{
    titulo: "Resident Evil 2",
    genero: "terror",
    lancamento: "2000"
},
{
    titulo: "Parasite Eve",
    genero: "Ação",
    lancamento: "1998"
}]

router.get("/", (req, res) => {
    res.status(200).json(games);
});

router.get("/:id", (req, res) => {
    const id = req.params.id -1;
    const game = games[id];

    res.status(200).json(game);
})

router.post("/", (req, res) => {
    const game = req.body;
    games.push(game);
    res.status(201).json("Game cadastrado com sucesso!")
})

router.put("/:id", (req, res) => {
    const id = req.params.id -1;
    const game = req.body;
    games[id] = game;
    res.status(201).json("Game alterado com sucesso!")
})

router.delete("/:id", (req, res) => {
    const id = req.params.id -1;
    const game = games[id]

    delete games[id];
    res.status(201).json("Game excluído com sucesso!")
})

module.exports = router;