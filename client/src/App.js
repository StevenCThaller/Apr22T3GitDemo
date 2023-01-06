import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreateCharacter from "./components/CreateCharacter";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path=":characterType" element={<Dashboard />}>
          <Route path="" element={<CharacterList />} />
          <Route path="create" element={<CreateCharacter />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
