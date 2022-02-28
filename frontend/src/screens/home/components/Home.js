import * as React from "react";
import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import { QuizCard } from "./";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  root: {
    backgroundColor: "#fce9ef",
  },
  topHeading: {
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fce9ef",
  },
  content: {
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1",
    marginBottom: "1",
    maxWidth: "100%",
  },
}));

const HomeComponent = ({
  data,
  handleClick,
  handlePagination,
  totalPages,
  page,
}) => {
  const classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid container spacing={0} className={classes.topHeading}>
        <Grid item sx={12}>
          <h1>Time to Quiz</h1>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.content}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <Grid item md={1.75}>
              <QuizCard
                index={index}
                title={item.title}
                handleClick={() => handleClick(item.id, item.title)}
                buttonLabel="Play Quiz"
              />
            </Grid>
          ))
        ) : (
          <h3>No Quiz</h3>
        )}
      </Grid>
      <Grid xs={2} sm={4} md={5.3}></Grid>
      <Grid md={6} marginTop={2} marginBottom={2}>
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={handlePagination}
        />
      </Grid>
    </Grid>
  );
};
export default HomeComponent;
