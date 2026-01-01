import { Account } from "./account";
import { Category } from "./category";
import { UserSnippet } from "./user-snippet";

export interface UpsertTransaction {
  _id?: string; // Optional for new transactions
  id?: string; // Optional external ID
  account: string; // Wallet ID
  category: string; // Category ID
  amount: string; // Amount as string
  note: string; // Note or description
  date: Date; // Date in ISO format (YYYY-MM-DD)
}

export interface Transaction {
  _id: string;
  note: string;
  account: Account;
  category: Category;
  amount: number;
  displayDate: string; // ISO 8601 Date String
  with: any[]; // Specific type unknown from empty array, likely string[] or object[]
  campaign: any[]; // Specific type unknown from empty array
  lastEditBy: UserSnippet;
  exclude_report: boolean;
  images: any[]; // Specific type unknown from empty array, likely string[] (URLs)
  createdAt: string; // ISO 8601 Date String
}
