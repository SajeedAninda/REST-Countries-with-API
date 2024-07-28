import React from 'react';
import searchIcon from "../../assets/search.svg"
import "./home.css"

const Home = () => {
    let handleFiltering = (e) => {
        let searchText = e.target.value;
        console.log(searchText)
    }

    return (
        <div>
            <div className='w-[85%] mx-auto relative'>
                <div className='search&filter flex justify-between items-center mt-10'>
                    <div className='w-[40%] '>
                        <input onChange={handleFiltering} name='searchValue' className='searchBox w-full rounded-lg py-4 pl-16 pr-6 placeholder:text-[14px]' type="text" placeholder='Search for a country...' />

                    </div>
                    <img className='w-[30px] absolute left-5' src={searchIcon} alt="" />
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;