import createStore from "redux";
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  movieList: [],
  name: "James ",
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "Add_MOVIE") {
    return {
      ...state,
      movieList: action.list,
    };
  } else if  (action.type ==="CHANGE_USERNAME") {
    return {
      ...state,
      name: action.name,
    };
  }
  return state;
};

const store = createStore(rootReducer);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "Ass_MOVIE",
  list:{
    name:"DDLJ",
    YEAR:"1990",
  },
});

store.dispatch({
  type:"CHANGE_USERNAME",
  year:"1990",
});
