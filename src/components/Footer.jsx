import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box backgroundColor='#2eb895' mt='50px' width ='100vw' height='70px' alignItems='center' display='flex' justifyContent='center'>
      <Stack direction='row'>
        <img src={logo} alt="" height= '50px' width='300px' />
        <Typography mt='21px' ml='10px'>@ 2023-24</Typography>
      </Stack>
    </Box>
  )
}

export default Footer