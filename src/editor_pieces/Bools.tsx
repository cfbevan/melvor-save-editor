import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Boolean from "./inputs/boolean";

const boolVars: string[] = [
  "ignoreBankFull",
  "autoRestartDungeon",
  "autoSaveCloud",
  "darkMode",
  "showGPNotify",
  "enableAccessibility",
  "showEnemySkillLevels",
  "confirmationOnClose",
  "showCommas",
  "showVirtualLevels",
  "showSaleNotifications",
  "showShopNotifications",
  "pauseOfflineActions",
  "showCombatMinibar",
  "showCombatMinibarCombat",
  "showSkillMinibar",
  "disableAds",
  "useCombinationRunes",
  "firstTimeLoad",
  "autoSlayer",
  "tutorialComplete",
];

const Bools = ({ path }: { path: string }) => {
  return (
    <Container sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        {boolVars.map((v, i) => (
          <Boolean key={i} label={v} path={`${path}[${i}]`} />
        ))}
      </FormControl>
    </Container>
  );
};

export default Bools;
