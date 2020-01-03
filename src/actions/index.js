import { FETCH_GITHUB_DATA } from './types';
import {Data} from './types';
const convert = require('xml-js');


export const fetchData = (Array) => {
  return {
    type: FETCH_GITHUB_DATA,
    Array
  }
};

export const fetchGithubData = (value) => {
  return (dispatch) => {
    fetch (
      `https://www.goodreads.com/search/index.xml?key=l7qiXtcIr7A2PzHh726pBg&q=${value}`
      )
     
      .then(async res => {
        const value = await res.text();
       
       
        const result = convert.xml2json(value, { compact: true });
        const myObj = JSON.parse(result);
        console.log(myObj);


        let SearchingArray = [];
        SearchingArray.push(myObj)
        console.log(SearchingArray)

        let suggestionsArray = SearchingArray[0].GoodreadsResponse.search.results.work;
      


         dispatch(fetchData(suggestionsArray))
        console.log(suggestionsArray)

      })
      .catch(error => {

        throw (error);
      });
      

  }
  
}




