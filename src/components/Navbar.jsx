import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import InPageNavigation from './InPageNavigation'

function Navbar() {
  return (
    <div>
      <>
        <div className='flex gap-1'>
          <InPageNavigation teams={[{title:"MATCHES",path:"/"},{title:"NEWS",path:"/news"},
            {title:"POINTS TABLE",path:"/pointsTable"}
          ]}>

          </InPageNavigation>
          {/* <Link to={'/'}>
            <h1>Matches</h1>
          </Link>
          <Link to={'/pointsTable'}>
            <h1>Pointstable</h1>
          </Link> */}
        </div>
        <Outlet />
      </>
    </div>
  )
}

export default Navbar
