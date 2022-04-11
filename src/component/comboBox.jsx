import { Select } from '@chakra-ui/react';
import { useState } from 'react';

export default function ComboBox() {
  const [country, setCountry] = useState([]);
  const [region,setRegion] = useState("")
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  };
  
  async function fetchData() {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`, options);
    const data = await response.json();
    if(!response) return
    const allCountry = data.map(e => e.name.common);
    const sortedData = allCountry.sort();
    setCountry(sortedData);
  }
  

  const handleOption = e => setRegion(e.target.value)
  return (
    <>
     <Select placeholder="Select region" onChange={handleOption} onClick={fetchData} w="150px" mr={4}>
     <option value="africa">africa</option>
     <option value="Americas">Americas</option>
     <option value="Asia">Asia</option>
     <option value="Europe">Europe</option>
     <option value="Oceania">Oceania</option>

    </Select>

     <Select placeholder="Select option"  w="150px" mr={4}>
      {country.map((e, i) => (
        <option value={e} key={i}>
         {e}
        </option>
      ))}
      
    </Select>
    </>
   
  );
}
