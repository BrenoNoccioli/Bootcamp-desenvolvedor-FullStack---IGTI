import React, { useState } from 'react';

import { calculateSalaryFrom } from '../../helpers/salary';

import Input from '../../components/Input';
import Output from '../../components/Output';

const Main = () => {
  const [salary, setSalary] = useState(3900);
  const {
    discountINSS,
    baseIRPF,
    discountIRPF,
    netSalary,
  } = calculateSalaryFrom(salary);

  return (
    <main>
      <section>
        <Input
          text="Salário Bruto"
          value={salary}
          handleChange={(event) => setSalary(event.target.value)}
        />
        <Output text="Base INSS" format="R$" value={salary} />
        <Output
          text="Desconto INSS"
          value={discountINSS}
          percent={`(${((discountINSS * 100) / salary).toFixed(2)}%)`}
        />
        <Output text="Base IRPF" value={baseIRPF} />
        <Output
          text="Desconto IRPF"
          value={discountIRPF}
          percent={`(${((discountIRPF * 100) / salary).toFixed(2)}%)`}
        />
        <Output
          text="Salário Líquido INSS"
          value={netSalary}
          percent={`(${((netSalary * 100) / salary).toFixed(2)}%)`}
        />
      </section>
    </main>
  );
};

export default Main;
