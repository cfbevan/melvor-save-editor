import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Number from "../inputs/number";
import ItemID from "../inputs/itemID";
import chunk from "lodash-es/chunk";
import React from "react";
import { Context } from "../../StateProvider";

/*
 * Bank is an array of arrays of format id, quantity, tab
 */

const Bank = ({ path }: { path: string }) => {
  const state = React.useContext(Context);
  const addItem = () => {
    const newBank = [0, 1, 0, ...state!.get(path)];
    state?.update(path, newBank);
  };
  return (
    <Container>
      <Button onClick={addItem}>Add Item</Button>
      <Divider />
      <Grid container spacing={2}>
        {chunk(state!.get(path), 3).map((item, i) => (
          <Grid item xs={4} key={`${i}_${item[0]}`}>
            <Box sx={{ padding: "1em", border: "1px solid black" }}>
              <ItemID path={`${path}[${3 * i}]`} />
              <Number label="Quantity" path={`${path}[${3 * i + 1}]`} />
              <Number label="Slot" path={`${path}[${3 * i + 2}]`} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Bank;
