import { useState, useEffect } from "react";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div
          className={`w-full p-4 border  border-slate-950 my-0 mx-auto text-center mb-2 rounded-md ${
            type==="success" ? "text-green-950 bg-green-200 border-green-400" : "text-red-950 bg-red-200 border-red-300"
          }`}
        >
          {msg}
        </div>
      )}
    </>
  );
}

export default Message;
