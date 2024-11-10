import React, { useEffect, createContext, useState } from "react";
import Postmate from "postmate";

export const PortalAuthContext = createContext();

export const PortalAuth = ({ children }) => {
  const [token, setToken] = useState("");
  const [urlPortal, setUrlPortal] = useState("");

  const authWithPortal = () => {
    const handshake = new Postmate.Model({});
    handshake.then((parent) => {
      if (parent.model.token) {
        // Auth token
        setToken(parent.model.token);
        // Portal url
        if (parent.model.srcParams) {
          let srcParams;
          if (typeof parent.model.srcParams === "string") {
            srcParams = JSON.parse(parent.model.srcParams);
          } else if (typeof parent.model.srcParams === "object") {
            srcParams = parent.model.srcParams;
          }
          if (srcParams && srcParams.urlPortal) {
            setUrlPortal(srcParams.urlPortal);
          } else if (parent.model.urlPortal) {
            setUrlPortal(parent.model.urlPortal);
          }
        } else if (parent.model.urlPortal) {
          setUrlPortal(parent.model.urlPortal);
        }
      }
    });
  };

  authWithPortal();

  return (
    <PortalAuthContext.Provider value={{ token, urlPortal }}>
      {children}
    </PortalAuthContext.Provider>
  );
};

export default PortalAuth;
