import { Box, Typography } from "@mui/material";
import "./Content.scss";

const Content = () => {
  return (
    <Box component={"div"} className="content">
      <Typography variant="h1">lazier.com</Typography>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        No need to sign up.
        <br />
        Just connect your wallet and share your collection.
      </Typography>
    </Box>
  );
};

export default Content;
