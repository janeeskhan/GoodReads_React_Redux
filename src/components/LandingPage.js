import React from "react";
import AutoCompleteText from "./AutoCompleteText.js";
import { connect } from "react-redux";
import { fetchGithubData } from "../actions/index";

const convert = require("xml-js");

class LandingPage extends React.Component {
  state = {
    text: "",
    loading: false
    // EmptyArray:[]
  };

  onTextChange = e => {
    const value = e.target.value;
    console.log(value);

    this.setState({
      text: value,
      loading: true,
      TextArray:[]
    });

    if (value !== "") {
      this.props.fetchGithubData(value);
    } 

    //   // dispatch
    //   // empty suggestion
    //   // []
    // }
  };

  render() {
    return (
      <div className="container">
        <div className="header clearfix mt-5">
          <h2 className=" text "> Goodreads Book Search !! </h2>{" "}
        </div>

        <AutoCompleteText
          Books={this.props.Array}
          onChange={this.onTextChange}
          text={this.state.text}
        ></AutoCompleteText>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Array: state.Array
  };
};



const mapDispatchtoProps = dispatch => {
  return {
    fetchGithubData: text => {
      dispatch(fetchGithubData(text));
    }
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(LandingPage);
