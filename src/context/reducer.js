import React from "react";

const github_reducer = (state, action) => {
  switch (action.type) {
    case "REMAINING_REQUEST":
      return {
        ...state,
        error: { ...state.error, show: false },
        requests: action.payload,
      };
    case "REMAINING_ZERO":
      return {
        ...state,
        error: {
          ...state.error,
          show: true,
          msg: "Sorry, you have exceeded your hourly limit",
        },
      };
    case "SET_USER":
      return {
        ...state,
        error: { ...state.error, show: false },
        githubUser: action.payload,
      };
    case "USER_NOT_FOUND":
      return {
        ...state,
        loading: false,
        error: {
          ...state.error,
          show: true,
          msg: "There Is No User With That Username",
        },
      };
    case "SET_FOLLOWERS":
      return {
        ...state,
        loading: false,
        followers: action.payload,
      };
    case "SET_REPOS":
      return {
        ...state,
        repos: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default github_reducer;
