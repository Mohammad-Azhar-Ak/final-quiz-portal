import * as React from "react";
import { Grid } from "@mui/material";
import { CustomCard, CustomProgress } from "../../../shared";
import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";

const HomeComponent = ({ data, handleClick, handlePagination, totalPages, page }) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fce9ef",
      }}
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
          <h1>Time to Quiz</h1>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        marginTop={1}
        marginBottom={1}
        maxWidth={"100%"}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Grid item md={1.75}>
              <CustomCard
                index={index}
                title={item.title}
                handleClick={() => handleClick(item.id, item.title)}
                buttonLabel="Play Quiz"
              />
            </Grid>
          ))
        ) : (
          <CustomProgress />
        )}
      </Grid>
      <Grid xs={2} sm={4} md={4.8}></Grid>
      <Grid md={6} marginTop={2} marginBottom={2}>
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={handlePagination}
          style={{ justifyContent: "center" }}
        />
      </Grid>
    </Grid>
  );
};
export default HomeComponent;
