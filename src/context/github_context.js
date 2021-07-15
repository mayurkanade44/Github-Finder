import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import mockUser from "./mockdata/mockUser";
import mockRepos from "./mockdata/mockRepos";
import mockFollowers from "./mockdata/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const initialState = {
  githubUser: mockUser,
  repos: mockRepos,
  followers: mockFollowers,
  requests: 0,
  loading: false,
  error: {
    show: false,
    msg: "",
  },
};

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const chekRequest = async () => {
    try {
      const resp = await axios(`${rootUrl}/rate_limit`);
      let request = resp.data.rate.remaining;
      dispatch({ type: "REMAINING_REQUEST", payload: request });
      if (request === 0) {
        dispatch({ type: "REMAINING_ZERO" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchUser = async (user) => {
    dispatch({ type: "LOADING" });
    try {
      const resp = await axios(`${rootUrl}/users/${user}`);
      dispatch({ type: "SET_USER", payload: resp.data });
      const { repos_url, followers_url } = resp.data;
      const result = await Promise.allSettled([
        axios(`${repos_url}?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]);
      const [repos, followers] = result;
      if (repos.status === "fulfilled") {
        dispatch({ type: "SET_REPOS", payload: repos.value.data });
      }
      if (followers.status === "fulfilled") {
        dispatch({ type: "SET_FOLLOWERS", payload: followers.value.data });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "USER_NOT_FOUND" });
    }
  };

  useEffect(() => {
    chekRequest();
  }, []);

  return (
    <GithubContext.Provider value={{ ...state, searchUser }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
