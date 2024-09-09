import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useState } from "react";

function Balance() {
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);
  const { connected, publicKey } = useWallet();

  useEffect(() => {
    async function getter() {
      if (publicKey) {
        const res = await connection.getBalance(publicKey);
        setBalance(res / 1000000000);
      }
    }
    getter();
  }, [connection, connected, publicKey]);

  return <>{connected && <div>{balance}</div>}</>;
}

export default Balance;
