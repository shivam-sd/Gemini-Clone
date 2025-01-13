import React from "react";
import SideBar from "./components/sidebar/SideBar";
import Main from "./components/main/Main";
import ContextProvider from "./context/Context";

const App = () => {
  return (
    <ContextProvider>
      <SideBar />
      <Main />
    </ContextProvider>
  );
};

export default App;
