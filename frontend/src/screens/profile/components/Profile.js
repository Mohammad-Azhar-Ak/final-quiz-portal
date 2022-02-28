import React from "react";
import { Grid, Paper, Avatar } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {
    CustomInput,
    CustomButton,
    CustomRadioButton,
} from "../../../shared";
import { gender } from "../../../shared/constants";
import { FormControl } from "@mui/material";
import { CustomBackground } from "../../../assets/images";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    buttonStyle: {
        "&.MuiButtonBase-root": {
            backgroundColor: "#801313",
            margin: "20px",
            color: "#ffd7db",
            width: "30%",
            padding: "5px",
        }
    }
}));

const ProfileComponent = ({ data, handleChange, handleClick, error}) => {
    const classes = useStyles();
    const paperStyle = {
        padding: "10px 60px",
        width: 400,
        margin: "40px auto",
        height: "75vh",
        backgroundColor: "#fce9ef",
        border: "solid",
        borderColor: "#801313",
        borderWidth: "10px",
    };
    const headerStyle = {
        margin: 0
    };

    return (
        <Grid
            container
            height="50vh"
            sx={{
                backgroundColor: "primary",
                backgroundImage: `url(${CustomBackground})`,
                height: "92vh",
                width: "182.5vh",
            }}>
            <Paper
                elevation={20}
                style={paperStyle} >
                <Grid
                    align="center">
                    <Avatar>
                        <PersonIcon
                            fontSize="large"
                            sx={{ color: "#801313" }} />
                    </Avatar>
                    <h2
                        style={headerStyle}>
                        Profile
                    </h2>
                </Grid>
                <Grid
                    align="center" >
                    <FormControl>
                        <CustomInput
                            type="text"
                            placeholder="Enter your name"
                            label="Name"
                            value={data.name}
                            handleChange={(value) => handleChange("name", value)}
                        />
                        <CustomInput
                            type="number"
                            placeholder="Enter your mobile number"
                            helperText={error.mobile}
                            error={error.mobile}
                            label="Mobile"
                            value={data.mobile}
                            handleChange={(value) => handleChange("mobile", value)}
                        />
                        <CustomRadioButton
                            options={gender}
                            labelValue="Gender"
                            value={data.gender}
                            handleChange={(value) => handleChange("gender", value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder="Enter your profile link"
                            label="LinkedIn"
                            value={data.linkedIn}
                            handleChange={(value) => handleChange("linkedIn", value)}
                        />
                        <CustomInput
                            type="text"
                            placeholder="Enter your address"
                            label="Address"
                            value={data.address}
                            handleChange={(value) => handleChange("address", value)}
                        />
                    </FormControl>
                    <Grid xs={12} >
                        <CustomButton
                            label={"Update"}
                            type="submit"
                            handleClick={handleClick}
                            className={classes.buttonStyle} />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default ProfileComponent