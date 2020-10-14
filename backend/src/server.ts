import express from 'express';
import path from 'path';

import 'express-async-errors';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
const port = '3333';

//! parametros !\\

//! Query Params: http://localhost:3333/users?'search=arthur'

//! Route Params: http://localhost:3333/users/':id' (Indetificar um recurso)

//! Body: http://localhost:3333/users (Indetificar um recurso)
//rota ou endpoint = cunjunto do metodo
//recurso or path = caminho url em formato string or rexep que reponde se solicidato

//metodos HTTP => GET, POST, PUT, DELETE prem existem muitos outros
// cada method recebe 2 parametros, PATH(CAMINHO URL) E FUNCTION(AÇAO PARA ESSE CAMINHO )
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listen in port ${port}`);
});
