import useStats from '../utils/useStats';
import Stats from './Stats';
import { useState } from 'react';
export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCounty] = useState('HUN');
  if (!countries) {
    return <p>..Loading</p>;
  }
  return (
    <div>
      <h2>Currently showing value: {selectedCountry}</h2>
      <div className="select">
        <select
          onChange={e => {
            setSelectedCounty(e.target.value);
          }}
        >
          {Object.entries(countries.countries).map(([country, code], index) => {
            console.log(code.name);
            return (
              <option selected={selectedCountry === code.iso3} key={index} value={code.iso3}>
                {code.name}
              </option>
            );
          })}
        </select>
      </div>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
    </div>
  );
}
