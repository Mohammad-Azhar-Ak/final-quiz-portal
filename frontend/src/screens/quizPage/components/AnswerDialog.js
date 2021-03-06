import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from "@mui/styles";
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(() => ({
  titleStyle:{
    color:"#801313", 
    textAlign:"center",
  },
  buttonStyle:{
    color:"#801313",
  }
}))
const AnswerDialog = ({ open, handleClose, submitResponse }) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle className={classes.titleStyle} >{"-----Final Score-----"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{textAlign:"center"}}>
            <h3>Right Answers:   {submitResponse.rightCount}</h3>
            <h3>Wrong Answers:   {submitResponse.wrongCount} </h3>
            <h3>Scores:          {submitResponse.totalScore} / {submitResponse.totalMarks}  </h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.buttonStyle}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AnswerDialog
