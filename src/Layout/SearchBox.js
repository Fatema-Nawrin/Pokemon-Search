import axios from 'axios';
import React, { useState } from 'react';
import Card from './Card';

const SearchBox = () => {
    const [pokemonName, setPokemonName] = useState('')
    const [pokemon, setPokemon] = useState()
    const [errorMessage, setErrorMessage] = useState('')

    const searchPokemon = (pokemonName) => {
        if (pokemonName === '') {
            setErrorMessage('Please, Enter a pokemon name.')
        }
        else {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(function (response) {
                setPokemon(response.data)
                setErrorMessage('')

            }).catch(function (error) {
                setErrorMessage('Pokemon is not found.');
                setPokemon('')
            })
        }

    }

    return (
        <div className='w-10/12 mx-auto py-6 text-center'>
            <div className='flex justify-center'>
                <input type="text" placeholder="Search Pokemon" className="py-2 px-2 rounded-l-lg border border-blue-900 w-full max-w-xs" onChange={(event) => {
                    setPokemonName(event.target.value.toLowerCase());
                }} />
                <button className="p-2 lg:p-3 text-lg rounded-r-lg border-blue-900 text-white bg-blue-900"
                    onClick={() => searchPokemon(pokemonName)}>
                    Search
                </button>
            </div>
            {errorMessage.length !== 0 ? <><p className='py-6 text-red-600'>{errorMessage}</p></> : null}
            {pokemon ?
                <Card pokemon={pokemon}></Card>
                :
                null
            }

        </div>
    );
};

export default SearchBox;