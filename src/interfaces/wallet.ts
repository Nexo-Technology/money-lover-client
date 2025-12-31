import { UserSnippet } from "./user-snippet";

export interface Wallet {
  _id: string;
  name: string;
  currency_id: number;
  owner: string;
  sortIndex: number;
  transaction_notification: boolean;
  archived: boolean;
  account_type: number;
  exclude_total: boolean;
  icon: string;
  listUser: UserSnippet[];
  createdAt: string; // Could also use Date if you plan to parse it
  updateAt: string;
  isDelete: boolean;
  balance: MoneyLoverBankTransaction[];
}

export interface MoneyLoverBankTransaction {
  date: string;
  valueDate: string;
  transaction: string; // This corresponds to the 'Transaction' column in CSV
  debit: string;
  credit: string;
  balance: string;
}
