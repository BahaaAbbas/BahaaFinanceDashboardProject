import React from 'react'
import { Icons } from './Icons'
import { Link } from 'react-router-dom'

const PagesHeader = ({ title }) => {
    return (
        <div>
            {/* titles and routes */}
            <div className='flex  items-center justify-between '>
            <div className='flex flex-col gap-1 '>
                    <h1 className='font-bold text-[24px]'>{title}</h1>
                    <h5 className='font-semibold'>Welcome Bahaa Finance Management</h5>

                </div>

                <div className='flex  items-center gap-2'>


                    <Link to="/" className='font-bold text-xl text-[#a8b6d4] dark:text-[#405382] hover:no-underline'>
                        Home
                    </Link>


                    <Icons.RightArrowIcon className='text-xl font-semibold text-[#7193c9] dark:text-[#717b98]' />



                    <Link to={`/${title.toLowerCase()}`} className='font-bold text-xl text-[#a8b6d4] dark:text-[#405382] hover:no-underline '>
                        {title}
                    </Link>
                </div>


               

            </div>
        </div>
    )
}

export default PagesHeader