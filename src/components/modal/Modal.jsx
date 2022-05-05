import { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton
} from "react-share";
import "./Modal.scss";
import { Button } from "..";
import { Typography } from "@mui/material";

const Modal = ({ close, view, type }) => {
  const url = window.location.href;
  const [copySuccess, setCopySuccess] = useState(false);

  return view ? (
    <div className={`modal`}>
      <div className={`modal-content`}>
        {type === "switch" ? (
          <Typography>
            Please switch to the Ethereum mainnet and connect wallet.
          </Typography>
        ) : (
          <>
            <div className={`share-icons`}>
              <TwitterShareButton
                url={url}
                hashtags={[`mynfts`, `collage`, `awesome`]}
              >
                <TwitterIcon />
              </TwitterShareButton>
              <FacebookShareButton
                url={url}
                quote={`Hey, check out this collage of my nfts on mynfts.show.`}
              >
                <FacebookIcon />
              </FacebookShareButton>
              {!copySuccess ? (
                <img
                  src={`assets/svgs/copy.svg`}
                  alt={`copy`}
                  width={64}
                  height={64}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigator.clipboard.writeText(url);
                    setCopySuccess(true);
                    setTimeout(() => setCopySuccess(false), 1000);
                  }}
                />
              ) : (
                <img
                  src={"assets/svgs/circle.svg"}
                  alt={"Success"}
                  width={64}
                  height={64}
                />
              )}
            </div>
          </>
        )}
        <div>
          <Button onClick={close} type="secondary">
            {type === "switch" ? "Okay" : "Close"}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
