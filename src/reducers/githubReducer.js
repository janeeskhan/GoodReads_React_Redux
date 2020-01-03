import { FETCH_GITHUB_DATA } from "../actions/types";
// import { Data } from "../actions/types";
const initState = {
  Array: [],
  loading: false,
  TextArray: []
};

const ArrayData = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_DATA:
      return {
        ...state,
        Array: action.Array,
        loading: false
      };

    // case Data:
    //   return {
    //     ...state,
    //     TextArray: action.TextArray,
    //     loading: false
    //   };
    default:
      return state;
  }
};
export default ArrayData;
