import React, { useEffect, useRef } from "react";

const Sender = ({ msg }) => {
  const myref = useRef();
  useEffect(() => {
    myref.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);

  return (
    <div ref={myref} className="message sender">
      <p className="mb-0">{msg.text}</p>
      <span className="msg-time text-black-50 align-self-end">
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

export default Sender;
