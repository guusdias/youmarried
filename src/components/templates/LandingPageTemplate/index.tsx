import Header from "../../organisms/Header";
import LoginForm from "../../molecules/LoginForm";

const LandingPageTemplate = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Organize o seu casamento de forma fácil</h2>
        <LoginForm />
      </main>
    </>
  );
};

export default LandingPageTemplate;
