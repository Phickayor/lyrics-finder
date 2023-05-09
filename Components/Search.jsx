import React, { useRef } from 'react'
import { Krub, Poppins } from 'next/font/google';
const krub = Krub({ weight: '500', subsets: ['latin'] })
const poppins = Poppins({ weight: '900', subsets: ['latin'] })
function Search(props) {
    const searchContainer = useRef(null)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.apiKey,
            'X-RapidAPI-Host': process.env.apiHost
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        Result(searchContainer.current.value)
    }
    function Result(search) {
        fetch(`https://genius-song-lyrics1.p.rapidapi.com/search/?q=${search}&per_page=12&page=1`, options).then(function (response) {
            return response.json()
        }).then(function (data) {
            props.resultHandler(data.hits)
        })
    }
    return (
        <div className='text-white mx-auto lg:w-9/12 w-11/12'>
            <h1 className={`${poppins.className} lg:text-8xl text-5xl pb-10 py-20 text-center font-semibold`}><b className='text-[#ff0000] font-semibold'>Lyrics</b> Finder</h1>
            <div className={`${krub.className} flex flex-col`}>
                <p className='lg:text-5xl text-3xl text-center text-slate-400'>Search for any song lyrics on the spot.</p>
                <input type='search' ref={searchContainer} className='px-10 mt-10 py-4 lg:py-8 bg-[#0d1117] outline-none text-center font-semibold text-3xl rounded-full w-full object-center' />
                <button className='bg-[#ff0000] font-semibold text-xl my-5 rounded-full w-8/12 lg:w-6/12 py-3 lg:py-5 self-center' onClick={handleSubmit}>Search</button>
            </div>


        </div>
    )
}

export default Search 