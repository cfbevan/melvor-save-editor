import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Boolean from "../inputs/boolean";
import React from "react";
import { Context } from "../../StateProvider";
import Button from "@mui/material/Button";

/*
 * Pets is a boolean array
 * s[6]
 */

const petNames = [
  "Beavis",
  "Pudding Duckie",
  "Pyro",
  "Cris",
  "Cool Rock",
  "Puff, the Baby Dragon",
  "Snek",
  "Larry, the Lonely Lizard",
  "Quill",
  "Caaarrrlll",
  "Gunter",
  "Gronk",
  "Bruce",
  "Lil Ron",
  "Leonardo",
  "Finn, the Cat",
  "Marahute",
  "Salem",
  "Monk-ey",
  "Asura",
  "Golden Golbin",
  "Ty",
  "Peri",
  "Otto",
  "Ripper the Reindeer",
  "Chick",
  "Zarrah",
  "Chio",
  "Bouncing Bob",
  "Rosey",
  "Jelly Jim",
  "Ayyden",
  "Arctic Yeti",
  "Harley",
  "Mac",
  "Singe",
  "Aquarias",
  "Norman",
  "Erran",
  "Ren",
  "Pablo",
  "Sam",
  "Jerry the Giraffe",
  "Preston the Platypus",
  "Tim the Wolf",
  "Mark",
  "Bone",
  "Astro",
  "Festive Cool Rock",
  "Festive Chio",
];

const Pets = ({ path }: { path: string }) => {
  const state = React.useContext(Context);
  const toggleAll = (on: 0 | 1) => {
    petNames.forEach((_, i) => {
      state!.update(`${path}[${i}]`, on);
    });
  };

  return (
    <Container sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <Button onClick={() => toggleAll(1)}>Add All</Button>
        <Button onClick={() => toggleAll(0)}>Remove All</Button>
        {petNames.map((v, i) => (
          <Boolean key={i} label={v} path={`${path}[${i}]`} />
        ))}
      </FormControl>
    </Container>
  );
};

export default Pets;
