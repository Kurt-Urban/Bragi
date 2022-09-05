import React, { createContext, useReducer } from "react";

const SearchDataReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_DATA":
      return {
        ...state,
        searchData: action.payload.data,
        queryTerm: action.payload.queryTerm,
        lyricsCache: [],
      };
    case "CACHE_LYRICS":
      return {
        ...state,
        lyricsCache: [...state.lyricsCache, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  setSearchData: () => {},
  searchData: [],
  addLyricsToCache: () => {},
  lyricsCache: [],
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

  function addLyricsToCache(payload) {
    dispatch({
      type: "CACHE_LYRICS",
      payload,
    });
  }

  return (
    <SearchDataContext.Provider
      value={{
        setSearchData,
        addLyricsToCache,
        searchData: state.searchData,
        queryTerm: state.queryTerm,
        lyricsCache: state.lyricsCache,
      }}
    >
      {children}
    </SearchDataContext.Provider>
  );
};
