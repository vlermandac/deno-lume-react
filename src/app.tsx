import React from "npm:react";
import Card from "./components/card.tsx";
import BCard from "./components/bcard.tsx"
export const title = "Welcome to my page";

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-950 text-white">
    <BCard/>
   </div> 
  );
}


