import MoneyLoverClient, { NewMoneyLoverClient } from "./client";
import getCategories from "./commands/categories";
import login from "./commands/login";
import logout from "./commands/logout";
import { addTransaction, getTransactions } from "./commands/transactions";
import getWallets from "./commands/wallets";
import { Category } from "./interfaces/category";
import { CategoryType } from "./interfaces/category-type";
import { UpsertTransaction } from "./interfaces/transaction";
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
  getWallets,

  //   Interfaces
  CategoryType,
  Category,
  UpsertTransaction,
  UserProfile,
  Wallet,
};
