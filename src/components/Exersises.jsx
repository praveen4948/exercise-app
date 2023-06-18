import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { headers, fetchData } from "../utils/fetchData";
import ExesciseCard from "./ExerciseCard";

const Exersises = ({ exercises, setExercises, bodyPart, setBodyPart }) => {
  const exercisePerPage = 12             ;
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (e, value) => {
    setCurrentPage(value);
  };

  const lastExerciseOfCurrentPage = currentPage * exercisePerPage;
  const firstExerciseOfCurrentPage =
    lastExerciseOfCurrentPage - exercisePerPage;

  const currentExercisesToShow = exercises.slice(firstExerciseOfCurrentPage, lastExerciseOfCurrentPage)

  useEffect(() => {
    const fetchBodyPartExercises = async () =>{
      let exercisesData =[]
      if (bodyPart === 'all'){
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, headers)
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, headers)
      }
      setExercises(exercisesData)
      setCurrentPage(1)
    }
    fetchBodyPartExercises();
  }, [bodyPart])
  

  return (
    <Box
      width="100vw"
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing result...
      </Typography>
      <Stack
        direction="row"
        sx={{ lg: "110px", xs: "50px" }}
        flexWrap="wrap"
        justifyContent="center"
        gap="20px"
      >
        {currentExercisesToShow.map((exercise, index) => (
          <ExesciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="round"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exersises;
