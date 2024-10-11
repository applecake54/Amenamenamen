import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface CelestialBody {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  density: number;
  gravity: number;
  meanRadius: number; 
}

const CelestialGrid = () => {
  const [data, setData] = useState<CelestialBody[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPlanetFilter, setIsPlanetFilter] = useState<boolean | null>(null);
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false')
      .then((response) => response.json())
      .then((data) => {
        setData(data.bodies);  
        setLoading(false);    
      })
      .catch(() => setLoading(false));  
  }, []);

  const filteredData = data.filter((body) => {
    if (isPlanetFilter === null) return true; 
    return body.isPlanet === isPlanetFilter;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === 'density') return a.density - b.density;
    if (sortBy === 'gravity') return a.gravity - b.gravity;
    if (sortBy === 'meanRadius') return a.meanRadius - b.meanRadius;
    return 0;
  });

  if (loading) return <p>Cargando datos...</p>;

  return (
    <div>
      <h1>Cuerpos celestes</h1>
      <select value={isPlanetFilter !== null ? String(isPlanetFilter) : ''} onChange={(e) => {
        const value = e.target.value;
        setIsPlanetFilter(value === 'true' ? true : value === 'false' ? false : null);
      }}>
        <option value="">Todos los cuerpos</option>
        <option value="true">Solo planetas</option>
        <option value="false">No planetas</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Ordenar por...</option>
        <option value="density">Densidad</option>
        <option value="gravity">Gravedad</option>
        <option value="meanRadius">Masa</option>
      </select>

      <div className="celestial-grid">
        {sortedData.map((body) => (
          <div key={body.id}>
            <Link to={`/cuerpo/${body.id}`}>
              <h3>{body.name} ({body.englishName})</h3>
            </Link>
            <p>Densidad: {body.density} g/cm³</p>
            <p>Gravedad: {body.gravity} m/s²</p>
            <p>Masa: {body.meanRadius} kg</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CelestialGrid;


