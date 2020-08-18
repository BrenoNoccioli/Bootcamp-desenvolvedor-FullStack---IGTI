import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    let account = req.body; //pega os parâmetros enviados

    if (!account.name || account.balance == null) {
      throw new Error('Name e Balance são obrigatórios');
    }
    const data = JSON.parse(await readFile(global.fileName));

    account = {
      id: data.nextId++,
      name: account.name,
      balance: account.balance,
    }; //validando apenas os campos a serem inseridos
    data.accounts.push(account);

    await writeFile(global.fileName, JSON.stringify(data, null, 2)); //oragniza o arquivo json em linhas

    res.send(account);

    logger.info(`POST /account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    delete data.nextId; //deleta o campo nextId no retorno da requisição
    res.send(data);
    logger.info('GET /account');
  } catch (err) {
    next(err);
  }
});

//get por id
router.get('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    const account = data.accounts.find(
      (account) => account.id === parseInt(req.params.id) //faz a conversão da string para numero para que a comparacao seja correta / outra possibilidade seria utilizar == para que a igualdade não seja estrita.
    );
    res.send(account);
    logger.info('GET /account/:id');
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    data.accounts = data.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    ); // retorna um array com todos os ids diferentes do que queremos excluir
    await writeFile(global.fileName, JSON.stringify(data, null, 2));
    res.end();
    logger.info(`DELETE /account/:id - ${req.params.id}`);
  } catch (err) {
    next(err);
  }
});

router.put('/', async (req, res, next) => {
  try {
    const account = req.body;

    if (!account.id || !account.name || account.balance == null) {
      throw new Error('Id, Name e Balance são obrigatórios');
    }

    const data = JSON.parse(await readFile(global.fileName));
    const index = data.accounts.findIndex((a) => a.id === account.id);

    if (index === -1) {
      throw new Error('Registro não encontrado.');
    }

    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;

    await writeFile(global.fileName, JSON.stringify(data));
    res.send(account);
    logger.info(`PUT /account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.patch('/updateBalance', async (req, res, next) => {
  try {
    const account = req.body;

    const data = JSON.parse(await readFile(global.fileName));
    const index = data.accounts.findIndex((a) => a.id === account.id);

    if (!account.id || account.balance == null) {
      throw new Error('Id e Balance são obrigatórios');
    }

    if (index === -1) {
      throw new Error('Registro não encontrado.');
    }

    data.accounts[index].balance = account.balance;

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    res.send(data.accounts[index]);

    logger.info(`PATCH /account/updateBalance - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
