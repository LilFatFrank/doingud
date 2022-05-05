import "./Card.scss";
import { Typography } from "@mui/material";

const Card = ({ src, alt, name, description, onClick }) => {
  return (
    <div className="asset-card" onClick={onClick}>
      <img
        src={src}
        alt={alt || "collection"}
        style={{ height: "300px", width: "100%", objectFit: "contain" }}
      />
      <Typography variant="h6" className="asset-name">
        {name}
      </Typography>
      <Typography variant="body2" className="asset-description">
        {description}
      </Typography>
    </div>
  );
};

export default Card;
