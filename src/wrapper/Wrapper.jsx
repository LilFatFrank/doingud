import { useContext, memo } from "react";
import { Container } from "../components";
import { AppContext } from "../context/Context";
import { Toolbar } from "@mui/material";
import { Header } from "../components";
import Content from "./content/Content";

const Wrapper = () => {
  const { userNFTs, account, address } = useContext(AppContext);

  return (
    <>
      <Header />
      <Toolbar style={{ height: "80px" }} />
      {!(account || address) ? <Content /> : <Container nfts={userNFTs} />}
    </>
  );
};

export default memo(Wrapper);
