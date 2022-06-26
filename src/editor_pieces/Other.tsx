import Container from "@mui/material/Container";
import Text from "./inputs/text";

const otherVars: string[] = [
  "offline",
  "titleNewsID",
  "scheduledPushNotifications",
  "username",
  "gameUpdateNotification",
  "completedTasks",
  "activeTasks",
  "plantAllSelected",
  "christmas2021PresentProgress",
  "bankTabIcons",
  "customMinibarItems",
];

const OtherVars = ({ path }: { path: string }) => {
  return (
    <Container>
      <Text label="Name" path={`${path}[3]`} />
    </Container>
  );
};

export default OtherVars;
