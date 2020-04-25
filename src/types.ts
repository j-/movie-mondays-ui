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
}

export const getFilmPath = ({ id }: Pick<Film, 'id'>) => `/movie/${id}`;
export const getSessionPath = ({ id }: Pick<Session, 'id'>) => `/session/${id}`;
