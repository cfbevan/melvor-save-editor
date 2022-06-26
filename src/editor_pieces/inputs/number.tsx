import { TextField } from "@mui/material";
import React from "react";
import { Context } from "../../StateProvider";

const Number = ({ label, path }: { label: string; path: string }) => {
  const state = React.useContext(Context);
  return (
    <TextField
      label={label}
      type="number"
      value={state!.get(path)}
      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
        state?.update(path, evt.target.value)
      }
    />
  );
};

export default Number;
