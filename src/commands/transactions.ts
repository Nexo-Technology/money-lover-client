import MoneyLoverClient from "../client";
import { UpsertTransaction } from "../interfaces/transaction";

const getTransactions = async (
  client: MoneyLoverClient,
  walletId: string,
  startDate: Date,
  endDate: Date
) => {
  if (!client) {
    throw new Error("MoneyLoverClient: Not logged in");
  }
  if (!client.isTokenValid()) {
    throw new Error("MoneyLoverClient: Token has expired");
  }

  if (!walletId) {
    // Default to all
    walletId = "all";
  }

  return await client.getTransactions(walletId, startDate, endDate);
};

const addTransaction = async (
  client: MoneyLoverClient,
  transaction: UpsertTransaction
) => {
  if (!client) {
    throw new Error("MoneyLoverClient: Not logged in");
  }
  if (!client.isTokenValid()) {
    throw new Error("MoneyLoverClient: Token has expired");
  }
  if (!transaction.account || !transaction.category) {
    throw new Error(
      "MoneyLoverClient: Transaction must have account and category"
    );
  }

  return await client.addTransaction(transaction);
};

export { getTransactions, addTransaction };
