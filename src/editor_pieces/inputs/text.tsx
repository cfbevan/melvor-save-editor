import { TextField } from "@mui/material";
import React from "react";
import { Context } from "../../StateProvider";

const Text = ({ label, path }: { label: string; path: string }) => {
  const state = React.useContext(Context);
  return (
    <TextField
      label={label}
      value={state!.get(path)}
      onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
        state?.update(path, evt.target.value)
      }
    />
  );
};

export default Text;
