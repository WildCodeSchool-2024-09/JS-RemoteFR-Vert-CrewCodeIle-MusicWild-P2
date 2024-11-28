export type SearchAlbumArtistType = {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  preview: string;
  artist: {
    id: number;
    name: string;
    tracklist: string;
  };
  album: {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    tracklist: string;
  };
};
