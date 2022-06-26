import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Number from "../inputs/number";

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

const SkillXP = ({ path }: { path: string }) => {
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
        {skillNames.map((v, i) => (
          <Number key={i} label={v} path={`${path}[${i}]`} />
        ))}
      </FormControl>
    </Container>
  );
};

export default SkillXP;
