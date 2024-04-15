import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
          <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
                  <img alt='Tailwind css chat bubble' src={"#"}/>
              </div>
          </div>
          <div className={`chat-bubble text-white bg-blue-500`}>Hii its me</div>
          <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>12:10</div>
    </div>
  )
}

export default Message
