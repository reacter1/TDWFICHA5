const express = require('express');
const app = express();
const PratosRoutes = require('./controllers/menu_do_dia');
const UsersRoutes = require('./controllers/users');
const logger = require('./middlewares/logger');
const connectToDb = require("./shared/db");
const { connect } = require('mongoose');
const auth = require('./middlewares/auth');
const PORT = 3000;
app.use(express.json());

connectToDb().then((mongoose) => {
    app.use(logger);
    app.use('/users', auth, UsersRoutes);
    app.use('/menu_do_dia',auth, PratosRoutes);
});


app.listen(PORT, () => console.log(`Servidor aberto na porta ${PORT}`));