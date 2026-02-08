export type SignInPayload = {
  email: string;
  password: string;
};

export type SignInResponse = {
  id: string;
  email: string;
  accessToken: string;
  role: "USER" | "ADMIN";
};

export type GoogleAuthPayload = {
  idToken: string;
};

export type GoogleAuthResponse = {
  email: string;
  role: "GUEST" | "USER" | "ADMIN";
  token: string;
};
