import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { useParams } from 'react-router-dom'
import  { headers, fetchData } from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
      const fetchExercisesDitails = await fetchData(url, headers);
      setExerciseDetail(fetchExercisesDitails)
      console.log(fetchExercisesDitails);
    }
    fetchExerciseData();
  }, [id])
  

  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/>
      hello
    </Box>
  )
}

export default ExerciseDetails