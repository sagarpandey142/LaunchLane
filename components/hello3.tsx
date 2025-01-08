// Inside hello3 component
"use client";

import { useEffect } from "react";

const Hello3 = () => {
  useEffect(() => {
    console.log("This runs only on the client side.");
  }, []);

  return <div>Hello, Client-Side Rendering!</div>;
};

export default Hello3;
