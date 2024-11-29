export type SearchAlbumTrackType = {
  id: number;
  title: string;
  title_short: string;
  preview: string;

  artist: {
    id: number;
    name: string;
    tracklist: string;
  };
};
