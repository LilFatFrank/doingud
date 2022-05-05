import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const theme = createTheme({
  typography: {
    allVariants: {
      color: "#25395c"
    }
  }
});

export const styles = makeStyles({
  appBar: {
    boxShadow: "none !important",
    background: "#fff !important",
    borderBottom: "1px solid #25395c"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "var(--white)",
  border: "2px solid var(--primary)",
  padding: 20
};
