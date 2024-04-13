import React from 'react'
import img from'./Prosthetic Arm.webp'
import { Link } from 'react-router-dom'
function Header() {
  return (
	 <div className='flex w-full justify-between h-screen fixed'>
		<div className=' w-3/6'>
			<header className='flex justify-between items-center'>
				<div className='p-10'>
					<Link to='/' className='text-3xl cursor-pointer'>Резюме</Link>
				</div>
					<nav className='m-12'>
						<ul className='flex gap-5'>
							<li><Link to='/about' className='hover:text-[#5353e9] cursor-pointer'>обо мне</Link></li>
							<li><Link to='/all' className='hover:text-[#5353e9] cursor-pointer'>резюме</Link></li>
							<li><Link to='/contact' className='hover:text-[#5353e9] cursor-pointer'>контакты</Link></li>
						</ul>
					</nav>
			</header>
	
		</div>
		<div className='bg-[#8ea69b] w-3/6 flex justify-center h-full items-center'>
			<img className='w-5/12 object-cover' src={img}/>
		</div>
	 </div>
  )
}

export default Header
