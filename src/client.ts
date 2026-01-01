import { Category } from "./interfaces/category";
import { UpsertTransaction } from "./interfaces/transaction";
import { Wallet } from "./interfaces/wallet";
import jwt from "jsonwebtoken";
import { formatDate } from "./utils";

const moneyLoverUrl = "https://web.moneylover.me";
const moneyLoverTokenUrl = "https://oauth.moneylover.me";

class MoneyLoverClient {
  private _jwtToken: string | null = null;
  constructor() {}

  private async _postRequest(
    path: string,
    body: any = {},
    headers: Record<string, string> = {}
  ): Promise<any> {
    const res = await fetch(`${moneyLoverUrl}/api${path}`, {
      method: "POST",
      headers: {
        authorization: `AuthJWT ${this._jwtToken}`,
        "cache-Control":
          "no-cache, max-age=0, no-store, no-transform, must-revalidate",
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body || {}),
    });

    const data = await res.json();

    if (data.error != null && data.error !== 0) {
      const error = new Error(`Error ${data.error}, ${data.msg}`);
      error.name = "MoneyLoverError";
      error.message = data.msg;
      throw error;
    } else if (data.e != null) {
      const error = new Error(`Error ${data.e}, ${data.message}`);
      error.name = "MoneyLoverError";
      error.message = data.message;
      throw error;
    } else {
      return data.data;
    }
  }

  static async getToken(email: string, password: string) {
    const loginUrlRes = await fetch(`${moneyLoverUrl}/api/user/login-url`, {
      method: "POST",
    });
    const loginUrlData = await loginUrlRes.json();

    const res = await fetch(`${moneyLoverTokenUrl}/token`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${loginUrlData.data.request_token}`,
        client: loginUrlData.data.login_url.match("client=(.+?)&")[1],
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const tokenData = await res.json();

    return tokenData.access_token;
  }

  setToken(token: string) {
    this._jwtToken = token;
  }

  isTokenValid(): boolean {
    if (this._jwtToken != null) {
      // Check if token is expired
      const jwtToken: jwt.JwtPayload = jwt.decode(
        this._jwtToken
      ) as jwt.JwtPayload;
      if (!jwtToken.exp) {
        return false;
      }
      return jwtToken.exp * 1000 > Date.now();
    }
    return false;
  }

  getToken(): string | null {
    return this._jwtToken;
  }

  getUserInfo() {
    return this._postRequest("/user/info");
  }

  getWallets(): Promise<Wallet[]> {
    return this._postRequest("/wallet/list");
  }
  getCategories(walletId: string): Promise<Category[]> {
    return this._postRequest("/category/list-all", { walletId: walletId });
  }

  getTransactions(walletId: string, startDate: Date, endDate: Date) {
    return this._postRequest("/transaction/list", {
      startDate: startDate.toISOString().substr(0, 10),
      endDate: endDate.toISOString().substr(0, 10),
      walletId, // "all" to get the transactions of all wallets
    });
  }

  addTransaction(transaction: UpsertTransaction): Promise<UpsertTransaction> {
    return this._postRequest(
      "/transaction/add",
      {
        with: [],
        account: transaction.account,
        category: transaction.category,
        amount: transaction.amount,
        note: transaction.note,
        displayDate: formatDate(transaction.date),
      },
      {
        "Content-Type": "application/json",
      }
    );
  }

  updateTransaction(transaction: UpsertTransaction): Promise<UpsertTransaction> {
    if (!transaction._id) {
      throw new Error("Transaction _id is required for update");
    }
    return this._postRequest(
      "/transaction/update",
      {
        _id: transaction._id,
        id: transaction.id,
        with: [],
        account: transaction.account,
        category: transaction.category,
        amount: transaction.amount,
        note: transaction.note,
        displayDate: formatDate(transaction.date),
      },
      {        "Content-Type": "application/json",
      }
    );
  }
}

export default MoneyLoverClient;

export const NewMoneyLoverClient = () => {
  return new MoneyLoverClient();
};
