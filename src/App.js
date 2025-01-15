import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiplomaPage from './pages/DiplomaPage';
import ModulePage from './pages/ModulePage';
import RegistrationPage from './pages/RegistrationPage';
import ModuleDetail from './components/ModuleDetail';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diplomas" element={<DiplomaPage />} />
        <Route path="/diplomas/:diplomaId" element={<ModulePage />} />
        <Route path="/diplomas/:diplomaId/:moduleId" element={<ModuleDetail />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
