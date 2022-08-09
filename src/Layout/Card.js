import React from 'react';

const Card = ({ pokemon }) => {
    const name = pokemon.name
    const img = pokemon.sprites.other['official-artwork'].front_default
    const types = pokemon.types
    const height = pokemon.height / 10
    const weight = pokemon.weight / 10
    const abilities = pokemon.abilities
    const hp = pokemon.stats[0].base_stat
    return (
        <div className='w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto text-center text-lg py-8'>
            <div className='shadow-xl p-4 lg:p-6 rounded-lg border-4 border-blue-900 bg-slate-50'>

                <div className='flex justify-between pb-2'>
                    <p className='font-semibold uppercase'>{name}</p>
                    <p className='font-semibold'>{hp} <small>hp</small></p>
                </div>

                <img src={img} alt="" className='pb-3' />

                <div className='capitalize flex flex-wrap py-2 lg:py-3'><span className='font-semibold pr-1'>Type: </span> {types.map((type, key) =>
                    <span key={key} className='pr-1 capitalize'>{type.type.name}.</span>)}
                </div>

                <div className='flex justify-between pb-2'>
                    <p> <span className='font-semibold lg:pr-1'>Weight:</span>{weight}kg</p>
                    <p> <span className='font-semibold lg:pr-1'>Height:</span>{height}m</p>
                </div>

                <div className='py-2 mb-2 flex flex-wrap'>
                    <span className='font-semibold pr-1'>Abilities: </span>
                    {abilities.map((ability, key) =>
                        <span key={key} className='pr-1 capitalize'>{ability.ability.name}.</span>)}
                </div>


            </div>
        </div>
    );
};

export default Card;