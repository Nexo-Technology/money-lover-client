export interface MoneyLoverTransaction {
  account: string; // Wallet ID
  category: string; // Category ID
  amount: string; // Amount as string
  note: string; // Note or description
  date: Date; // Date in ISO format (YYYY-MM-DD)
}
