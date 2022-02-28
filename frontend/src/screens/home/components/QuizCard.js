import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { CustomButton } from "../../../shared";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    maxWidth: 200,
    backgroundColor: "#fad3e0",
    border: "solid",
    borderColor: "#801313",
    textAlign: "center",
  },
  cardContentStyle: {
    justifyContent: "center",
    backgroundColor: "#fce9ef",
    borderTop: "solid",
    borderTopColor: "#801313",
  },
}));

export default function MultiActionAreaCard({ title, handleClick }) {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardContentStyle}>
        <CustomButton
          handleClick={handleClick}
          type="Submit"
          label="Play Quiz"
        />
      </CardActions>
    </Card>
  );
}
