import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        imageUrl={"/shudy.png"}
      />
     
      <Biography imageUrl={"/work.jpg"} />
      <Departments />
      
    </>
  );
};

export default Home;