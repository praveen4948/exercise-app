import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { useParams } from 'react-router-dom'
import  { headers, fetchData, youtubeHeaders } from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [execiseSimilarEquipment, setExeciseSimilarEquipment] = useState([])
  const [execiseSimilarTarget, setExeciseSimilarTarget] = useState([])
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseUri = `https://exercisedb.p.rapidapi.com`;
      const youtubeUri = 'https://youtube-search-and-download.p.rapidapi.com'
      const fetchExercisesDitails = await fetchData(`${exerciseUri}/exercises/exercise/${id}`, headers);
      setExerciseDetail(fetchExercisesDitails)
      const fetchExerciseVideos = await fetchData(`${youtubeUri}/search?query=${fetchExercisesDitails.name}`, youtubeHeaders)
      setExerciseVideos(fetchExerciseVideos.contents);
      const fetchSimilarTargetExercises = await fetchData(`${exerciseUri}/exercises/target/${fetchExercisesDitails.target}`, headers)
      const fetchSimilarEquipmentExercises = await fetchData(`${exerciseUri}/exercises/equipment/${fetchExercisesDitails.equipment}`, headers)
      setExeciseSimilarEquipment(fetchSimilarEquipmentExercises)
      setExeciseSimilarTarget(fetchSimilarTargetExercises)
    }
    fetchExerciseData();
  }, [id])
  

  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}/>
      <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises execiseSimilarEquipment = {execiseSimilarEquipment} execiseSimilarTarget = {execiseSimilarTarget} />
    </Box>
  )
}

export default ExerciseDetails