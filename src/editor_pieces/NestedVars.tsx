import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Mastery from "./nested/Mastery";

const nestedVars: string[] = [
  "newFarmingAreas",
  "MASTERY",
  "golbinRaidHistory",
];

const NestedVars = ({ path }: { path: string }) => {
  return (
    <Container>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary>Mastery</AccordionSummary>
        <AccordionDetails>
          <Mastery path={`${path}[1]`} />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default NestedVars;
