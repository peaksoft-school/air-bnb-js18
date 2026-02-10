export type SignInPayload = {
  email: string;
  password: string;
};

export type SignInResponse = {
  email: string;
  accessToken: string | null;
  role: "USER" | "ADMIN";
  image: string | null;
};

export type GoogleAuthPayload = {
  idToken: string;
};

export type GoogleAuthResponse = {
  email: string;
  role: "GUEST" | "USER" | "ADMIN";
  token: string;
  accessToken: string;
  image: string | null;
};

export interface AuthState {
  isAuth: boolean;
  role: "GUEST" | "USER" | "ADMIN";
  email: string | null;
  isLoading: boolean;
  error: string | null;
  accessToken: string | null;
  image: string | null;
}
