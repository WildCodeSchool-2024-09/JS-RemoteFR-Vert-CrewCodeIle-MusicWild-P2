export type SearchArtistTrackType = {
  id: number;
  title: string;
  duration: number;
  preview: string;
  constributors: {
    id: number;
    name: string;
    picture: string;
    picture_small: string;
  };
};
