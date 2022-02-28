import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { CustomRadioButton } from "../../../shared";
import { choice } from "../../../shared/constants";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600,
    backgroundColor: "#fad3e0",
    margin: "2px",
    border: "solid",
    borderColor: "#801313",
    borderWidth: "5px",
    maxHeight: 240,
  },
  radioStyle: {
    "&.MuiFormControl-root": {
      width: "100%",
    },
  },
  labelStyle: {
    "&.MuiFormControlLabel-root": {
      marginRight: "25%",
    },
  },
  questionStyle: {
    maxHeight: 91,
    minHeight: 91,
    overflow: "auto",
  },
  cardActionStyle: {
    justifyContent: "left",
    backgroundColor: "#fce9ef",
    borderTop: "solid",
    borderTopColor: "#801313",
    borderTopWidth: "5px",
  },
}));

const QuestionCard = ({ index, data, onChangeValue, answers }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea style={{ justifyContent: "left" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Question-{index + 1}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            className={classes.questionStyle}
          >
            {data.statement}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionStyle}>
        <CustomRadioButton
          options={choice}
          value={answers[data.id]}
          handleChange={(value) => onChangeValue(data.id, value)}
          formClassName={classes.radioStyle}
          labelClassName={classes.labelStyle}
        />
      </CardActions>
    </Card>
  );
};
export default QuestionCard;
