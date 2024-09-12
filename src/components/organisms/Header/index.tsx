import Button from "../../atoms/Button";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Wedding Planner</h1>
      <div>
        <Button text="Criar Conta" onClick={() => {}} />
        <Button text="Login" onClick={() => {}} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
