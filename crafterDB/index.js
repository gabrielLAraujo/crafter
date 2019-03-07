const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
const cors = require('cors');

//configurando o body parser para pegar POSTS mais tarde
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({
    message: 'Funcionando!'
}));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!');


function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'DESKTOP-L91TG5B',
        port: 3306,
        user: 'teste',
        password: 'teste',
        database: 'crafter'
    });

    connection.query(sqlQry, function (error, results, fields) {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}


router.get('/cervejas', (req, res) => {
    execSQLQuery('SELECT * FROM beers', res);
});
