export type Video = {
  videoId: string;
  name: string;
  location: {
    country: {
      id: number;
      name: string;
    };
    region?: {
      id: number;
      name: string;
    };
  };
};
