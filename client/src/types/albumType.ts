export type albumType = {
  title: string;
  id: string;
  cover: string;
  cover_small: string;
  md5_image: string;
  picture: string;
  picture_small: string;
  description: string;
  artist: { name: string; title: string; picture: string };
  name: string;
  releaseDate: string;
  genre: string;
  album: {
    id: number;
    title: string;
    cover: string;
    cover_big: string;
  };
};
