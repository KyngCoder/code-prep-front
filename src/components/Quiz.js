import { Avatar, Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Footer from "../helper/Footer";
import Navbar from "../helper/Navbar";
import QuizBox from "../helper/QuizBox";

const Quiz = () => {
  const {level,setLevel} = useContext(AppContext)
  return (
    <>
    <Navbar />
      <div
        style={{ backgroundColor: "#EDF4FF" }}
        className="grid grid-rows-4 text-blue-800 text-xl text-center p-4 height-screen"
      >
        <div onClick={()=>setLevel('easy')}>
          <h1 className="text-blue-900 m-2 text-3xl">Easy</h1>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
            <QuizBox />
          </div>
        </div>
        <div onClick={()=>setLevel('intermediate')}>
          <h1 className="text-blue-900 m-2 text-3xl">Intermediate</h1>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
            <QuizBox />
          </div>
        </div>
        <div onClick={()=>setLevel('intermediate')}>
          <h1 className="text-blue-900 m-2 text-3xl">Advanced</h1>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
            <QuizBox />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
