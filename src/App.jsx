import { useContext } from "react";
import { PortalAuthContext } from "./components/PortalAuth";
import "./App.css";

const App = () => {
  const { token, urlPortal } = useContext(PortalAuthContext);

  return (
    <>
      <div className="card">
        <p>Your personal user token:</p>
        <input type="text" value={token} />
      </div>
      <p className="read-the-docs">Portal: {urlPortal}</p>
    </>
  );
}

export default App;
