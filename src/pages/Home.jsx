import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function Home() {
    
    const DesktopScreenCarousel = ()=>(
    <Carousel
    autoPlay
    showIndicators={false}
    infiniteLoop
    interval={3000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    >
       
            <div className=' w-full relative h-[85vh]  '>
                <TextDiv />
                <img  className='w-full  relative -z-0' src="https://images.unsplash.com/photo-1558008258-7ff8888b42b0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  />
            </div>
            <div className=' w-full h-[85vh] relative'>
                 <TextDiv />
                <img  className='w-full -z-0' src="https://preview.redd.it/why-gaming-cafe-never-worked-in-india-like-they-did-in-east-v0-uey25sdi4u6c1.jpeg?auto=webp&s=f1d6afbd305916f57571b819cc830ccc75e80f8a" alt=""  />
            </div>
            <div className=' w-full  h-[85vh] relative'>
              <TextDiv />
              <img  className='w-full -z-0' src="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/gaming.png" alt=""  />
            </div>
    </Carousel>
 )

  const PhoneScreenCarousel = ()=>(
    <Carousel
    autoPlay
    showIndicators={false}
    infiniteLoop
    interval={3000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    >
       
            <div className=' w-full relative h-[85vh]  '>
                <TextDiv />
                <img  className='w-full  relative -z-0' src="https://i.pinimg.com/564x/5d/76/c4/5d76c4a09657ad20bd522107fd887764.jpg" alt=""  />
            </div>
            <div className=' w-full h-[85vh] relative'>
                 <TextDiv />
                <img  className='w-full -z-0' src="https://i.pinimg.com/564x/79/7a/64/797a6475c909cb376bfdf30174e07b9d.jpg" alt=""  />
            </div>
            <div className=' w-full  h-[85vh] relative'>
              <TextDiv />
              <img  className='w-full -z-0' src="https://i.pinimg.com/564x/64/7d/3b/647d3b7fbfee55314a8d84733ff18dc6.jpg" alt=""  />
            </div>
    </Carousel>
 )

 return (
    <>
    <div className='hidden md:block'>
      <DesktopScreenCarousel className="relative" />
    </div>
    <div className=' block md:hidden'>
      <PhoneScreenCarousel className="relative" />
    </div>
    </> 
  )
  
}

export default Home



export const TextDiv = () => {
  return(
    <div className=' flex justify-center items-center w-full h-[100%] bg-opacity-75 bg-black absolute z-50'> 
                   <div className=''>
                      <p className='mb-5 text-white font-mono font-semibold text-3xl md:text-4xl uppercase'>
                           Unleash your inner hero in a world<br /> of pixels and possibilities at <br/> <span className='font-bold text-6xl text-red-500'>Game Zone</span> <br />
                           Book your PC/PS and let's save the day!
                      </p>
                      <Link to={'/user/book-now'} class="relative inline-block text-lg group">

                            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span class="absolute left-0 w-64 h-64 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
                            <span class="relative text-2xl">LET'S GO!!</span>
                            </span>
                            <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                      </Link>
                   </div>
                </div>
  );
}