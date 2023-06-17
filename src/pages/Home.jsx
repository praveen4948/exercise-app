import React from "react";
import Herobanner from "../components/HeroBanner";
import SearchBar from "../components/SearchBar";
import Exersises from "../components/Exersises";
import { useState } from "react";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <div>
      <Herobanner />
      <SearchBar
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
      <Exersises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </div>
  );
};

export default Home;
