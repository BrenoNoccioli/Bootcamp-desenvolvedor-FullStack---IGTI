console.log(process.argv);
const numero = parseInt(process.argv[2]);
const multiplos = [];
for (var i = 3; i < numero; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiplos.push(i);
  }
}
console.log(multiplos);
