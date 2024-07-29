import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./details.css"
import leftArrow from "../../assets/leftArrow.svg"

const Details = () => {
    let [countryDetail] = useLoaderData();

    const formatPopulation = (population) => {
        return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className='h-[100vh] py-12 w-[80%] mx-auto '>
            <Link to={"/"} className='px-4 py-2 text-[#111517] text-[15px] font-semibold shadow-lg backBtn flex gap-2 items-center w-[10%]'>
                <img className='w-[20px]' src={leftArrow} alt="" />
                Back
            </Link>
            <div className='flex justify-center items-center mt-10'>
                <div className='flex justify-center gap-12'>
                    <div className='w-[50%]'>
                        <img src={countryDetail?.flags?.svg} alt="" />
                    </div>
                    <div className='w-[50%]'>
                        <h1 className='text-[#111517] text-[24px] font-extrabold'>{countryDetail?.name?.common}</h1>
                        <div className='mt-4 flex justify-between gap-10'>
                            <div className='space-y-2'>
                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Official Name: </span>{countryDetail?.name?.official}
                                </p>

                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Population: </span>{formatPopulation(countryDetail?.population)}
                                </p>

                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Region: </span>{countryDetail?.region}
                                </p>

                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Sub Region: </span>{countryDetail?.subregion}
                                </p>

                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Sub Region: </span>{countryDetail?.capital?.[0]}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Top Level Domain: </span>{countryDetail?.tld}
                                </p>

                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Currency: </span>
                                    {Object.values(countryDetail.currencies).map((currency, index) => (
                                        <span key={index}>{currency.name}</span>
                                    ))}
                                </p>

                                <p className='text-[15px]'>
                                    <span className='text-[15px] font-semibold'>Languages: </span>
                                    {countryDetail?.languages
                                        ? Object.values(countryDetail.languages).join(', ')
                                        : 'Language information not available'}
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;