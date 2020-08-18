import { promises as fs } from 'fs';

init();
writeReadJson();

//utilizando promises com async await
async function init() {
  try {
    await fs.writeFile('teste.txt', 'bla bla bla');
    await fs.appendFile('teste.txt', '\nteste append file');
    const data = await fs.readFile('teste.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function writeReadJson() {
  try {
    //escrita com valores iniciais
    const arrayCarros = ['Gol', 'Palio', 'Uno'];
    const obj = {
      carros: arrayCarros,
    };
    await fs.writeFile('teste.json', JSON.stringify(obj)); //convertendo o objeto em string para o JSON

    //fez a leitura do conteudo atual
    const data = JSON.parse(await fs.readFile('teste.json')); //para a leitura coloca-se em uma variavel

    //modificamos o conteudo
    data.carros.push('Sandero'); //JSON.parse() para analisar como string JSON

    //sobrescrevemos o conteudo com o conteudo modificado
    await fs.writeFile('teste.json', JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
}

//usando promises
/*fs.writeFile('teste.txt', 'bla bla bla')
  .then(() => {
    fs.appendFile('teste.txt', '\nteste append file')
      .then(() => {
        fs.readFile('teste.txt', 'utf-8')
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });*/

//Utilizando callbacks
/*import fs from 'fs'; //importando módulo FS - nativo do node
fs.writeFile('teste.txt', 'bla bla bla', function (err) {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('teste.txt', ' teste append file', function (err) {
      if (err) {
        console.log(err);
      } else {
        fs.readFile('teste.txt', 'utf-8', (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});*/

//Utilizando de forma sincrona
/*try {
  console.log(1);
  fs.writeFileSync('teste.txt', 'bla bla bla');
  console.log(2);
  const data = fs.readFileSync('teste.txt', 'utf-8');
  console.log(data);
  console.log(3);
} catch (err) {
  console.log(err);
}*/
