import React, { useContext } from "react";
import "./Main.css";
import user from "../../assets/user.jpg";
import { FaRegCompass } from "react-icons/fa";
import { FaRegLightbulb, FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    setInput,
    input,
    showResult,
    recentPrompt,
    resultData,
    loading,
  } = useContext(Context);

  const handleSend = () => {
    if (input.trim()) {
      onSent(input);
    } else {
      alert("Please enter a prompt before sending.");
    }
  };

  return (
    <div className="main">
      {/* Navigation Section */}
      <div className="nav">
        <p>Gemini</p>
        <img src={user} alt="User Avatar" />
      </div>

      {/* Main Container */}
      <div className="main-container">
        {!showResult ? (
          <>
            {/* Greeting Section */}
            <div className="greet">
              <p>
                <span>Hello, Shivam.</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>

            {/* Cards Section */}
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                <FaRegCompass className="img" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <FaRegLightbulb className="img" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <FaRegMessage className="img" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <FaCode className="img" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {/* Result Section */}
            <div className="result-title">
              <img src={user} alt="User Avatar" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <RiGeminiFill className="img" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
              )}
            </div>
          </div>
        )}

        {/* Bottom Input Section */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <FcGallery className="img" />
              <FaMicrophone className="img" />
              {input ? <IoSend className="img" onClick={handleSend} /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
