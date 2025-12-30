export interface MoneyLoverCategory {
  /** Internal unique identifier for the specific item */
  _id: string;

  /** Display name (e.g., "Tejas") */
  name: string;

  /** Icon identifier used in the UI */
  icon: string;

  /** * Reference ID to the parent wallet/account.
   * Matches the structure of your previously defined Wallet _id.
   */
  account: string;

  /** * Numeric type identifier.
   * Likely represents a specific category or sub-account type.
   */
  type: number;

  /** Metadata for additional info (currently an empty string) */
  metadata: string;

  /** Grouping identifier for organizational purposes */
  group: number;

  /** Duplicate of _id, often used for legacy or specific API compatibility */
  id: string;

  /** Optional parent category ID for hierarchical categorization */
  parent?: string;

  exclude_accounts: string[]; // Excluded account IDs, like wallet IDs
}
