import React, { useEffect, useState } from 'react'

export const UseEffectTut2 = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Chats (${count})`
    });

  return (
    <div>
        <h1 className='h1'>{count}</h1>
        <button className='btn' onClick={
            ()=> setCount(count+1)
            }>Click me</button>
    </div>
  )
}
