import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import useSearchData from "../hooks/useSearchData";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const { searchData, queryTerm, setSearchData } = useSearchData();

  useEffect(() => {
    if (searchData) setResults(searchData);
  }, []);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsValid(true);
          // Validates the query
          if (
            new RegExp(/[^a-zA-Z0-9\s]/g).test(query) ||
            query === "" ||
            query.length > 150
          ) {
            setIsValid(false);
            return;
          }
          // Fetches the data from the server
          const res = await axios.post("/query", {
            query: query.trim().toLowerCase(),
          });
          // Sets the results in global context cache and local state
          setSearchData({ queryTerm: query, data: res.data });
          setResults(
            res.data.sort((a, b) =>
              a.primary_artist.name.localeCompare(b.primary_artist.name)
            )
          );
        }}
      >
        <div className="container min-w-full text-center mt-20 mb-10 relative">
          <div className="text-2xl text-blue-500 font-bold mb-4">
            Music Search
          </div>
          {isValid ? null : (
            <small className="absolute top-full text-red-600 font-bold">
              Invalid Input
            </small>
          )}
          <input
            type="text"
            className="rounded bg-gray-200 outline-none p-2 mr-2 w-96 text-gray-900"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            defaultValue={queryTerm}
          />

          <button className="rounded bg-blue-600 p-2 px-3 transition-colors hover:bg-blue-800">
            Search
          </button>
        </div>
        <div className="container min-w-full flex justify-center">
          <div className="">
            {/* Maps through results to display them on the page */}
            {results.map((item) => (
              <Link key={item.id} href={`/song/${item.id}`}>
                <div className="bg-gray-700 my-2 p-4 w-96 rounded cursor-pointer transition-colors hover:bg-gray-600">
                  <div>
                    {item.primary_artist.name} - {item.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </form>
    </>
  );
}
