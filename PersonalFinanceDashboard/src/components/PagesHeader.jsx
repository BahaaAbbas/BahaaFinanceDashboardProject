import React from 'react'
import { Icons } from './Icons'
import { Link } from 'react-router-dom'

const PagesHeader = ({ title }) => {
    return (
        <div>
            {/* titles and routes */}
            <div className='flex  items-center justify-between '>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-bold text-[24px]'>{title}</h1>
                    <h5 className='font-semibold'>Welcome Bahaa Finance Management</h5>

                </div>

                <div className='flex  items-center gap-2'>


                    <h5 className='font-semibold'>Home </h5>


                    <Icons.RightArrowIcon className='text-xl font-semibold text-[#7193c9] dark:text-[#717b98]' />


                    <h5 className='font-semibold'>  {title} </h5>

                </div>

            </div>
        </div>
    )
}

export default PagesHeader