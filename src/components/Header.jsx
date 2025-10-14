import React from 'react';
import {Link,NavLink} from 'react-router-dom'

function Header(){
    return(
        <>
        <header className=' h-[130px] w-full bg-[#000426]'><div className='flex justify-center w-full h-full py-5 items-center gap-32 ml-[-100px]'>
  <div className='text-white font-extrabold text-2xl inline fixed top-12 left-4 z-30'> <Link to="/"><img src="./icons8-discord-50.png" alt="" srcset="" className='inline h-9 w-9 mr-2 '  />Discord</Link></div>
  <div className='ml-[160px]'><ul role='list' className=' flex gap-4 font-bold'>
    <li className='text-white inline text-[14px] hover:bg-blue-400 hover:bg-opacity-5  rounded-[6px]'><NavLink to='/download' className='p-1'>Download</NavLink></li>
    <li className='text-white inline text-[14px]  hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/nitro' className='p-1'>Nitro</NavLink></li>
    <li className='text-white inline text-[14px]  hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/discover' className='p-1'>Discover </NavLink></li>
    <li className='text-white inline text-[14px]  hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/safety' className='p-1'>Safety &#8964;</NavLink></li>
    <li className='text-white inline text-[14px] hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/quest' className='p-1'>Quests &#8964;</NavLink></li>
    <li className='text-white inline text-[14px] hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/support' className='p-1'>Support &#8964;</NavLink></li>
    <li className='text-white inline text-[14px] hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/blog' className='p-1'>Blog &#8964;</NavLink></li>
    <li className='text-white inline text-[14px] hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/developer' className='p-1'>Developers &#8964;</NavLink></li>
    <li className='text-white inline text-[14px] hover:bg-blue-400 hover:bg-opacity-5 rounded-[6px]'><NavLink to='/careers' className='p-1'>Careers</NavLink></li>
  </ul>
 
  </div>
  <div className='text-black inline text-[15px] bg-white font-bold border-1 border-black  p-1 rounded-[12px] pr-3 pl-3 fixed top-13 right-6 z-30
  '><Link>Log in</Link></div>
  </div></header>
        </>
    )
}
export default Header;
