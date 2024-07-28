import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllCountries = () => {
    let [countries, setCountries] = useState();

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(response => {
                setCountries(response.data);
            })
    }, [])

    console.log(countries);
    return (
        <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 gap-16'>
            {
                countries?.map(country =>
                    <div className='countryCard rounded-lg shadow-md cursor-pointer hover:shadow-2xl'>
                        <img className='h-[155px] w-full rounded-t-lg object-cover' src={country?.flags?.svg} alt="" />

                        <div className='space-y-2 p-6'>
                            <h1 className='text-[#111517] text-[18px] font-bold'>{country?.name?.common}</h1>
                            <p className='text-[14px]'>
                                <span className='text-[14px] font-semibold'>Population: </span>{country?.population}
                            </p>
                            <p className='text-[14px]'>
                                <span className='text-[14px] font-semibold'>Region: </span> {country?.population}
                            </p>
                            <p className='text-[14px]'>
                                <span className='text-[14px] font-semibold'>Capital: </span> {country?.capital}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AllCountries;