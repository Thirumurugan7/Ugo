{
  /**import React from "react";

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-bold text-slate-900">Web3 YouTube Clone</h1>
      <h3 className="text-2xl mt-8 text-slate-900">
        Next.js, TailwindCSS, Solidity, IPFS, The Graph and Polygon
      </h3>
    </div>
  );
} */
}

import React from "react";
import Landing from "./landing";
import Navbar from "./components/Navbar";

export default function index() {
  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
}
