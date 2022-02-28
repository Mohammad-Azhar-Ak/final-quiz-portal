import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  alertStyle: { width: "100%" },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomPositionedSnackbar = ({ anchorOrigin, open, onClose, message }) => {
  const classes = useStyle();
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
      >
        <Alert
          onClose={onClose}
          severity="error"
          className={classes.alertStyle}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomPositionedSnackbar;
