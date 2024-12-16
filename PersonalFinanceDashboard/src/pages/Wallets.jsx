import React from 'react'
import PagesHeader from '../components/PagesHeader'
import { FaUniversity, FaWallet } from 'react-icons/fa';
import { SiVisa } from 'react-icons/si';
import WalletsHolder from '../components/wallets/WalletsHolder';

const Wallets = () => {

  const wallets = [
    { icon: <FaUniversity className="text-purple-500" />, name: "City Bank", balance: "$221,478" },
    { icon: <FaWallet className="text-white" />, name: "Debit Card", balance: "$221,478", selected: true },
    { icon: <SiVisa className="text-blue-500" />, name: "Visa Card", balance: "$221,478" },
    { icon: <FaWallet className="text-purple-500" />, name: "Cash", balance: "$221,478" },
  ];

 

  return (
    <div className=' flex flex-col gap-6'>

      <div className=''>
        <PagesHeader title={'Wallets'} />
      </div>

      <div className=''>
        <WalletsHolder walArr={wallets}/>
      </div>

    

    </div>
  )
}

export default Wallets