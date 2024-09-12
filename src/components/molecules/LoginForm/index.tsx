import { useContext, useRef } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { FormContainer, InputField } from "./styles";
import Button from "../../atoms/Button";

const LoginForm = () => {
  const userContext = useContext(UserContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  if (!userContext) {
    return <div>Erro: Contexto do usuário não disponível</div>;
  }

  const { loginWithGoogle, loginWithEmail } = userContext;

  const handleLoginWithEmail = () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (loginWithEmail) {
      loginWithEmail(email, password);
    }
  };

  return (
    <FormContainer>
      <InputField type="email" placeholder="Email" ref={emailRef} />
      <InputField type="password" placeholder="Senha" ref={passwordRef} />
      <Button text="Login" onClick={handleLoginWithEmail} />
      <Button text="Login com Google" onClick={loginWithGoogle || (() => {})} />
    </FormContainer>
  );
};

export default LoginForm;
