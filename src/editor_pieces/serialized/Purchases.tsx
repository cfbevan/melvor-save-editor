import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Number from "../inputs/number";
import chunk from "lodash-es/chunk";
import React from "react";
import { Context } from "../../StateProvider";

/*
 * Purchases is an array of numbers => category, id, quantity
 */

const shopCategory = [
  "General",
  "SkillUpgrades",
  "Slayer",
  "Gloves",
  "Skillcapes",
  "Materials",
  "GolbinRaid",
];

const Purchases = ({ path }: { path: string }) => {
  const state = React.useContext(Context);
  return (
    <Container
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <Grid container spacing={2}>
          {chunk(state!.get(path), 3).map((item, i) => (
            <Grid item xs={4} key={`${i}_${item[0]}`}>
              <Box sx={{ padding: "1em", border: "1px solid black" }}>
                <Number label="Category" path={`${path}[${3 * i}]`} />
                <Number label="Id" path={`${path}[${3 * i + 1}]`} />
                <Number label="Quantity" path={`${path}[${3 * i + 2}]`} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </FormControl>
    </Container>
  );
};

export default Purchases;
