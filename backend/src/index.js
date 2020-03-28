const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informaçãodo do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 * Tipos de parâmetros: 
 * 
 * Query params: Parâmetros nomeados enviados na rota após '?' (Filtros, Pagninação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisiição, utilizado para criar ou alterar recursos
 */



app.listen(3333);