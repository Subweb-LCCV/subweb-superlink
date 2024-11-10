import { useContext, useState } from "react";
import { PortalAuthContext } from "./components/PortalAuth";
import clipboard from "./assets/copy-to-clipboard.svg";
import "./App.css";

const App = () => {
  const { token, urlPortal } = useContext(PortalAuthContext);

  const handleClick = () => {
    navigator.clipboard
      .writeText(token)
      .then(() => {
        console.log("Token copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <div className="card">
        <p>Your personal user token:</p>
        <input type="text" value={token} readOnly />
        <div onClick={() => handleClick()}>
          <img
            src={clipboard}
            alt="Copy to clipboard"
            height="20px"
            className="invert"
          />
        </div>
      </div>
      <p className="read-the-docs">Portal: {urlPortal}</p>
    </>
  );
}

export default App;
