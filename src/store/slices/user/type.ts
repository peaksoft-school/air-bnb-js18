export type UserProfileResponse = {
  image: string;
  name: string;
  email: string;
};

export interface UserState {
  image: string | null;
  name: string | null;
  email: string | null;
  isLoading: boolean;
}
