import { ethers } from "ethers";
import { useState, useEffect } from "react";
interface DataState {
  address: string;
  Balance: string | null;
}
const Navbar: React.FC = () => {
  const [data, setdata] = useState<DataState>({
    address: "",
    Balance: null,
  });

  const [isConnected, setIsConnected] = useState(false);

  const btnhandler = async () => {
    //@ts-ignore

    if (window.ethereum) {
      try {
        //@ts-ignore

        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountChangeHandler(accounts[0]);
      } catch (error) {
        console.error("Error requesting accounts:", error);
      }
    } else {
      alert("Install MetaMask extension!!");
    }
  };

  const getbalance = async (address: string) => {
    try {
      //@ts-ignore

      const balance = await provider.getBalance(address);
      setdata((prevData) => ({
        ...prevData,
        //@ts-ignore

        Balance: ethers.utils.formatEther(balance),
      }));
    } catch (error) {
      console.error("Error getting balance:", error);
    }
  };

  const accountChangeHandler = (account: string) => {
    setdata({
      address: account,
      Balance: null,
    });

    getbalance(account);
  };

  const disconnectHandler = () => {
    //@ts-ignore

    if (window.ethereum && window.ethereum.close) {
      //@ts-ignore

      window.ethereum.close();
      setIsConnected(false);
      setdata({
        address: "",
        Balance: null,
      });
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (window.ethereum) {
      //@ts-ignore
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          accountChangeHandler(accounts[0]);
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
      });
    }
  }, []);
  console.log(data,"dddddatatatta")
  return (
    <div>
      <section className="NFTHeader">
        <div className="container">
          <div className="ConntBTN">
            <div className="left-buttons">
              <select name="cars" id="cars">
                <option value="disabled" disabled selected>
                  Select an option
                </option>
                <option value="All">All</option>
                <option value="Sports Cars">Sports Cars</option>
                <option value="Classic Cars">Classic Cars</option>
                <option value="Limited Edition">Limited Edition</option>
                <option value="Concept Cars">Concept Cars</option>
              </select>
              <input type="text" id="searchInput" placeholder="Search..." />
              <button className="conn_wallet">Home</button>
              <button className="conn_wallet">NFT</button>
            </div>
            {data.address?<span style={{color:"#21997f"}}>{data.address.slice(0,5)}....{data.address.slice(33,data.address.length)}</span>: <button className="conn_wallet" onClick={btnhandler}>Connect Wallet</button>}
           
            <div className="avatar-container">
              <img
                src="./profile.png"
                alt="Your Avatar"
                className="avatar-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
