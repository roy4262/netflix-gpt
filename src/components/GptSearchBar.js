import React from 'react';
import { lang } from '../utils/constants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langkey=useSelector((store) =>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' placeholder={lang[langkey].gptSearchHolder} className='p-4 m-4 col-span-8'/>
            <button className='py-2 px-4 bg-red-800 text-white rounded-md col-span-3 m-4'>{lang[langkey].Search}</button>
        </form>
    </div>
  )
}



export default GptSearchBar