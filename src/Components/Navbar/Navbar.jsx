import React from 'react';
import moonIcon from "../../assets/moon.svg";

const Navbar = () => {
    return (
        <div className='shadow-md mb-1 h-[12vh] flex items-center sticky top-0 bg-white z-20'>
            <div className='w-[85%] mx-auto flex justify-between items-center'>
                <h3 className='text-[#111517] text-[18px] font-extrabold'>
                    Where in the world?
                </h3>

                <button className='flex items-center gap-1 cursor-pointer'>
                    <img className='w-[16px]' src={moonIcon} alt="Moon Icon" />
                    <p className='text-[14px]'>
                        Dark Mode
                    </p>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
