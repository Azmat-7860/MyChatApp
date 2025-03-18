import React, { useEffect, useRef } from 'react'

const Reciver = ({msg}) => {
   const myref = useRef();
    useEffect(() => {
      myref.current?.scrollIntoView({ behavior: "smooth" }); 
     
    }, [msg])
    
  return (
  
   <div ref={myref} className="message receiver align-self-end">
   <p>{msg.text}</p>
 </div>
  )
}

export default Reciver