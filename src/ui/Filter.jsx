import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({ filterFiled, options }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentFilter = searchParams.get(filterFiled) || options.at(0).value;

    const handleClick = (value) => {
        searchParams.set(filterFiled, value);
        setSearchParams(searchParams);
    }

    return (
        <div className='flex items-center gap-x-2 text-xs'>
            <span>وضعیت</span>
            <div className='flex gap-x-2 text-xs items-center border border-secondary-100 bg-secondary-0 rounded-lg '>
                {
                    options.map(({ value, label }) => {
                        const isActive = currentFilter === value;
                        return <button key={value}
                            disabled={isActive}
                            onClick={() => handleClick(value)}
                            className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
                            ${isActive ? '!bg-primary-900 text-secondary-0' : 'bg-secondary-0 text-secondary-800'}`}>
                            {label}
                        </button>
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Filter