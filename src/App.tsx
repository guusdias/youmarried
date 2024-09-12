import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import TaskList from "./components/organisms/TaskList";
import { useContext } from "react";
import { UserProvider, UserContext } from "./contexts/UserContext";
import { GlobalStyles } from "./global/GlobalStyles";
import { theme } from "./global/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  const userContext = useContext(UserContext);
  const isAuthenticated = userContext?.user !== null;
  // const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LandingPage />} />

        <Route
          path="/tasks"
          element={isAuthenticated ? <TaskList /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

const Root = () => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <GlobalStyles />
      <App />
    </UserProvider>
  </ThemeProvider>
);

export default Root;
