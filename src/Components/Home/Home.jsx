import React, { useState } from 'react';
import searchIcon from "../../assets/search.svg";
import "./home.css";
import AllCountries from './AllCountries';

const Home = () => {
    let [selectedContinents, setSelectedContinents] = useState("");
    let [searchText, setSearchText] = useState("");
    let [isDropdownOpen, setIsDropdownOpen] = useState(false);

    let continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];


    let handleSelect = (continent) => {
        setSelectedContinents(continent);
        setIsDropdownOpen(false);
    };


    return (
        <div className='bg-[#fafafa] dark:bg-[#202c37]'>
            <div className='w-[85%] mx-auto'>
                <div className='search&filter flex justify-between items-center pt-10'>
                    <div className='w-[40%] relative'>
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            name='searchValue'
                            className='searchBox w-full rounded-lg py-4 pl-16 pr-6 placeholder:text-[14px] dark:bg-[#2b3945] '
                            type="text"
                            placeholder='Search for a country...'
                        />
                        <img className='w-[30px] absolute left-5 top-[14px]' src={searchIcon} alt="Search Icon" />
                    </div>

                    <div className='filterBox rounded-lg w-[20%] relative'>
                        <div
                            className='block w-full bg-white dark:bg-[#2b3945]  text-[#111517] dark:text-white font-bold py-4 px-6 rounded-lg leading-tight focus:outline-none cursor-pointer'
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            aria-expanded={isDropdownOpen}
                        >
                            {selectedContinents || "Filter By Region"}
                        </div>
                        {isDropdownOpen && (
                            <ul className='absolute z-10 mt-1 w-full bg-white border border-gray-300 dark:border-none rounded-lg shadow-lg'>
                                {continents.map((continent) => (
                                    <li
                                        key={continent}
                                        aria-label={continent}
                                        className='py-2 px-6 dark:bg-[#2b3945] dark:text-white hover:bg-gray-100 cursor-pointer font-semibold'
                                        onClick={() => handleSelect(continent)}
                                    >
                                        {continent}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <AllCountries searchText={searchText} selectedContinents={selectedContinents}></AllCountries>
            </div>
        </div>
    );
};

export default Home;
