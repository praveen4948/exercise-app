import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box mt={4} sx={{ position: "static" }}>
      <ScrollMenu>
        {/* stack mein bhar ke flexWrap lagado */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "40px",
          }}
        >
          {data.map((item) => (
            <BodyPart
              key={item.id || item}
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ))}
        </Box>
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
