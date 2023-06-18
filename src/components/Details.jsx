import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Details = ({exerciseDetail}) => {
  const { name, bodyPart, equipment, gifUrl, target } = exerciseDetail;
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ]
  return (
    <Stack width='100vw' sx = {{ flexDirection: { lg: 'row' }, alignItems: 'center', p: '20px', d: 'flex', justifyContent: 'space-around' }} textTransform='capitalize'>
      <img src={gifUrl} alt={name} loading = 'lazy' className='detail-image' />
      <Stack sx = {{ gap: {lg: '35px', xs: '20px'}}}>
        <Typography fontWeight='900' fontSize = '40px'>
          {name}
        </Typography>
        <Typography width='400px'>
          Exercise keep you strong. {name} {' '} is one of the best
          exercise to target your {target}. It will help you improve your mood and gain energy. 
        </Typography>
          {extraDetails.map((item) => (
            <Stack key= {item.name} direction='row' gap = '24px' alignItems='center'>
              <Button sx = {{background: '#fff2db', borderRadius: '50%', width: '80px', height: '80px'}}>
                <img src={item.icon} alt="" style= {{width: '50px', height: '50px'}} />
              </Button>
              <Typography fontWeight='300p'>
                {item.name}
              </Typography>
            </Stack>
          ))}
      </Stack>
    </Stack>
    
  )
}

export default Details