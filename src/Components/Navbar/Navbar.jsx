import React, { useEffect, useState } from 'react';
import moonIcon from "../../assets/moon.svg";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className='shadow-md mb-1 h-[12vh] flex items-center sticky top-0 bg-white dark:bg-[#2b3945] z-20'>
            <div className='w-[85%] mx-auto flex justify-between items-center'>
                <h3 className='text-[#111517] dark:text-white text-[18px] font-extrabold'>
                    Where in the world?
                </h3>

                <button onClick={toggleDarkMode} className='flex items-center gap-2 cursor-pointer text-[#111517] dark:text-white'>
                    <img className='w-[16px]' src={moonIcon} alt="Moon Icon" />
                    <p className='text-[14px]'>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </p>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
