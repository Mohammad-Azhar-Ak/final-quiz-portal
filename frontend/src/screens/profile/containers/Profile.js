import React, { Component } from "react";
import { ProfileComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/api";
import { isEmpty } from "lodash";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: {},
      data: {},
      flag: true,
      error: {},
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("sessionToken");
    if (token) {
      const options = {
        headers: { Authorization: `${token}` },
      };
      axios
        .get(`${base_url}/user/profile`, options)
        .then((res) => {
          const data = res.data.data;
          this.setState({ responseData: data });
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("sessionToken");
          window.location.href = "/";
        });
    } else {
      localStorage.removeItem("sessionToken");
      window.location.href = "/";
    }
  }

  handleChange = (key, value) => {
    this.setState({
      responseData: { ...this.state.responseData, [key]: value },
    });
  };

  handleClick = () => {
    if (isEmpty(this.validation())) {
      if (!this.state.flag) {
        const token = localStorage.getItem("sessionToken");
        const options = {
          headers: { Authorization: `${token}` },
        };
        axios
          .post(`${base_url}/user/update`, this.state.responseData, options)
          .then((response) => {})
          .catch((error) => {
            console.log(error);
            window.location.href = "/";
          });
      }
      this.setState({
        flag: !this.state.flag,
      });
    }
  };
  validation = () => {
    let regexForMob = /^[6-9]\d{9}$/;
    let error = {}
    if (this.state.responseData.mobile && !regexForMob.test(this.state.responseData.mobile)) {
      error.mobile = "Invalid mobile number, mobile number must be of 10 digit";
    }
    this.setState({ error: error });
    return error;
  };

  render() {
    return (
      <ProfileComponent
        data={this.state.responseData}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        flag={this.state.flag}
        error={this.state.error}
      />
    );
  }
}

export default ProfileContainer;
