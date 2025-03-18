import React, { useEffect, useRef } from 'react'

const Sender = ({msg}) => {
  const myref = useRef();
  useEffect(() => {
    myref.current?.scrollIntoView({ behavior: "smooth" });
   
  }, [msg])
  
  return (
    <div ref={myref} className="message sender">
              <p>{msg.text}</p>

      </div>
  )
}

export default Sender