import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
      width= '500px'
    >
      <Typography color="#FF2525" fontWeight="600" fontSize="25px">
        The GunGun Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Check out the most effective exercises
      </Typography>
      <Link to= '/exercise'> 
      <Button
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            border: 0,
            borderRadius: 1,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            height: 38,
            padding: "0 30px",
          }}
        >
          Expoler Exercises
        </Button>
      </Link>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
      <Typography 
        fontWeight={600}
        color="#ff2626"
        sx = {{
          opacity: 0.2,
          fontSize: {lg: '295px', xs: '100px'}
        }}
        
      >
        Exercises
      </Typography>
    </Box>
  );
};

export default HeroBanner;
