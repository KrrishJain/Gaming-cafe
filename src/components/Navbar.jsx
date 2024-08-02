import React from 'react'
import Hamburger from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
      setIsOpen(!isOpen)
    }

    const {loginWithRedirect, isAuthenticated, logout, user} = useAuth0()
    
    console.log(user)

  return (

  <>
    <nav className='w-full bg-black flex align-middle 
                     py-2 items-center
                     md:justify-center 
                     border-b-4 boder-white 
                     justify-between
                     px-6
                     md:px-0
                     '>
        <div className='md:hidden'>
           <Hamburger onToggle={toggle}  direction="right" color="#fff"  />
        </div>

        <div className='hidden md:block'>
            <img className='w-12 h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyL6y3SgbWt4YyS-pyyKevU107FPwJL1MgYw&usqp=CAU" alt="" />
        </div>
        
          
        <div className='px-72 hidden md:block  '>
          
            <ul className='flex justify-center items-center text-white ' >
                <li className='px-6 font-mono font-bold text-xl tracking-wider    
                               border-b-4 border-transparent hover:border-red-600 transition duration-300  
                               cursor-pointer'
                >
                                <NavLink 
                                    className={({isActive}) => 
                                    `
                                    ${isActive ? "text-red-500" : "text-white"}
                                    `
                                  }
                                    to={'/'}
                                  >
                                  Home
                                </NavLink>
                </li>
                <li className='px-6 font-mono font-bold text-xl tracking-wider    
                               border-b-4 border-transparent hover:border-red-600 transition duration-300  
                               cursor-pointer'
                >
                                <NavLink
                                 className={({isActive}) => 
                                    `
                                    ${isActive ? "" : "text-white"}
                                    `
                                  }
                                to={'/games'}>Games</NavLink>
                </li>
                <li className='px-6 font-mono font-bold text-xl tracking-wide    
                               border-b-4 border-transparent hover:border-red-600 transition duration-300  
                               cursor-pointer'
                >
                                <NavLink 
                                 className={({isActive}) => 
                                    `
                                    ${isActive ? "text-red-500" : "text-white"}
                                    `
                                  }
                                to={'/user/book-now'}>BOOK NOW</NavLink>
                </li>
                {/* <li className='px-6 font-mono font-bold text-xl tracking-wider    
                               border-b-4 border-transparent hover:border-red-600 transition duration-300  
                               cursor-pointer'
                >
                                <Link to={'/contact'}>Contact</Link>
                </li> */}
            </ul>
            
        </div>
        <div >
         {
          isAuthenticated ? (
            <button  onClick={(e) => logout()}
                    className=" rounded-xl bg-red-500 py-2 px-6  
                                 font-bold  
                                text-white shadow-xl shadow-red-400/75 transition-transform 
                                duration-200 ease-in-out font-mono hover:scale-[1.02]">
                                  Logout
          </button>
             
          ) : 
          (
            <button  onClick={(e) => loginWithRedirect()}
                      className=" rounded-xl bg-red-500 py-2 px-6  
                                  font-bold  
                                  text-white shadow-xl shadow-red-400/75 transition-transform 
                                  duration-200 ease-in-out font-mono hover:scale-[1.02]">
                                    SignUp/LogIn
            </button>
          )
         }
        </div>
    </nav>
    
       {
        isOpen === true ? 
        <div className='w-full  py-10 bg-black flex flex-col text-white bg-[#A9A9A9]  transition-all duration-500 md:hidden'>
          <ul>
              <li  className='w-full font-mono font-bold text-3xl tracking-wider text-center  
                            py-4 hover:boder-red-400  transition-all duration-500 border-b-2  
                            border-t-2 my-8'
                            onClick={toggle}
                            >
                            <NavLink 
                           
                            to={'/'}
                            >
                              Home
                            </NavLink>
              </li>
              <li className='w-full font-mono font-bold text-3xl tracking-wider text-center  
                            py-4 hover:bg-red-400  transition-all duration-500 border-b-2  
                            border-t-2 my-8'
                            onClick={toggle}
                            >
                            <NavLink to={'/games'}>Games</NavLink>
              </li>
              <li className='w-full font-mono font-bold text-3xl tracking-wider text-center  
                            py-4 hover:bg-red-400  transition-all duration-500 border-b-2  
                            border-t-2 my-8'
                            onClick={toggle}
                            >
                            <NavLink to={'/user/book-now'}>BOOK NOW</NavLink>
              </li>
              <li className='w-full font-mono font-bold text-3xl tracking-wider text-center  
                            py-4 hover:bg-red-400  transition-all duration-500 border-b-2  
                            border-t-2'
                            onClick={toggle}
                            >
                            <Link to={'/contact'}>Contact</Link>
              </li>
        </ul>
      </div>: null
       }
    
  </>
  )
}

export default Navbar




