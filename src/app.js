const express = require('express')
const app = express()
const BodyParser = require("body-parser");
const PlaylistRoutes = require("./routes/PlaylistRoutes");

const port = 3000
app.use(BodyParser.json());

app.use("/api/playlist", PlaylistRoutes);

app.listen(port, () => {
  console.log(`Desafio Squadra app listening on port ${port}`)
})

module.exports = app;

