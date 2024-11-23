export type SearchArtistTrackType = {
  id: number;
  title: string;
  duration: number;
  preview: string;
  album: {
    cover: string;
    cover_medium: string;
    cover_small: string;
    id: number;
    title: string;
  };
  artist: {
    id: number;
    name: string;
  };
  contributors: [
    {
      id: number;
      name: string;
      picture: string;
      picture_small: string;
    },
  ];
};
