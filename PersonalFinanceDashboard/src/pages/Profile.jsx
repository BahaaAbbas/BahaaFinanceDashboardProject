import React from 'react'
import PagesHeader from '../components/PagesHeader'
import { FaUniversity, FaCreditCard, FaWallet } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import ProfileHolder from '../components/profile/ProfileHolder';


const Profile = () => {
  // Chart Data
  const chartData = {
    labels: ["4 Jan", "5 Jan", "6 Jan", "7 Jan", "8 Jan", "9 Jan", "10 Jan", "11 Jan", "12 Jan", "13 Jan", "14 Jan", "15 Jan"],
    datasets: [
      {
        label: "City Bank",
        data: [50, 100, 150, 200, 250, 100, 150, 300, 100, 200, 250, 350],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className=' flex flex-col gap-6'>

      <div className=''>
        <PagesHeader title={'Profile'} />
      </div>

      <div className=''>
        <ProfileHolder/>
      </div>
  
    </div>
  )
}

export default Profile