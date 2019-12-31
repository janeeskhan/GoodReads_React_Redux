import React from "react";
import AutoCompleteText from "./AutoCompleteText.js";
import { connect } from 'react-redux';
import {fetchGithubData} from "../actions/index"
const convert = require("xml-js");

class LandingPage extends React.Component {
    state = {
        searchtext: "",
        suggestionsArray:[],
        open: false
    };
 
    suggestionSelected = (value) => {
        this.setState(() => ({
            text: value,
            suggestionsArray: [],
        }
        )
        )
    }

    suggestion = value => {
        this.setState({ text: value });
    };

    onTextChange = e => {
        const value = e.target.value;
        this.setState({
            searchtext: value
        });
        this.props.fetchGithubData(value)
       
    };

    render() {
console.log(this.props)
        return (
            < div className="container">
                <div className="header clearfix mt-5" >

                    <h2 className=" text "> Goodreads Book Search </h2> </div >
                  

                <AutoCompleteText
                    Books={this.props.Array}
                    onChange={this.onTextChange}
                    suggestionSelected={this.suggestion}
                   text={this.state.text} >
                </AutoCompleteText>
            </ div>
        );
    }
}
const mapStateToProps = state => {
    return {
      Array: state.Array
    };
  };
const mapDispatchtoProps = (dispatch) => {
    return {
        fetchGithubData:(id) => {dispatch(fetchGithubData(id))}
    }
}
  export default connect(
    mapStateToProps,
    mapDispatchtoProps
  )(LandingPage);
