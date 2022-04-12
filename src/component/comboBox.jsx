import { Select } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Country, City } from 'country-state-city';

export default function ComboBox() {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [city, setCity] = useState([]);

  useEffect(() => {
    const data = Country.getAllCountries();
    const allCountry = data.map(e => e.name);
    const sortedCountry = allCountry.sort();
    setCountry(sortedCountry);
  }, [country]);

  const fetchCity = () => {
    const data = Country.getAllCountries();
    const countryData = data.filter(e => e.name === selectedCountry);
    const countryCode = countryData[0].isoCode;
    const cityData = City.getCitiesOfCountry(countryCode);
    const allCities = cityData.map(e => e.name);
    setCity(allCities);
  };

  const handleSelectedCountry = e => {
    setSelectedCountry(e.target.value);
  };

  

  return (
    <>
      <Select
        placeholder="Select country"
        w="150px"
        onChange={handleSelectedCountry}
      >
        {country.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </Select>

      <Select placeholder="Select city" onClick={fetchCity}  w="150px" mr={4}>
        {city.map((e, i) => (
          <option value={e} key={i}>
            {e}
          </option>
        ))}
      </Select>
    </>
  );
}
