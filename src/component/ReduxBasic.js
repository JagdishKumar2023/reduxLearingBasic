import React from "react";
const posCountElement = document.querySelector(".post-count");

let initialState = {
  post: 0,
  name: "Jagdish",
  age: 23,
};

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/incrementBy";
const DECREMENT_BY = "post/decrementBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT: {
      return { ...state, post: state.post - 1 };
    }
    case INCREMENT_BY: {
      return { ...state, post: state.post + action.payload };
    }
    case DECREMENT_BY: {
      return { ...state, post: state.post - action.payload };
    }
  }
}
