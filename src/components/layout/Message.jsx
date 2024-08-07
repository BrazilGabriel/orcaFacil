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
          className={`w-full p-4 border-2 my-0 mx-auto text-center text-white bg-slate-900 mb-2 rounded-md ${
            type==="success" ? "border-emerald-600" : "border-rose-600"
          }`}
        >
          {msg}
        </div>
      )}
    </>
  );
}

export default Message;
