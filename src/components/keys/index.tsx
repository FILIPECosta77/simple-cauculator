import { Button, Stack } from "@mui/material";
import React from "react";
import { myContext } from "../../context/calcContext";

interface iProps {
  key1: string | number;
  key2: string | number;
  key3: string | number;
  isResolve?: boolean;
}

const Keys = ({ key1, key2, key3, isResolve }: iProps) => {
  const { setvalue, value, resolve } = React.useContext(myContext);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
    >
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: 74,
          height: 70,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
          fontSize: 20,
        }}
        onClick={() =>
          setvalue(value ? value + key1.toString() : key1.toString())
        }
      >
        {key1}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: 74,
          height: 70,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
          fontSize: 20,
        }}
        onClick={() =>
          setvalue(value ? value + key2.toString() : key2.toString())
        }
      >
        {key2}
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: 74,
          height: 70,
          borderRadius: 0,
          borderStyle: "none",
          boxShadow: "none",
          fontSize: 20,
        }}
        onClick={() =>
          isResolve
            ? setvalue(resolve(value || ""))
            : setvalue(value ? value + key3.toString() : key3.toString())
        }
      >
        {key3}
      </Button>
    </Stack>
  );
};

export default Keys;
