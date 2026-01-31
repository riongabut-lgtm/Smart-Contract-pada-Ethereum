import { useEffect, useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask tidak terdeteksi");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const bal = await provider.getBalance(accounts[0]);

      setAccount(accounts[0]);
      setBalance(ethers.formatEther(bal));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <button onClick={connectWallet}>Connect Wallet</button>
      <p>Alamat: {account}</p>
      <p>Saldo: {balance} ETH</p>
    </div>
  );
}

export default App;
