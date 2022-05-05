import { Box } from "@mui/material";
import "./Container.scss";
import { Card, Button } from "..";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import { Loader, Error } from "..";

const Container = ({ nfts }) => {
  const { loadingNFTs, error, allReceived, updatePagination } =
    useContext(AppContext);

  const nftImage = (nft) => {
    return nft?.image_url || nft?.image_preview_url || nft?.image_thumbnail_url;
  };

  return (
    <>
      <Box component="div" className="nft-collection">
        {nfts?.length ? (
          <>
            {nfts.map((nft) => (
              <Card
                src={nftImage(nft)}
                alt={nft?.name}
                name={nft?.name}
                description={nft?.description}
                key={`${nft?.asset_contract?.address}-${nft?.id}`}
              />
            ))}
          </>
        ) : !loadingNFTs ? (
          <Error message={"No NFTs found."} />
        ) : null}
      </Box>
      <Box component="div" className="extras">
        {loadingNFTs ? <Loader /> : null}
        {error ? <Error /> : null}
        {nfts?.length && !allReceived ? (
          <Button type={"secondary"} onClick={() => updatePagination()}>
            Load More
          </Button>
        ) : null}
      </Box>
    </>
  );
};

export default Container;
