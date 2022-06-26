import React from "react";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Numbers from "./editor_pieces/Numbers";
import Bools from "./editor_pieces/Bools";
import SerializedVars from "./editor_pieces/SerializedVars";
import NestedVars from "./editor_pieces/NestedVars";
import { Context } from "./StateProvider";
import OtherVars from "./editor_pieces/Other";

const Editor = () => {
  const state = React.useContext(Context);
  return (
    <Container>
      {state?.state && (
        <div>
          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary>Number Values</AccordionSummary>
            <AccordionDetails>
              <Numbers path="n" />
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary>Boolean Values</AccordionSummary>
            <AccordionDetails>
              <Bools path="b" />
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary>Serialized Vars</AccordionSummary>
            <AccordionDetails>
              <SerializedVars path="s" />
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary>Nested Vars</AccordionSummary>
            <AccordionDetails>
              <NestedVars path="ns" />
            </AccordionDetails>
          </Accordion>

          <Accordion TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary>Other Vars</AccordionSummary>
            <AccordionDetails>
              <OtherVars path="o" />
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </Container>
  );
};

export default Editor;
