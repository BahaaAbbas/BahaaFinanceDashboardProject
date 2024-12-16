import React from 'react'
import PagesHeader from '../components/PagesHeader'
import { FaCarSide } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import GoalsHolder from '../components/goals/GoalsHolder';

const Goals = () => {

  const goals = [
    { name: "Car", balance: "$1458.30 / $4580.85" ,  selected: true},
    { name: "Laptop", balance: "$1458.30 / $4580.85" },
    { name: "Vacation", balance: "$1458.30 / $4580.85" },
    { name: "Phone", balance: "$1458.30 / $4580.85" },
  ];



  return (
    <div className=' flex flex-col gap-6'>

      <div className=''>
        <PagesHeader title={'Goals'} />
      </div>


      <div className=''>
        <GoalsHolder goalArr={goals} />
      </div>

    </div>
  )
}

export default Goals