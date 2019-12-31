import React from 'react';
import { connect } from 'react-redux';



class GithubData extends React.Component{
  render(){
  
  //   return(
  //   <div>
  //     <h2 className="text-danger" >GoodReadsBookSearch</h2>
      
  //   </div>
  // )}
  
}
}
const mapStateToProps = state => {
  return {
    Array: state.Array
  };
};

export default connect(
  mapStateToProps,
  null
)(GithubData);