import { useContext } from "react";
import { SearchDataContext } from "../context/SearchContext";

const useSearchData = () => useContext(SearchDataContext);

export default useSearchData;
