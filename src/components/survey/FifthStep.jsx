import { Box, Button, Typography } from "@mui/material";
import dog_outdoors from "/src/img/dog_outdoors.jpg";

const FifthStep = () => {
  return (
    <Box position={"relative"} textAlign={"center"}>
      <img
        src={dog_outdoors}
        style={{
          display: "block",
          margin: "auto",
          width: "600px",
          borderRadius: "4px",
        }}
      />
      <Box
        position="absolute"
        bottom="15%"
        right="60%"
        width="70%"
        sx={{ borderRadius: "4px", backgroundColor: "#fff" }}
      >
        <Typography
          component="h1"
          variant="h4"
          pt={2}
          sx={{
            color: "#4F4A45",
          }}
        >
          Poznaj Lemona!
        </Typography>
        <Typography
          variant="body1"
          pb={2}
          paddingInline={2}
          sx={{
            color: "#4F4A45",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
          velit minima obcaecati suscipit temporibus ducimus, veritatis earum
          odio minus laborum.
        </Typography>
        <Button sx={{ marginBottom: 2 }}> DOWIEDZ SIĘ WIĘCEJ</Button>
      </Box>
    </Box>
  );
};

export default FifthStep;
