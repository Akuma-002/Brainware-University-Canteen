import React from 'react'
import data from './data.json'
const Veg = () => {
  
  return (
    <div className='main '>
      {data.map((item)=>{
        if(item.Type !== "Veg") return null; // Filter out non-veg items
        return(
          <div class="containter border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white max-w-56">
    <div class="group cursor-pointer flex items-center justify-center px-2">
        <img class="prductImage group-hover:scale-105 transition max-w-[160px]" src={`${item.Image}`} alt={`${item.Name}`} />
    </div>
    
    <div class="text-gray-500/60 text-sm">
        <p>{item.Type}</p>
        <p class="text-gray-700 font-medium text-lg truncate w-full">{item.Name}</p>

        <div class="flex items-center gap-0.5">
            <p>{item.Description}</p>
        </div>

        <div class="flex items-end justify-between mt-2">
            <p class="md:text-xl text-base font-medium text-indigo-500">
                {`₹${item.Price}`}
            </p>
            <button class="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Add
            </button>
        </div>
    </div>
</div>
        )
      })}
    </div>
  )
}

export default Veg;