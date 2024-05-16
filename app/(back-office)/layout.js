import React from 'react'
import Sidebar from '../components/backoffice/Sidebar'

export default function layout({children}) {
  return (
    <div className='flex'>
        {/* sidebar */}
        <Sidebar/>
        {/* main body */}
        <div className='w-full'>
            <h2>Header</h2>
            <main>{children}</main>
        </div>
      
    </div>
  )
}
