import React from 'react';
import pokemon from '../Images/pokemon.png'

const NavBar = () => {
    return (
        <div className='my-6 bg-blue-100 flex justify-center'>
            <h2 className='text-3xl p-4 font-semibold text-blue-800'>Search for</h2>
            <img src={pokemon} className="h-16" alt="" />

        </div>
    );
};

export default NavBar;