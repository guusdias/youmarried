import { ButtonContainer } from "./styles.ts";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{text}</ButtonContainer>;
};

export default Button;
