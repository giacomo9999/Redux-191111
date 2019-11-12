import { ADD_ARTICLE } from "../constants/action-types";
import { REMOVE_ARTICLE } from "../constants/action-types";

const initialState = { articles: [] };

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === REMOVE_ARTICLE) {
    console.log()
    let tempArticles = state.articles
      .slice()
      .filter((entry, index) => index !== action.payload);
    return Object.assign({}, state, {
      articles: tempArticles
    });
  }

  return state;
}

export default rootReducer;
