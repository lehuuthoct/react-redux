import express from 'express';
import apiController from './controllers/api';

// init Express app
const app = express();

// init json middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api', apiController);
// app.use('/users', usersRouter);

app.listen(9000);
