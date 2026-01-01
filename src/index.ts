import MoneyLoverClient, { NewMoneyLoverClient } from "./client";
import getCategories from "./commands/categories";
import login from "./commands/login";
import logout from "./commands/logout";
import {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} from "./commands/transactions";
import getWallets from "./commands/wallets";
import { Category } from "./interfaces/category";
import { CategoryType } from "./interfaces/category-type";
import { Transaction, UpsertTransaction } from "./interfaces/transaction";
import { UserProfile } from "./interfaces/user-profile";
import { Wallet } from "./interfaces/wallet";

export {
  MoneyLoverClient,
  NewMoneyLoverClient,
  getCategories,
  login,
  logout,
  getTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getWallets,

  //   Interfaces
  CategoryType,
  Category,
  Transaction,
  UpsertTransaction,
  UserProfile,
  Wallet,
};
