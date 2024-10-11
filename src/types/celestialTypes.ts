export interface CelestialBody {
  id: string;
  name: string;
  englishName: string;
  isPlanet: boolean;
  moons?: Array<{ moon: string; rel: string }>;
  semimajorAxis: number;
  perihelion: number;
  aphelion: number;
  eccentricity: number;
  inclination: number;
  mass: {
    massValue: number;
    massExponent: number;
  };
  vol: {
    volValue: number;
    volExponent: number;
  };
  density: number;
  gravity: number;
  meanRadius: number;
}
