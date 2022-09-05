import React, { createContext, useReducer } from "react";

const SearchDataReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_DATA":
      return {
        ...state,
        searchData: action.payload.data,
        queryTerm: action.payload.queryTerm,
      };
    default:
      return state;
  }
};

const initialState = {
  setSearchData: () => {},
  searchData: [],
  queryTerm: "",
};

export const SearchDataContext = createContext(initialState);

export const SearchDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchDataReducer, initialState);

  function setSearchData(payload) {
    dispatch({
      type: "SEARCH_DATA",
      payload,
    });
  }

  return (
    <SearchDataContext.Provider
      value={{
        setSearchData,
        searchData: state.searchData,
        queryTerm: state.queryTerm,
      }}
    >
      {children}
    </SearchDataContext.Provider>
  );
};
