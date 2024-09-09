import React, { useEffect, useState } from "react";
import Balance from "./Balance";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
function Airdrop() {
  const { connected, publicKey } = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(0);

  async function airdropHandler() {
    const response = await connection.requestAirdrop(
      publicKey,
      amount * 1000000000
    );
    alert(
      "Airdropped " +
        amount +
        " SOL successfully, transaction signature: " +
        response
    );
  }



  return (
    <>
      <input
        disabled={!connected}
        value={amount}
        type="number"
        min="0"
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <button disabled={!connected} onClick={airdropHandler}>
        Request Airdrop
      </button>
    </>
  );
}

export default Airdrop;
