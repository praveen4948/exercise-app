import React from "react";
import { useState, useEffect } from "react";
import { Stack, Box, Typography, TextField, Button } from "@mui/material";
import { headers, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchBar = ({bodyPart, setBodyPart, exercises, setExercises}) => {
  const [search, setsearch] = useState('')
  const [bodyParts, setbodyParts] = useState([])
  // const [exercises, setExercises] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartssData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', headers
      )
      setbodyParts(['all', ...bodyPartssData])
      console.log(bodyPartssData)
    }
    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, headers)

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      // setExercises(exercisesData)
      console.log(searchedExercises)
      setExercises(searchedExercises)
    }
  }
  return (
    <Stack width="100vw" justifyContent="center" alignItems="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises <br /> You Should Know
      </Typography>
      <Box
        sx={{
          width: 600,
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ marginRight: "10px" }}
          fullWidth
          label="Search Exercises"
          id="fullWidth"
          value={search}
          onChange={(e) => setsearch(e.target.value.toLowerCase())}
        />
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            border: 0,
            borderRadius: 1,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            height: '57px',
            padding: "0 30px",
          }}
          onClick = {handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchBar;
