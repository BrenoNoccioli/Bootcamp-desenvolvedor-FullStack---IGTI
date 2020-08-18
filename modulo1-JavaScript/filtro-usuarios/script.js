class Main {
  constructor() {
    this.form = document.querySelector('form');
    this.input = document.querySelector('input');
    this.result = document.getElementById('result');
    this.statistics = document.getElementById('statistics');
    this.results = [];
    this.event();
  }

  event() {
    this.form.onsubmit = (e) => this.getPeople(e);
  }

  async getPeople(e) {
    e.preventDefault();

    const response = await fetch(
      'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
    );
    const data = await response.json();

    data.results.filter((person) => {
      const {
        gender,
        name: { first, last },
        picture: { large },
        dob: { age },
      } = person;

      const sentence = this.input.value.toLowerCase();

      if (
        gender.toLowerCase() == sentence ||
        first.toLowerCase().includes(sentence) ||
        last.toLowerCase().includes(sentence) ||
        age == sentence
      )
        this.results.push({ gender, first, last, large, age });
    });

    this.result.innerHTML = '';
    this.renderResult();
    this.renderStatistics();
    this.results = [];
  }

  renderResult() {
    const countUsers = this.results.length;

    const ul = document.createElement('ul');
    const h3 = document.createElement('h3');

    h3.textContent = `${countUsers} usuário(s) encontrado(s)`;
    this.result.appendChild(h3);

    this.results.forEach((result) => {
      const { gender, first, last, large, age } = result;

      const li = document.createElement('li');
      const img = document.createElement('img');
      const span = document.createElement('span');

      img.setAttribute('src', large);
      span.textContent = `${first} ${last}, ${age} anos`;

      li.appendChild(img);
      li.appendChild(span);
      ul.appendChild(li);
      this.result.appendChild(ul);
    });
  }

  renderStatistics() {
    const [l1, l2, l3, l4] = this.statistics.querySelectorAll('li');

    const totalMale = this.results.filter((person) => person.gender == 'male');

    const totalFemale = this.results.filter(
      (person) => person.gender == 'female'
    );

    const sumAges = this.results.reduce(
      (sumAges, person) => (sumAges += person.age),
      0
    );

    const averageAges = sumAges / this.results.length;

    l1.textContent = 'Sexo masculino: ' + totalMale.length;
    l2.textContent = 'Sexo feminino: ' + totalFemale.length;

    l3.textContent = 'Soma das idades: ' + sumAges;
    l4.textContent = 'Média das idades: ' + averageAges.toFixed(2);

    this.statistics.querySelector('p').style.display = 'none';
    this.statistics.querySelector('ul').style.display = 'block';
  }
}

new Main();
