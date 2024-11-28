import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { SearchAlbumType } from "../types/SearchAlbumType";
import type { SearchArtistType } from "../types/SearchArtistType";
import type { SearchTrackType } from "../types/SearchTrackType";
import SearchAlbumCard from "./SearchAlbumCard";
import SearchArtistCard from "./SearchArtistCard";
import SearchTrackCard from "./SearchTrackCard";

export default function ViewSearchList() {
  const { categorySearch, textSearch } = useParams();
  const URL_API_SEARCH = import.meta.env.VITE_API_SEARCH;

  const [artistList, setArtistList] = useState<SearchArtistType[] | null>(null);
  const [albumList, setAlbumList] = useState<SearchAlbumType[] | null>(null);
  const [trackList, setTrackList] = useState<SearchTrackType[] | null>(null);

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
      .then((data) => {
        if (categorySearch === "Artist") {
          setArtistList(data.data);
        }
        if (categorySearch === "Album") {
          setAlbumList(data.data);
        }

        if (categorySearch === "Titre") {
          setTrackList(data.data);
        }
      })
      .catch((err) => console.error(err));
  }, [categorySearch, textSearch]);

  return (
    <>
      <section className="titleSearchResults">
        {categorySearch === "Artist" && (
          <h2>{`(${artistList?.length})`} Resultats pour "catégorie Artist"</h2>
        )}
        {categorySearch === "Album" && (
          <h2>{`(${albumList?.length})`} Resultats pour "catégorie Album" :</h2>
        )}
        {categorySearch === "Titre" && (
          <h2>{`(${trackList?.length})`} Resultats pour "catégorie Titre" :</h2>
        )}
      </section>

      <section className="cards">
        {categorySearch === "Artist" &&
          artistList?.map((a: SearchArtistType) => (
            <SearchArtistCard artist={a} key={a.id} />
          ))}

        {categorySearch === "Album" &&
          albumList?.map((al: SearchAlbumType) => (
            <SearchAlbumCard album={al} key={al.id} />
          ))}

        {categorySearch === "Titre" &&
          trackList?.map((t: SearchTrackType) => (
            <SearchTrackCard track={t} key={t.id} />
          ))}
      </section>
    </>
  );
}
