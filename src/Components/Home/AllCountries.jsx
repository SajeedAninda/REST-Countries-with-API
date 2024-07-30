import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const AllCountries = ({ searchText, selectedContinents }) => {
    const [allCountries, setAllCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://restcountries.com/v3.1/all")
            .then(response => {
                const sortedCountries = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                setAllCountries(sortedCountries);
                setFilteredCountries(sortedCountries);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the countries!", error);
            });
    }, []);

    useEffect(() => {
        let filtered = allCountries;

        if (searchText) {
            filtered = filtered.filter(country =>
                country.name.common.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (selectedContinents && selectedContinents !== "All") {
            filtered = filtered.filter(country =>
                country.region === selectedContinents
            );
        }


        setFilteredCountries(filtered);
    }, [searchText, selectedContinents, allCountries]);

    const formatPopulation = (population) => {
        return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div>
            {
                loading ?
                    <div className='h-[80vh] flex justify-center items-center'>
                        <InfinitySpin
                            visible={true}
                            width="200"
                            color="#111517"
                            ariaLabel="infinity-spin-loading"
                        />
                    </div>

                    :
                    <div className='mt-10 grid grid-cols-1 lg:grid-cols-4 gap-16'>
                        {filteredCountries.map((country, index) => (
                            <Link to={`/${country?.name?.official}`} key={index} className='countryCard rounded-lg shadow-md cursor-pointer hover:shadow-2xl'>
                                <img className='h-[155px] w-full rounded-t-lg object-cover' src={country.flags?.svg} alt={country.name?.common} />
                                <div className='space-y-2 p-6'>
                                    <h1 className='text-[#111517] dark:text-white text-[18px] font-bold'>{country.name?.common}</h1>
                                    <p className='text-[14px] dark:text-white'>
                                        <span className='text-[14px] font-semibold'>Population: </span>{formatPopulation(country.population)}
                                    </p>
                                    <p className='text-[14px] dark:text-white'>
                                        <span className='text-[14px] font-semibold'>Region: </span> {country.region}
                                    </p>
                                    <p className='text-[14px] dark:text-white'>
                                        <span className='text-[14px] font-semibold'>Capital: </span> {country.capital?.[0]}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
            }
        </div>
    );
};

export default AllCountries;
