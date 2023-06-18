import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'


const SimilarExercises = ({execiseSimilarEquipment, execiseSimilarTarget}) => {
  return (
    <Box width='100vw' p='20px'>
      <Typography variant='h3' mb= '33px'>Exercises that target the same muscle group</Typography>
      <Stack justifyContent='center' flexWrap='wrap' alignItems='center'
        sx = {{ flexDirection: { lg: 'row' }, gap: { lg: '60px', xs: '5px'} }} mb='203px'
      >
        {execiseSimilarEquipment?.slice(0, 4).map((item, index) => (
          <ExerciseCard exercise = {item}/>
        ))}
      </Stack>

      <Typography variant='h3' mb='33px'>Exercises that usr the same equipment</Typography>
      <Stack justifyContent='center' flexWrap='wrap' alignItems='center'
        sx = {{ flexDirection: { lg: 'row' }, gap: { lg: '60px', xs: '5px'} }}
      >
        {execiseSimilarEquipment?.slice(0, 4).map((item, index) => (
          <ExerciseCard exercise = {item}/>
        ))}
      </Stack>
    </Box>
  )
}

export default SimilarExercises