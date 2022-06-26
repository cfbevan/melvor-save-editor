import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Number from "../inputs/number";
import React from "react";
import { Context } from "../../StateProvider";

/*
 * Mastery is a nested number arrays
 * ns[1]
 */

const skillNames = [
  "Woodcutting",
  "Fishing",
  "Firemaking",
  "Cooking",
  "Mining",
  "Smithing",
  "Attack",
  "Strength",
  "Defence",
  "Hitpoints",
  "Thieving",
  "Farming",
  "Ranged",
  "Fletching",
  "Crafting",
  "Runecrafting",
  "Magic",
  "Prayer",
  "Slayer",
  "Herblore",
  "Agility",
  "Summoning",
  "Astrology",
];

const Mastery = ({ path }: { path: string }) => {
  const state = React.useContext(Context);
  return (
    <Container>
      {state!.get(path).map(([skillId, pool, ...xp], i) => (
        <Accordion key={skillId} TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary>{skillNames[skillId]}</AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item key={`${skillId}_pool`} xs={4}>
                <Number label="Mastery Pool XP" path={`${path}[${i}][1]`} />
              </Grid>
              {xp.map((_x, j) => (
                <Grid item key={`${skillId}_${j}`} xs={4}>
                  <Number key={j} label="" path={`${path}[${i}][${j + 2}]`} />
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Mastery;
