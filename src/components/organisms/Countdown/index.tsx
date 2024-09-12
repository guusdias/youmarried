import { useEffect, useState, useMemo } from "react";
import { CountdownContainer } from "./styles";

function calculateTimeLeft(weddingDate: Date) {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  return { days };
}

const Countdown = () => {
  const weddingDate = useMemo(() => new Date("2024-09-12"), []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000 * 60 * 60);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <CountdownContainer>
      <h3>Contagem Regressiva</h3>
      <p>Faltam {timeLeft.days} dias para o grande dia!</p>
    </CountdownContainer>
  );
};

export default Countdown;
