import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { styles } from "../../style/styles";
import "./Header.scss";
import { AppContext } from "../../context/Context";
import { Button } from "..";
import { Modal } from "..";

const Header = () => {
  const classes = styles();
  const { active, account, connect, userNFTs } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("");

  const wallet = () => {
    setShowModal(false);
    setType("");
    if (window.ethereum.chainId === "0x1") connect();
    else {
      setShowModal(true);
      setType("switch");
    }
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton style={{ cursor: "default" }}>
            <Box component="div" className="title-text">
              <Typography variant="h6">
                lazier.com
                <Typography variant="body2">lazy.com but better</Typography>
              </Typography>
            </Box>
          </IconButton>
          <Box component="div" className="buttons">
            {window.ethereum ? (
              <Button onClick={active ? undefined : wallet}>
                {active ? `${account.slice(0, 8)}...` : "Connect"}
              </Button>
            ) : null}
            {active && userNFTs?.length ? (
              <Button onClick={() => setShowModal(true)} type="secondary">
                Share
              </Button>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
      <Modal view={showModal} close={() => setShowModal(false)} type={type} />
    </>
  );
};

export default Header;
