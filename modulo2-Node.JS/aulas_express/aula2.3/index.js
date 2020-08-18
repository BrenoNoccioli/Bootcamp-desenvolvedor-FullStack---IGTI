import express from 'express';
import carrosRouter from './carrosRouter.js';

const app = express();
app.use(express.json());

// nivel do roteador
app.use('/carros', carrosRouter);

// nivel da aplicacao
app.use((req, res, next) => {
  console.log(new Date());
  next();
});

app.get('/teste', (req, res) => {
  res.end();
});

app.listen(3000, () => {
  console.log('API started');
});
