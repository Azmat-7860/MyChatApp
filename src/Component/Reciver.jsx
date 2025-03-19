import React, { useEffect, useRef } from "react";

const Reciver = ({ msg }) => {
  const myref = useRef();
  useEffect(() => {
    myref.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <div ref={myref} className="message receiver align-self-end">
      <p className="mb-0">{msg.text}</p>
      <span className="msg-time align-self-end">
        {msg.date
          ? new Date(msg.date.seconds * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          : ""}
      </span>
    </div>
  );
};

export default Reciver;
