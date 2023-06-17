import React from "react";
import { Stack, Typography } from "@mui/material";
import icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart,exercises, setBodyPart }) => {
  return (
    <Stack
      type='botton'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625': '',
        backgroundColor: '#fff',
        borderBottomLeftRedius: '20px',
        width: '200px', height: '200px', curson: 'pointer',
        gap: '10px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 180, behavior: 'smooth'})
      }}
    >
      <img src={icon} alt="dunbbell"
        style={{
          width: '40px', height: '40px'
        }}
      />
      <Typography 
        fontSize="18px" fontWeight='bold' color='#3A1212' textTransform='capitalize' mt='30px'
      >{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
