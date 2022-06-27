import { Container } from "@mui/material";
import Number from "./inputs/number";

const numberVars: string[] = [
  "firstTime",
  "nameChanges",
  "gp",
  "defaultPageOnLoad",
  "levelUpScreen",
  "attackStyle",
  "showItemNotify",
  "myBankVersion",
  "buyQty",
  "sellQty",
  "accountGameVersion",
  "formatNumberSetting",
  "saveTimestamp",
  "currentGamemode",
  "raidCoins",
  "tutorialProgress",
  "christmas2021Progress",
];

const maxValues: number[] = [
  1,
  Infinity,
  9007199254740991,
  13,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  3,
  Infinity,
  21,
  Infinity,
];

const Numbers = ({ path }: { path: string }) => {
  return (
    <Container
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      {numberVars.map((v, i) => (
        <Number key={i} label={v} path={`${path}[${i}]`} />
      ))}
    </Container>
  );
};

export default Numbers;
