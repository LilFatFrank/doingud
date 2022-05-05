import { Typography } from "@mui/material";

const Error = ({ message }) => {
  return (
    <Typography
      style={{
        fontSize: "16px",
        padding: "10px"
      }}
    >
      {message || "Uh oh! Something went wrong."}
    </Typography>
  );
};

export default Error;
