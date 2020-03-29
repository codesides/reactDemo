import React from "react";
import { useLocation } from "react-router-dom";
const NotFound = () => {
  let location = useLocation();
  return (
    <h3>
      404页面 <code>not found for {location.pathname}</code>
    </h3>
  );
};

export default NotFound;
