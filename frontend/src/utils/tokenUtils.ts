import { jwtDecode } from "jwt-decode";
("jwt-decode");

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) return true;

  const decoded: any = jwtDecode(token);
  const exp = decoded.exp;
  return Date.now() >= exp * 1000;
};
