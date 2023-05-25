import React from "react";
import { createContext } from "react";

interface contextValue {
  value: string | undefined;
  setvalue: React.Dispatch<React.SetStateAction<string | undefined>>;
  resolve: (value: string) => any;
}

export const myContext = createContext({} as contextValue);

export interface myProviderProps {
  children: React.ReactNode;
}

const CalcContext = ({ children }: myProviderProps) => {
  const [value, setvalue] = React.useState<string>();

  const resolve = (value: string) => {
    let split = value.split(" ");
    let result = 0;

    const division = split.indexOf("÷");
    if (division !== -1) {
      result = +split[division - 1] / +split[division + 1];
      split[division] = `${result}`;
      split.splice(division + 1, 1);
      split.splice(division - 1, 1);
    }

    const multiplication = split.indexOf("×");
    if (multiplication !== -1) {
      result = +split[multiplication - 1] * +split[multiplication + 1];
      split[multiplication] = `${result}`;
      split.splice(multiplication - 1, 1);
      split.splice(multiplication + 1, 1);
    }

    const subtraction = split.indexOf("-");
    if (subtraction !== -1) {
      result = +split[subtraction - 1] - +split[subtraction + 1];
      split[subtraction] = `${result}`;
      split.splice(subtraction - 1, 1);
      split.splice(subtraction + 1, 1);
    }

    const addition = split.indexOf("+");
    if (addition !== -1) {
      console.log(result);
      console.log(split);
      console.log(addition);
      result = +split[addition - 1] + +split[addition + 1];
      split[addition] = `${result}`;
      split.splice(addition - 1, 1);
      split.splice(addition + 1, 1);
    }

    return result;
  };

  return (
    <myContext.Provider value={{ value, setvalue, resolve }}>
      {children}
    </myContext.Provider>
  );
};

export default CalcContext;
