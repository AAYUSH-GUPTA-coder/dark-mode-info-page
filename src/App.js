import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  function toggleDarkModefun() {
    setDarkMode((prevValue) => !prevValue);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkModefun} />
      <Main darkMode={darkMode} />
    </div>
  );
}
