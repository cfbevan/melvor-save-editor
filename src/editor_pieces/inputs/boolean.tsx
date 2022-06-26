import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { Context } from "../../StateProvider";

const Boolean = ({ label, path }: { label: string; path: string }) => {
  const state = React.useContext(Context);
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={state!.get(path) === 1}
            onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
              state!.update(path, evt.target.checked ? 1 : 0)
            }
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default Boolean;
