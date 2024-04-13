import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Header from './Header'
import Inform from './Inform'
function Layout() {
  return (
	 <div className=''>
	<Header/>
	<main className='flex items-start flex-col gap-0'>
	<Outlet/>
	</main>
	 </div>
  )
}

export default Layout
