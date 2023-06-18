import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {
  if(!exerciseVideos.length) return <div sx={{
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  }}>Loadig...</div>
  return (
    <Box width = '100vw' sx = {{ marginTop: { lg: '200px', xs: '20px' }}} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch <span style = {{color: 'red'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx = {{ flexDirection: { lg: 'row' }, gap: { lg: '60px', xs: '5px'} }}
      >
        {exerciseVideos?.slice(1,5).map((item, index) => (
          <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target = '_blank' key={index} className='exercise-video' rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos