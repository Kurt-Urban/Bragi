import "../styles/globals.css";
import { SearchDataProvider } from "../context/SearchContext";

function MyApp({ Component, pageProps }) {
  return (
    <SearchDataProvider>
      <Component {...pageProps} />
    </SearchDataProvider>
  );
}

export default MyApp;
