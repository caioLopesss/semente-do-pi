const express = require('express');
const servidor = express();
// Definir a public como pasta de arquivos estaticos
servidor.use(express.static("public"));
// Definir rota
servidor.get(
    '/produtos',
    (req, res) => {
    return res.sendFile(__dirname + '/views/produtos.html');
}
)
servidor.listen(3000);