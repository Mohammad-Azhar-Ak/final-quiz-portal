import React, { Component } from 'react'
import { HomeComponent } from '../components';
import base_url from "../../../utils/api";
import axios from 'axios';
import history from '../../../utils/history';
class HomeContainer extends Component {

  state = {
    posts: [],
    totalPages:{},
    page:1
  }

  componentDidMount = () => {
    const token = localStorage.getItem("sessionToken");
    if (token) {
      const options = {
        headers: { "Authorization": `${token}` }
      };
      axios.get(`${base_url}/quiz/${0}`, options)
        .then(res => {
          const posts = res.data.data.content;
          this.setState({ posts:posts });
          this.setState({totalPages: res.data.data.totalPages})
        }).catch(
          (error) => {
            console.log(error);
            localStorage.removeItem("sessionToken");
            window.location.href = "/"
          }
        )
    }
    else {
      localStorage.removeItem("sessionToken");
      window.location.href = "/";
    }
  }

  handleClick = (id, title) => {
    localStorage.setItem("quizId", id);
    localStorage.setItem("quizTitle", title);
    if (localStorage.getItem("sessionToken")) {
      history.push("/quizpage");
    }
    else {
      window.location.href = "/"
    }
  }

  handlePagination=(event,value)=>{
    this.setState({page:value})
    const token = localStorage.getItem("sessionToken");
    if (token) {
      const options = {
        headers: { "Authorization": `${token}` }
      };
      axios.get(`${base_url}/quiz/${(value-1)}`, options)
        .then(res => {
          const posts = res.data.data.content;
          this.setState({ posts:posts });
        }).catch(
          (error) => {
            console.log(error);
            localStorage.removeItem("sessionToken");
            window.location.href = "/"
          }
        )
    }
    else {
      localStorage.removeItem("sessionToken");
      window.location.href = "/";
    }
  }

  render() {

    return (
      <HomeComponent
        data={this.state.posts}
        handleClick={this.handleClick}
        handlePagination={this.handlePagination}
        totalPages={this.state.totalPages}
        page={this.state.page}
      />
    )

  }
}

export default HomeContainer