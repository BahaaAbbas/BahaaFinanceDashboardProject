import React from 'react'
import PagesHeader from '../components/PagesHeader'
import AnalyticsHolder from '../components/analytics/AnalyticsHolder'

const Analytics = () => {
  return (
    <div className=' flex flex-col gap-6'>

      <div className=''>
        <PagesHeader title={'Analytics'} />
      </div>

      <div className=''>
        <AnalyticsHolder  />
      </div>
    </div>
  )
}

export default Analytics