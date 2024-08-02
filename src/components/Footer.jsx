import React from "react";
import { SocialIcon } from 'react-social-icons'


function Footer() {
    return(
        <div className=" grid grid-flow-row w-full min-h-52 bg-black px-10 text-white place-items-center  border-t-4 border-white">

            <div className="grid grid-flow-row place-items-center my-auto w-full  border-b-0 md:border-white md:grid-flow-col  md:border-b-2 md:pb-4 md:px-32 pt-8 ">
                <div className=" pt-4 mx-auto flex flex-col items-center border-b-4 border-red-600 w-full
                                md:border-b-0 md:border-r-4">
                    <img className='w-12 h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyL6y3SgbWt4YyS-pyyKevU107FPwJL1MgYw&usqp=CAU" alt="" />
                    <h4 className="font-mono font-bold text-xl tracking-wider">Gaming Cafe</h4>
                </div>
                <div className="h-24 text-center pt-4  border-b-4 border-red-600 w-full
                                md:border-b-0 md:border-r-4">
                    <p className="font-mono font-bold text-lg tracking-tight">
                        <span className="font-mono font-bold text-xl tracking-tight">Address: <br/></span>
                     Sion Circle, Mumbai
                    </p>
                </div>
                <div className="h-24 text-center pt-4  border-b-4 border-red-600 w-full
                                md:border-b-0 md:border-r-4">
                    <p className="font-mono font-bold text-lg tracking-tight">Mon-Sun</p>
                    <p className="font-mono font-bold text-lg tracking-tight">9am-8pm</p>
                </div>
                <div className="h-24 text-center pt-4  border-b-4 border-red-600 w-full
                                md:border-b-0">
                    <p className="font-mono font-bold text-lg tracking-tight">Phone No. <br /> 898341963</p>
                </div>
            </div>
            <div className="w-full flex justify-center gap-5 py-8 ">
                <div><SocialIcon network="facebook" /></div>
                <div><SocialIcon network="x" /></div>
                <div><SocialIcon network="instagram" /></div>
                
            </div>
        </div>
    )
}

export default Footer