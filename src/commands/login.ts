import MoneyLoverClient from "../client";
import jwt from "jsonwebtoken";
import { UserProfile } from "../interfaces/user-profile";

const debug = process.env.DEBUG === "true";

const login = async (username: string, password: string) => {
  let token: string;
  token = await MoneyLoverClient.getToken(username, password);
  try {
    const jwtToken: jwt.JwtPayload = jwt.decode(token) as jwt.JwtPayload;
    const ml = new MoneyLoverClient(token);
    const userInfo: UserProfile = await ml.getUserInfo();
    if (debug) {
      if (!jwtToken.exp) {
        throw new Error("Invalid JWT token: missing exp field");
      }
      console.log(
        `MoneyLoverClient: Logged in as ${userInfo.email} until ${new Date(
          jwtToken.exp * 1000
        )}`
      );
    }
    return userInfo;
  } catch (e) {
    console.error("MoneyLoverClient: Login failed", e);
    return null;
  }
};

export default login;
