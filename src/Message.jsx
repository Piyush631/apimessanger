import React from 'react'
import Records from './record.json'
function Message() {
  return (
    <div>
        <h1 className='text-6xl text-center'> AI Messanger
        </h1>
        <div className='w-full mt-3 p-3 flex gap-2 flex-wrap'>
            {

Records.map(record =>{
    return (
            <div className='border-2 border-black rounded-xl h-52 w-64 flex flex-col gap-2 overflow-hidden ' key={record.id}>
                <p className='text-xl font-semibold'>Sender- <span className='text-red-400'>{record.sender_name}</span></p>
                <p className='text-xl font-semibold'> Message-<span className='text-emerald-400 	'> {record.message_text}</span></p>
                <p className='text-xl font-semibold'> Date- <span>{record.message_date}</span></p>
                <p className='italic'>send by {record.platform}</p>
            </div>
    )
})
              }
        </div>
    </div>
  )
}

export default Message