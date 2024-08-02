import React from 'react'

function Card({name,description,img}) {
  return (
    <>
     <div className='pl-4 rounded-full'>
      <div className='w-56 h-80 bg-black relative rounded-lg flex justify-center my-auto'>

        <h1 className='absolute font-mono font-bold text-xl tracking-tight uppercase  mt-3 text-white'>{name}</h1>
        <p className='text-wrap absolute absolute font-mono font-light text-md  mt-8 py-6 leading-normal px-4 text-white'>
            {description}
          </p>
        <div className='w-56 h-80 absolute 	 transition-all duration-500  cursor-pointer hover:opacity-0 rounded-full '>
          <img className='rounded-lg max-h-80 min-h-80 max-w-56 min-w-56' src={img} alt="" />
        </div>
      </div>
      
     </div>
    </>
  )
}

export default Card