import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SearchArtistType } from "../types/SearchArtistType";
import SearchArtistCard from "./SearchArtistCard";

export default function ViewSearchList() {
  const { categorySearch, textSearch } = useParams();

  const [artistList, setArtistList] = useState<SearchArtistType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categorySearch: `${categorySearch}`,
        textSearch: `${textSearch}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => setArtistList(data.data))
      .catch((err) => console.error(err));
  }, [categorySearch, textSearch]);
  return (
    <>
      <section>
        {artistList?.map((a: SearchArtistType) => (
          <SearchArtistCard artist={a} key={a.id} />
        ))}
      </section>
    </>
  );
}
