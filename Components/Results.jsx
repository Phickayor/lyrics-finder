import { Poppins } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
const poppins = Poppins({ weight: '900', subsets: ['latin'] })
function Results(props) {
    var searchResults = props.results;

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:py-10 py-2 px-5 text-center'>

            {
                searchResults.map((results, index) => (
                    <div key={index} className='p-[30px] w-full'>
                        <Image width={100} height={100} src={results['result']['header_image_url']} className='rounded-2xl' alt="Album Cover" />
                        <div className='space-y-3 my-4'>
                            <h3 className={`text-3xl font-mono font-semibold ${poppins.className}`}>{results.result.title}</h3>
                            <p className='text-2xl text-slate-400'>{results.result.artist_names}</p>
                            <a href={results.result.url} className='text-3xl text-[#ff0000]' onClick={()=>{console.log(results['result']['header_image_url'])}>View Lyrics</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Results
