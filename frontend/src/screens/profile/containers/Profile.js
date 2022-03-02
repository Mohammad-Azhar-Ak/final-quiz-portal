import React, { Component } from "react";
import { ProfileComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/api";
import { isEmpty } from "lodash";
import { token, options, mobileRegex } from '../../../utils/helper'

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: {},
    };
  }

  componentDidMount() {
    if (token) {
      axios
        .get(`${base_url}/user/profile`, options)
        .then((res) => {
          const data = res.data.data;
          this.setState({ data: data });
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
      data: { ...this.state.data, [key]: value },
    });
  };

  handleClick = () => {
    if (isEmpty(this.validation())) {
      axios
        .post(`${base_url}/user/update`, this.state.data, options)
        .then((response) => {
          this.props.history.push("/home");
        })
        .catch((error) => {
          console.log(error);
          window.location.href = "/";
        });
    }
  }
  validation = () => {
    let error = {}
    if (this.state.data.mobile && !mobileRegex.test(this.state.data.mobile)) {
      error.mobile = "Invalid mobile number, mobile number must be of 10 digit";
    }
    this.setState({ error: error });
    return error;
  };

  render() {
    const { data, error } = this.state
    return (
      <ProfileComponent
        data={data}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        error={error}
      />
    );
  }
}

export default ProfileContainer;
