import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = () => {
    const [pokemonName, setPokemonName] = useState('')
    const [pokemon, setPokemon] = useState()
    const [errorMessage, setErrorMessage] = useState('')

    const searchPokemon = (pokemonName) => {
        if (pokemonName === '') {
            setErrorMessage('Please enter a pokemon name')
        }
        else {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(function (response) {
                console.log(response.data)
                setPokemon(response.data)
                setErrorMessage('')

            }).catch(function (error) {
                setErrorMessage('Pokemon is not found.');
            })
        }

    }

    return (
        <div className='w-10/12 mx-auto my-6 text-center'>
            <div className='flex justify-center'>
                <input type="text" placeholder="Search Pokemon" className="py-2 px-2 rounded-l-lg border-2 border-blue-700 w-full max-w-xs" onChange={(event) => {
                    setPokemonName(event.target.value.toLowerCase());
                }} />
                <button className="p-2 lg:p-3 text-lg rounded-r-lg border-blue-800 text-white bg-blue-800"
                    onClick={() => searchPokemon(pokemonName)}>
                    Search
                </button>
            </div>
            {errorMessage.length !== 0 ? <><p>{errorMessage}</p></> : null}
            {pokemon ?
                <div>

                    <p>{pokemon.species.name}</p>

                </div>
                :
                null

            }

        </div>
    );
};

export default SearchBox;