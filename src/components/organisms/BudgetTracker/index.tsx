import { BudgetContainer } from "./styles";

const BudgetTracker = ({ expenses }: { expenses: number }) => {
  const budget = 5000;

  return (
    <BudgetContainer>
      <h3>Controle de Orçamento</h3>
      <p>Orçamento Total: R$ {budget}</p>
      <p>Gastos: R$ {expenses}</p>
      <p>Saldo Restante: R$ {budget - expenses}</p>
    </BudgetContainer>
  );
};

export default BudgetTracker;
