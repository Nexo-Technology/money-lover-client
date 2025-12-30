import MoneyLoverClient from "../client";
const debug = process.env.DEBUG === "true";

const getWallets = async (client: MoneyLoverClient) => {
  if (!client) {
    throw new Error("MoneyLoverClient: Not logged in");
  }
  if (!client.isTokenValid()) {
    throw new Error("MoneyLoverClient: Token has expired");
  }

  const wallets = await client.getWallets();
  if (debug) {
    console.log(`MoneyLoverClient: Retrieved ${wallets.length} wallets`);
  }
  return wallets;
};

export default getWallets;
