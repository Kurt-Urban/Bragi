import { useContext } from "react";
import { SearchDataContext } from "../context/SearchContext";

// Custom hook to access the global search context and cache
const useSearchData = () => useContext(SearchDataContext);

export default useSearchData;
