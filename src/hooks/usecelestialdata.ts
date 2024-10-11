/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { CelestialBody } from '../types/celestialTypes';

export const useCelestialData = () => {
  const [data, setData] = useState<CelestialBody[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false');
        const result = await response.json();
        setData(result.bodies);
      } catch (err) {
        setError('Error al traer los datos troste :c ');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
