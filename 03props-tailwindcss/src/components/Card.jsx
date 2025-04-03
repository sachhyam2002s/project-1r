import React from 'react'

function card(props) {
    console.log(props);
    
  return (
    <div>
      <div className='relative h-[400px] w-[300px] rounded-md '>
        <img src="https://images.pexels.com/photos/21708270/pexels-photo-21708270/free-photo-of-a-large-group-of-white-flowers-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='s-0 h-full w-full rounded-b-md object-cover'/>
        <div className='absolute inset- 0 bg-gradient-to-t from-gray-900 to-transparent'></div>
        <div className='absolute bottom-4 left-4 text-left'>
          <h1 className='text-lg font-semibold text-blue-400'>{props.username}</h1>
          <p className='mt-2 text-sm text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veniam aliquid, adipisci consequatur magni vero?</p>
          <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>{props.btnTxt}</button>
        </div>
    </div>
    </div>
  )
}

export default card
