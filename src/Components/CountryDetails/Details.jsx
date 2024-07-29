import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    let countryDetail = useLoaderData();
    console.log(countryDetail);

    return (
        <div>

        </div>
    );
};

export default Details;