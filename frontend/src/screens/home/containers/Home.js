import React, { Component } from "react";
import { HomeComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
import { token, options } from "../../../utils/helper";
import { CustomProgress } from "../../../shared";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalPages: 0,
      page: 1,
      loader: false,
    };
  }

  componentDidMount = () => {
    if (token) {
      this.setState({ loader: true });
      axios
        .get(`${base_url}/quiz/${0}`, options)
        .then((res) => {
          const data = res.data.data.content;
          this.setState({ data: data });
          this.setState({ totalPages: res.data.data.totalPages });
          this.setState({ loader: false });
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("sessionToken");
          this.setState({ loader: false });
          window.location.href = "/";
        });
    } else {
      localStorage.removeItem("sessionToken");
      window.location.href = "/";
    }
  };

  handleClick = (id, title) => {
    localStorage.setItem("quizId", id);
    localStorage.setItem("quizTitle", title);
    if (localStorage.getItem("sessionToken")) {
      this.props.history.push("/quizpage");
    } else {
      window.location.href = "/";
    }
  };

  handlePagination = (event, value) => {
    this.setState({ page: value });
    if (token) {
      axios
        .get(`${base_url}/quiz/${value - 1}`, options)
        .then((res) => {
          const data = res.data.data.content;
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
  };

  render() {
    const { data, totalPages, page } = this.state;
    return (
      <>
        {this.state.loader ? (
          <CustomProgress />
        ) : (
          <HomeComponent
            data={data}
            handleClick={this.handleClick}
            handlePagination={this.handlePagination}
            totalPages={totalPages}
            page={page}
          />
        )}
      </>
    );
  }
}

export default HomeContainer;
