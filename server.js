const express = require('express');
const app = express();
const Router = require('./Routes/router');

app.use(express.json());

app.use('/',Router);

app.listen(5000, ()=> console.log('server is runing for assgn 2 at 5000 port'))