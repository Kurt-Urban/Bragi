import { useRouter } from "next/router";
import React from "react";
import useSearchData from "../../hooks/useSearchData";

const SongInformation = () => {
  const router = useRouter();
  const { id } = router.query;
  const { searchData } = useSearchData();

  const song = searchData.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className="text-white text-xl">{song.title}</div>
    </>
  );
};

export default SongInformation;
