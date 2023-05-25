import { Box, OutlinedInput, Stack } from "@mui/material";
import React, { useContext } from "react";
import Keys from "../keys";
import Operators from "../operators";
import { myContext } from "../../context/calcContext";

const Cauculator = () => {
  const { value } = useContext(myContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        p: 2,
        mt: 5,
        width: "50%",
        gap: 2,
      }}
    >
      <Box>
        <OutlinedInput
          placeholder="1 + 1 = 2"
          value={value}
          onChange={(value) => value}
        />
        <Stack
          direction="column-reverse"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Keys key1={","} key2={0} key3={"="} isResolve />
          <Keys key1={1} key2={2} key3={3} />
          <Keys key1={4} key2={5} key3={6} />
          <Keys key1={7} key2={8} key3={9} />
        </Stack>
      </Box>
      <Box>
        <Operators key1={"DEL"} key2={"÷"} key3={"×"} key4={"-"} key5={"+"} />
      </Box>
    </Box>
  );
};

export default Cauculator;
