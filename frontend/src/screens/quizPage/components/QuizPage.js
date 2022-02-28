import * as React from "react";
import { Grid } from "@mui/material";
import { CustomButton, CustomProgress } from "../../../shared";
import { AnswerDialog, QuestionCard } from "./";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root:{
    backgroundColor: "#fce9ef",
  },
  buttonStyle: {
    "&.MuiButtonBase-root": {
      backgroundColor: "#801313",
      marginTop: "10px",
      color: "#ffd7db",
      width: "147%",
      padding: "5px",
      right: "16px",
    },
    gridStyle:{
      padding: "20px",
    }
  },
}));
const QuizComponent = ({
  data,
  onChangeValue,
  answers,
  submitQuiz,
  submitResponse,
  handleClose,
  handleOpen,
  quizTitle,
}) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.root}
      >
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#fce9ef"
        >
          <Grid item sx={12}>
            <h1>{quizTitle}: Quiz</h1>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          margin={1}
          maxWidth={"100%"}
        >
          {data.length ? (
            data.map((item, index) => (
              <Grid item md={4}>
                <QuestionCard
                  index={index}
                  data={item}
                  onChangeValue={onChangeValue}
                  answers={answers}
                />{" "}
              </Grid>
            ))
          ) : (
            <h3>No Questions</h3>
          )}
        </Grid>
        <Grid
          container
          alignContent={"center"}
          alignItems="center"
          justifyContent="center"
          spacing={2}
          margin="4px"
        >
          <Grid
            item
            className={classes.gridStyle}
          >
            <CustomButton
              label="Submit"
              handleClick={submitQuiz}
              type={"submit"}
              className={classes.buttonStyle}
            />
          </Grid>
        </Grid>
      </Grid>
      <AnswerDialog
        open={handleOpen}
        submitResponse={submitResponse}
        handleClose={handleClose}
      />
    </>
  );
};
export default QuizComponent;
