import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


function PrivateRoute() {
    const {isAuthenticated} = useAuth0()
    
    if (isAuthenticated) {
       return  <Outlet />
    }
    else{
        return <PlsLogin />
    }

}

export default PrivateRoute

const PlsLogin = () => {
        const { loginWithRedirect} = useAuth0()
    return(
        <>
            <div className=' w-full py-24 flex justify-center items-center '>
                <div className='bg-black p-12 flex flex-col justify-center gap-10 items-center  
                                  font-mono font-bold rounded-xl'>
                    <h1 className='text-4xl uppercase text-white text-center'>
                        Please Log In To book pc/ps
                    </h1>
                    <button onClick={(e) => loginWithRedirect()}
                    className=" rounded-xl bg-red-500 py-2 px-6  
                                 font-bold  text-2xl
                                text-white shadow-xl shadow-red-400/75 transition-transform 
                                duration-200 ease-in-out font-mono hover:scale-[1.02]">
                                  Log In
                    </button>
                </div>
            </div>
        </>
    )
}