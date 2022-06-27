import { TextField } from "@mui/material";
import React from "react";
import { Context } from "../../StateProvider";

const Number = ({
  label,
  path,
  max,
}: {
  label: string;
  path: string;
  max?: number;
}) => {
  const state = React.useContext(Context);
  return (
    <TextField
      label={label}
      type="number"
      inputProps={{
        min: 0,
        max: max || Infinity,
      }}
      value={state!.get(path)}
      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
        state?.update(path, evt.target.value)
      }
    />
  );
};

export default Number;
