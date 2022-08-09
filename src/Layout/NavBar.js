import React from 'react';
import pokemon from '../Images/pokemon.png'

const NavBar = () => {
    return (
        <div className='py-6 bg-blue-100 flex justify-center'>
            <h2 className='text-3xl lg:text-4xl p-4 font-medium text-blue-800'>Search for</h2>
            <img src={pokemon} className="h-16" alt="" />

        </div>
    );
};

export default NavBar;