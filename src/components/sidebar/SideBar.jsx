// import React, { useState } from "react";
// import "./SideBar.css";
// import { IoMenuSharp } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";
// import { FaRegMessage } from "react-icons/fa6";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { FaHistory } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";
// import { Context } from "../../context/Context";

// const SideBar = () => {
  
//   const [extended, setextended] = useState(false);
//   const { onSent, prevPrompts, setRecentPrompt } = useState(Context);

//   const loadPrompt = async (prompt) => {
//     setRecentPrompt(prompt);
//     onSent(prompt);
//   };

//   return (
//     <div>
//       <div className="sidebar">
//         <div className="top">
//           <IoMenuSharp
//             className="menu"
//             onClick={() => setextended((prev) => !prev)}
//           />
//           <div className="new-chat">
//             <FaPlus className="img" />
//             {extended ? <p>New Chat</p> : null}
//           </div>
//           {extended ? (
//             <div className="recent">
//               <p className="recent-title">Recent</p>
//               {prevPrompts.map((item, index) => {
//                 return (
//                   <div
//                     onClick={() => loadPrompt(item)}
//                     className="recent-entry"
//                     key={index}
//                   >
//                     <FaRegMessage className="img" />
//                     <p>{item.slice(0, 18)}...</p>
//                   </div>
//                 );
//               })}
//             </div>
//           ) : null}
//         </div>
//         <div className="bottom">
//           <div className="bottom-item recent-entry">
//             <FaRegQuestionCircle className="img" />
//             {extended ? <p>Help</p> : null}
//           </div>

//           <div className="bottom-item recent-entry">
//             <FaHistory className="img" />
//             {extended ? <p>Activity</p> : null}
//           </div>

//           <div className="bottom-item recent-entry">
//             <IoMdSettings className="img" />
//             {extended ? <p>Setting</p> : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;




import React, { useState, useContext } from "react";
import "./SideBar.css";
import { IoMenuSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);

  // Use the context correctly
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="top">
          <IoMenuSharp
            className="menu"
            onClick={() => setExtended((prev) => !prev)}
          />
          <div onClick={()=>newChat()} className="new-chat">
            <FaPlus className="img" />
            {extended && <p>New Chat</p>}
          </div>
          {extended && (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item, index) => (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <FaRegMessage className="img" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <FaRegQuestionCircle className="img" />
            {extended && <p>Help</p>}
          </div>
          <div className="bottom-item recent-entry">
            <FaHistory className="img" />
            {extended && <p>Activity</p>}
          </div>
          <div className="bottom-item recent-entry">
            <IoMdSettings className="img" />
            {extended && <p>Setting</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
