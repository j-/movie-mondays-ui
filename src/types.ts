export interface Session {
  id: string;
  filmId: string;
  date: string;
  time: number;
  isNoFreeTickets: boolean;
  isPreviewScreening: boolean;
  isSpecialEvent: boolean;
  isBabyFriendly: boolean;
  isSellingFast: boolean;
  isSoldOut: boolean;
}

export interface Film {
  id: string;
  title: string;
  rating: string;
  runtimeMinutes: number | null;
}

export interface FetchSessionsResult {
  entities: {
    films: {
      [filmId: string]: Film;
    };
    sessions: {
      [sessionId: string]: Session;
    };
  };
  result: string[];
}
