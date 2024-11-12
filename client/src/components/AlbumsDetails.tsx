import type { albumType } from "../types/albumType";

type albumTypeProps = {
  albumChoose: albumType;
};
function AlbumsDetails({ albumChoose }: albumTypeProps) {
  return (
    <div key={albumChoose.id}>
      <img
        src={albumChoose.cover}
        alt={`Présentation de l'album ${albumChoose.title}`}
      />
      <img src={albumChoose.artist.picture} alt="" />
      <h3>{albumChoose.title}</h3>
      <p>{albumChoose.artist.name}</p>
    </div>
  );
}

export default AlbumsDetails;
