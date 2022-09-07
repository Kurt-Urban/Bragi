import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useSearchData from "../../hooks/useSearchData";
import axios from "axios";

const SongInformation = () => {
  const router = useRouter();
  const { id } = router.query;
  const { searchData, addLyricsToCache, lyricsCache } = useSearchData();
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    if (!id || !searchData) {
      router.push("/");
    }
  }, [id, searchData]);

  const lyricsByID = lyricsCache.find((item) => item.song_id === parseInt(id));

  useEffect(() => {
    if (!lyricsByID) {
      axios
        .post("/lyrics", { id })
        .then((res) => {
          setLyrics(res.data.lyrics.body.html);
          addLyricsToCache(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLyrics(lyricsByID.lyrics.body.html);
    }
  }, []);

  const song = searchData.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div>
            <Link href={"/"}>
              <button className="rounded m-3 bg-gray-600 py-1 px-2 text-gray-300">
                Back
              </button>
            </Link>
          </div>
          <div className="container ml-14 mt-10">
            <div className="text-4xl font-bold">{song?.title}</div>
            <div className="ml-1 mt-2">{song?.artist_names}</div>
            <div className="ml-1 mt-2 text-gray-500 text-sm">
              Released: {song?.release_date_for_display}
            </div>
          </div>
        </div>
        <div className="my-10 text-sm">
          <div dangerouslySetInnerHTML={{ __html: lyrics }}></div>
          {!lyrics && <div className="text-center mt-20">No Lyrics</div>}
        </div>
      </div>
    </>
  );
};

export default SongInformation;
