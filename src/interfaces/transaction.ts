import { Account } from "./account";
import { Category } from "./category";
import { UserSnippet } from "./user-snippet";

export interface UpsertTransaction {
  _id?: string;
  /**
   * Type is 'any[]' because the source array is empty.
   * You may want to replace 'any' with a specific type (e.g., string[]) if known.
   */
  with: any[];
  account: string;
  category: string;
  amount: number;
  note: string;
  /**
   * Format: YYYY-MM-DD
   */
  displayDate: string;
  event: string;
  exclude_report: boolean;
  /**
   * Note: This key preserves the spelling from the source JSON ("longtitude"),
   * distinct from the standard spelling "longitude".
   */
  longtitude: number;
  latitude: number;
  addressName: string;
  addressDetails: string;
  addressIcon: string;
  remind: number;
  image: string;

  //Optional
  date?: Date;
  related: boolean;
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

export interface DeleteTransaction {
  delRelated: boolean;
  _id: string;
}
