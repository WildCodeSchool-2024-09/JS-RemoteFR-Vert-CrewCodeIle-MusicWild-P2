import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SearchArtistType } from "../types/SearchArtistType";
import SearchArtistCard from "./SearchArtistCard";

export default function ViewSearchList() {
  const { categorySearch, textSearch } = useParams();

  const [artistList, setArtistList] = useState<SearchArtistType[] | null>(null);

  const URL_API_SEARCH = import.meta.env.VITE_API_SEARCH;

  useEffect(() => {
    fetch(`${URL_API_SEARCH}`, {
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
      <section className="cards">
        {artistList?.map((a: SearchArtistType) => (
          <SearchArtistCard artist={a} key={a.id} />
        ))}
      </section>
    </>
  );
}
