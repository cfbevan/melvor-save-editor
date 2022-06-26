import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Bank from "./serialized/Bank";
import Pets from "./serialized/Pets";
import SkillXP from "./serialized/SkillXP";
import Purchases from "./serialized/Purchases";

const serialVars: string[] = [
  "bank",
  "glovesTracker",
  "herbloreBonuses",
  "shopItemsPurchased",
  "SETTINGS",
  "petUnlocked",
  "skillsUnlocked",
  "skillXP",
  "dungeonCompleteCount",
  "lockedItems",
  "itemsAlreadyFound",
];

const SerializedVars = ({ path }: { path: string }) => {
  return (
    <Container>
      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary>Bank</AccordionSummary>
        <AccordionDetails>
          <Bank path={`${path}[0]`} />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary>Shop Item Purchased</AccordionSummary>
        <AccordionDetails>
          <Purchases path={`${path}[3]`} />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary>Pets</AccordionSummary>
        <AccordionDetails>
          <Pets path={`${path}[5]`} />
        </AccordionDetails>
      </Accordion>

      <Accordion TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary>Skill XP</AccordionSummary>
        <AccordionDetails>
          <SkillXP path={`${path}[7]`} />
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default SerializedVars;
