import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CelestialGrid from './components/Celestialgrid';
import CelestialDetails from './components/CelestialDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CelestialGrid />} />
        <Route path="/cuerpo/:id" element={<CelestialDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

