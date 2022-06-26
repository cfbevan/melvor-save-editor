import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { encryptSave, MelvorData } from "./util";
import { Context } from "./StateProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SaveLoad = () => {
  const state = React.useContext(Context);
  const handleLoad = () => {
    state?.load(loadData);
    handleClose();
  };

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [saveData, setSaveData] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setSaveData(encryptSave(state?.state as MelvorData));
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);

  const [loadData, setLoadData] = React.useState("");
  const onLoadChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setLoadData(evt.target.value);

  return (
    <div>
      <Button onClick={handleOpen}>Import</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <b>
            Remember to back up your saves. This program takes no responsibility
            for lost or damaged save data.
          </b>
          <TextField
            fullWidth
            multiline
            rows={5}
            value={loadData}
            onChange={onLoadChange}
          />
          <br />
          <Button onClick={handleLoad}>Import</Button>
        </Box>
      </Modal>

      <Button onClick={handleOpen2}>Export</Button>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField fullWidth multiline rows={5} value={saveData} disabled />
        </Box>
      </Modal>
    </div>
  );
};

export default SaveLoad;
