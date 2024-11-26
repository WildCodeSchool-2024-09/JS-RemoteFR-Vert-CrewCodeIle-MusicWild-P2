import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { artistType } from "../../types/artistType";

type albumType = {
  id: string;
  id_artist: string;
  name: string;
  picture: string;
  genre: string;
  preview: string;
  picture_medium: string;
  cover_medium: string;
  title: string;
  musicTitle: string;
  track_position: number;
  duration: number;
};

type trackType = {
  track_position: number;
  title: string;
  duration: number;
  preview: string;
};

function ArtistsDetails() {
  const VITE_API_URL_ARTIST_DETAILS = import.meta.env
    .VITE_API_URL_ARTIST_DETAILS;
  const VITE_API_URL_ARTIST_DETAILS_ALBUMS = import.meta.env
    .VITE_API_URL_ARTIST_DETAILS_ALBUMS;
  const VITE_API_ALBUMS_ID = import.meta.env.VITE_API_ALBUMS_ID;

  const [artist, setArtist] = useState<artistType[]>([]);
  const [albums, setAlbums] = useState<albumType[]>([]);
  const [tracks, setTracks] = useState<trackType[] | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${VITE_API_URL_ARTIST_DETAILS}${id}`)
      .then((response) => response.json())
      .then((data) => setArtist(data))
      .catch((error) => console.error(error));

    fetch(`${VITE_API_URL_ARTIST_DETAILS_ALBUMS}${id}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleAlbumClick = (albumId: string) => {
    fetch(`${VITE_API_ALBUMS_ID}${albumId}`)
      .then((response) => response.json())
      .then((data) => setTracks(data.data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <article>
        {artist.map((a) => (
          <div key={a.id}>
            <img src={a.picture} alt={`Présentation de l'artiste ${a.name}`} />
            <h2>{a.name}</h2>
            <p>{a.description}</p>
          </div>
        ))}
      </article>
      <article className="albums">
        <h2 className="albumTitle">Principaux Albums</h2>
        <div className="albumList">
          {albums.map((m) => (
            <div
              className="cover"
              key={m.id}
              onClick={() => handleAlbumClick(m.id)}
              onKeyUp={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  handleAlbumClick(m.id);
                }
              }}
            >
              <img src={m.cover_medium} alt={`Cover de l'album ${m.title}`} />
              <h3>{m.title}</h3>
            </div>
          ))}
        </div>
      </article>
      <article className="Tracklist">
        {tracks && (
          <article className="playlists">
            <h2>Playlists de l'album</h2>
            <table className="albumPlay">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Titre</th>
                  <th>Durée</th>
                  <th>Play</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track) => (
                  <tr key={track.title}>
                    <td>{track.track_position}</td>
                    <td>{track.title}</td>
                    <td>{track.duration} sec</td>
                    <td>
                      <audio controls src={track.preview}>
                        <track kind="captions" />
                        Play
                      </audio>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        )}
      </article>
    </>
  );
}

export default ArtistsDetails;
