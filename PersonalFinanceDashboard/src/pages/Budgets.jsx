import React from 'react'
import PagesHeader from '../components/PagesHeader'
import { FaCarSide } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import BudgetsHolder from '../components/budgets/BudgetsHolder';
const Budgets = () => {

  const budgets = [
    { icon: <MdCastForEducation className="text-purple-500" />, name: "Grocery", balance: "$1458.30",tag: 'Overtime' },
    { icon: <GiClothes className="text-white" />, name: "Cloths", balance: "$1458.30",tag: 'Week', selected: true },
    { icon: <FaCarSide className="text-blue-500" />, name: "Transportation", balance: "$1458.30", tag: 'Month'},
    { icon: <MdCastForEducation className="text-purple-500" />, name: "Education", balance: "$1458.30", tag: 'Day'},
  ];


  
  return (
    <div className=' flex flex-col gap-6'>

      <div className=''>
        <PagesHeader title={'Budgets'} />
      </div>

      
      <div className=''>
        <BudgetsHolder badgArr={budgets}/>
      </div>

    </div>
  )
}

export default Budgets