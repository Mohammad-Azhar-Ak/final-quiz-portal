import React, { Component } from "react";
import { QuizPageComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
import { token, options } from "../../../utils/helper";
import { CustomProgress } from "../../../shared";

class QuizPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      answers: {},
      result: {},
      open: false,
      title: "",
      loader: false,
    };
  }

  componentDidMount = () => {
    if (token) {
      this.setState({ loader: true });
      let id = localStorage.getItem("quizId");
      axios
        .get(`${base_url}/quiz/${id}/questions`, options)
        .then((response) => {
          const data = response.data.data;
          this.setState({ data: data });
          let title = localStorage.getItem("quizTitle");
          this.setState({ title: title });
          this.setState({ loader: false });
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("sessionToken");
          window.location.href = "/";
          this.setState({ loader: false });
        });
    } else {
      localStorage.removeItem("sessionToken");
      window.location.href = "/";
    }
  };

  onChangeValue = (id, value) => {
    let { answers } = this.state;
    answers[id] = value;
    this.setState({ answers: answers });
  };

  submitQuiz = () => {
    let { answers } = this.state;
    let listOfQuestion = Object.keys(answers).map((id, index) => {
      return {
        id: id,
        answer: answers[id],
      };
    });
    let QuestionList = { listOfQuestion };
    if (token) {
      let quizId = localStorage.getItem("quizId");
      axios
        .post(`${base_url}/quiz/${quizId}/submit`, QuestionList, options)
        .then((response) => {
          let result = response.data.data;
          this.setState({ result: result });
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("sessionToken");
          window.location.href = "/";
        });
      this.handleOpen();
      this.setState({ answers: answers });
    } else {
      localStorage.removeItem("sessionToken");
      window.location.href = "/";
    }
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.history.push("/home");
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { data, answers, result, open, title, loader } = this.state;
    return (
      <>
        {loader ? (
          <CustomProgress />
        ) : (
          <QuizPageComponent
            data={data}
            onChangeValue={this.onChangeValue}
            answers={answers}
            submitQuiz={this.submitQuiz}
            submitResponse={result}
            handleOpen={open}
            handleClose={this.handleClose}
            quizTitle={title}
          />
        )}
      </>
    );
  }
}

export default QuizPageContainer;
