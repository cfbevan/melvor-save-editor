import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Number from "../inputs/number";
import React from "react";
import { Context } from "../../StateProvider";
import { Button } from "@mui/material";

/*
 * Mastery is a nested number arrays
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

const MAX_MASTERY = 13034432;
const MAX_POOL = [
  4500000, // Woodcutting
  11500000, // Fishing
  4500000, // Firemaking
  15500000, // Cooking
  5500000, // Mining
  57500000, // Smithing
  MAX_MASTERY, // Attack
  MAX_MASTERY, // Strength
  MAX_MASTERY, // Defence
  MAX_MASTERY, // Hitpoints
  11500000, // Thieving
  12000000, // Farming
  MAX_MASTERY, // Ranged
  28500000, // Fletching
  27500000, // Crafting
  42000000, // Runecrafting
  MAX_MASTERY, // Magic
  MAX_MASTERY, // Prayer
  MAX_MASTERY, // Slayer
  15000000, // Herblore
  25500000, // Agility
  10000000, // Summoning
  5500000, // Astrology
];

const Mastery = ({ path }: { path: string }) => {
  const state = React.useContext(Context);
  const maxAll = () => {
    state!.get(path).forEach((_, i) => {
      maxSkill(i);
    });
  };
  const maxSkill = (i: number) => {
    // update pool
    state!.update(`${path}[${i}][1]`, MAX_POOL[i]);
    // update each skill
    state!
      .get(path)
      [i].slice(2)
      .forEach((_, j) => {
        state!.update(`${path}[${i}][${j + 2}]`, MAX_MASTERY);
      });
  };
  return (
    <Container>
      <Button onClick={() => maxAll()}>Max All</Button>
      {state!.get(path).map(([skillId, pool, ...xp], i) => (
        <Accordion key={skillId} TransitionProps={{ unmountOnExit: true }}>
          <AccordionSummary>{skillNames[skillId]}</AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item key={`${skillId}_max_btn`} xs={4}>
                <Button onClick={() => maxSkill(i)}>Max This Skill</Button>
              </Grid>
              <Grid item key={`${skillId}_pool`} xs={4}>
                <Number
                  label="Mastery Pool XP"
                  path={`${path}[${i}][1]`}
                  max={MAX_POOL[i]}
                />
              </Grid>
              {xp.map((_x, j) => (
                <Grid item key={`${skillId}_${j}`} xs={4}>
                  <Number
                    key={j}
                    label=""
                    path={`${path}[${i}][${j + 2}]`}
                    max={MAX_MASTERY}
                  />
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
