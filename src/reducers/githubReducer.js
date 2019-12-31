import { FETCH_GITHUB_DATA } from '../actions/types';

const initState = {
  Array: []
}
console.log(initState)
const ArrayData = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_DATA:
      return {
        ...state,
        Array:action.Array 
      };
    default: return state;
}
}
export default ArrayData;