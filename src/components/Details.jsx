import React from 'react'
import { Stack } from '@mui/material'

const Details = ({exerciseDetail}) => {
  const { name, bodyPart, equipment, gifUrl, target } = exerciseDetail;
  return (
    <Stack gap ='60px' sx = {{ flexdirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading = 'lazy' className='detail-image' />
    </Stack>
    
  )
}

export default Details