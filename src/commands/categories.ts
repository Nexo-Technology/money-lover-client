import MoneyLoverClient from "../client";
import { MoneyLoverCategory } from "../interfaces/category";

const getCategories = async (
  client: MoneyLoverClient,
  walletId: string
): Promise<MoneyLoverCategory[]> => {
  if (!client) {
    throw new Error("Not logged in");
  }
  if (!client.isTokenValid()) {
    throw new Error("Token has expired");
  }
  const allCategories: MoneyLoverCategory[] = await client.getCategories(
    walletId
  );

  //   Api may return all categories even when the walletId is specified,
  //   so we filter them here to return only the categories that belong to the specified walletId.
  return allCategories.filter(
    (category: any) => category.walletId === walletId
  );
};

export default getCategories;
