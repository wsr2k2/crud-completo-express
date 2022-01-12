const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.get('/', (req, res) => {
    res.status(200).json({ message: "Bem vindo a nossa API"});
})

const filmesRouter = require('./routers/filmes.routes');
app.use('/filmes', filmesRouter);

const gamesRouter = require('./routers/games.routes');
app.use('/games', gamesRouter);

app.listen(3000)
console.log('http://localhost:3000');