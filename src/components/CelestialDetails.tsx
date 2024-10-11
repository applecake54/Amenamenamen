import { useParams } from 'react-router-dom';
import { useCelestialData } from '../hooks/usecelestialdata';

const CelestialDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useCelestialData();
  const celestialBody = data.find((body) => body.id === id);

  if (!celestialBody) return <p>Cuerpo celeste :c...</p>;

  return (
    <div>
      <h1>{celestialBody.name} ({celestialBody.englishName})</h1>
      <p>Gravedad: {celestialBody.gravity} m/s²</p>
      <p>Densidad: {celestialBody.density} g/cm³</p>
      <p>masa: {celestialBody.mass.massValue} kg</p>
      <p>Radio: {celestialBody.meanRadius} km</p>
      <p>Excentricidad: {celestialBody.eccentricity}</p>
      <p>Distancia al sol: {celestialBody.semimajorAxis} UA</p>
      <p>Perihelio: {celestialBody.perihelion} UA</p>
      <p>Afelio: {celestialBody.aphelion} UA</p>
      
    </div>
  );
};

export default CelestialDetails;


