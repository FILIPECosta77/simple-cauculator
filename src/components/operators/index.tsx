import { Button, Stack } from "@mui/material";
import React from "react";
import { myContext } from "../../context/calcContext";

interface iProps {
  key1: string;
  key2: string;
  key3: string;
  key4: string;
  key5: string;
}

const Operators = ({ key1, key2, key3, key4, key5 }: iProps) => {
  const { setvalue, value } = React.useContext(myContext);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Button
        variant="contained"
        sx={{
          width: 60,
          height: 60,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
        }}
        onClick={() =>
          setvalue(value ? value.toString().substring(0, value.length - 1) : "")
        }
      >
        {key1}
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 60,
          height: 60,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
          fontSize: 20,
        }}
        onClick={() => setvalue(value ? value + ` ${key2} ` : key2)}
      >
        {key2}
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 60,
          height: 60,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
          fontSize: 20,
        }}
        onClick={() => setvalue(value ? value + ` ${key3} ` : key3)}
      >
        {key3}
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 60,
          height: 60,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
          fontSize: 20,
        }}
        onClick={() => setvalue(value ? value + ` ${key4} ` : key4)}
      >
        {key4}
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 60,
          height: 60,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
          fontSize: 20,
        }}
        onClick={() => setvalue(value ? value + ` ${key5} ` : key5)}
      >
        {key5}
      </Button>
    </Stack>
  );
};

export default Operators;
