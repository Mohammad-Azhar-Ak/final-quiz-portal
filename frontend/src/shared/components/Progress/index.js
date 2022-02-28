import { CircularProgress } from "@mui/material";

const CustomProgress = ({ loader }) => {
  return <>{loader && <CircularProgress color="primary" />}</>;
};
export default CustomProgress;
