import React from 'react'

function HomeCard({el}) {
  return (
    <div>
        <div className='w-40 min-h-[150px]'>
            <img src={el.file} className='h-full w-full'/>
        </div>
    </div>
  )
}

export default HomeCard