import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Number from "../inputs/number";
import React from "react";
import { Context } from "../../StateProvider";

/*
 * Sills is a number array
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

const maxExp = 13034432;

const SkillXP = ({ path }: { path: string }) => {
  const state = React.useContext(Context);

  const maxAll = () => {
    skillNames.forEach((_, i) => {
      state!.update(`${path}[${i}]`, maxExp);
    });
  };

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
        <Button onClick={() => maxAll()}>Max All</Button>
        {skillNames.map((v, i) => (
          <Number
            key={i}
            label={v}
            path={`${path}[${i}]`}
            max={9007199254740991}
          />
        ))}
      </FormControl>
    </Container>
  );
};

export default SkillXP;
