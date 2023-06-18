import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'


const SimilarExercises = ({execiseSimilarEquipment, execiseSimilarTarget}) => {
  return (
    <Box width='100vw' p='20px'>
      <Typography variant='h3' mb= '33px'>Exercises that target the same muscle group</Typography>

      {execiseSimilarEquipment.length ? 
        <Stack justifyContent='center' flexWrap='wrap' alignItems='center'
        sx = {{ flexDirection: { lg: 'row' }, gap: { lg: '20px', xs: '5px'} }} mb='203px'
      >
        {execiseSimilarEquipment?.slice(0, 8).map((item, index) => (
          <ExerciseCard exercise = {item}/>
        ))}
      </Stack>
      : <Loader/>}

      <Typography variant='h3' mb='33px'>Exercises that usr the same equipment</Typography>

      {execiseSimilarTarget.length ? 
        <Stack justifyContent='center' flexWrap='wrap' alignItems='center'
        sx = {{ flexDirection: { lg: 'row' }, gap: { lg: '20px', xs: '5px'} }}
      >
        {execiseSimilarTarget?.slice(0, 8).map((item, index) => (
          <ExerciseCard exercise = {item}/>
        ))}
      </Stack>
      : <Loader/>}
    </Box>
  )
}

export default SimilarExercises