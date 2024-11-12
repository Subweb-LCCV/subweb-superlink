import { useContext } from "react";
import { PortalAuthContext } from "./components/PortalAuth";
import "./App.css";

const App = () => {
  const { token, urlPortal } = useContext(PortalAuthContext);

  return (
    <>
      <div className="card">
        <p>Your personal user token:</p>
        <textarea name="sbwb-tkn" value={token} rows="6" cols="50" className="transparent"></textarea>
      </div>
      <p className="read-the-docs">Portal: {urlPortal}</p>
    </>
  );
}

export default App;
