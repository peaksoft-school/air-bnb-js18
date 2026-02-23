export interface FavoriteUser {
  id: number;
  fullName: string;
  email: string;
  image: string;
}

export interface Favorite {
  id: number;
  userResponse: FavoriteUser;
  createdAt: string;
}

export interface FavoritesState {
  favorites: Favorite[];
  loading: boolean;
  error: string | null;
}