export interface MoneyLoverWallet {
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
  listUser: MoneyLoverObjectUser[];
  createdAt: string; // Could also use Date if you plan to parse it
  updateAt: string;
  isDelete: boolean;
  balance: MoneyLoverBankTransaction[];
}

export interface MoneyLoverObjectUser {
  _id: string;
  email: string;
}
export interface MoneyLoverBankTransaction {
  date: string;
  valueDate: string;
  transaction: string; // This corresponds to the 'Transaction' column in CSV
  debit: string;
  credit: string;
  balance: string;
}
