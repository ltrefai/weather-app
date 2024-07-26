import React from "react";
import Select from 'react-select';
import { cityCoords } from "../../city_coordinates";

function LocationDropdown() {
    const cityOptions = cityCoords.map( c => { 
        return {
            value: c.city + ', ' + c.country,
            label: c.city
        };
    });

    // On selection, trigger change on page
    

    return (
        <div>
            <Select options={cityOptions}></Select>
        </div>
    )
}

export default LocationDropdown;