import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) =>{
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
      const fetchAPI = async () => {
        setFetchedCountries(await fetchCountries());
      }
  
      fetchAPI();
    }, [setFetchedCountries]);
    console.log(fetchedCountries);
  

    return(
     
       <FormControl className={styles.formControl}>
          <Box color="primary.main">
           <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               <option value ="" >Global</option>
               {fetchedCountries.map((country, i) => <option key={i} value={country}>{country} </option>)}
           </NativeSelect>
           </Box>
           </FormControl>
           

    )
}
export default CountryPicker;