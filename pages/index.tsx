import { ethers } from "ethers";
import { useState, useEffect } from "react";
import NFTCard from "@/component/NFT";
// import cars from "../public/cars.png";

interface DataState {
  address: string;
  Balance: string | null;
}
const nftDataArray = [
  {
    imageUrl: "/car30.avif",
    title: "ferrari 1",
    price: 10,
  },
  {
    imageUrl: "/car31.avif",
    title: "ferrari 2",
    price: 10,
  },
  {
    imageUrl: "/car32.avif",
    title: "ferrari 3",
    price: 10,
  },
  {
    imageUrl: "/car33.avif",
    title: "ferrari 4",
    price: 10,
  },
  {
    imageUrl: "/car34.avif",
    title: "ferrari 5",
    price: 10,
  },
  {
    imageUrl: "/car35.avif",
    title: "ferrari 6 ",
    price: 10,
  },
   {
    imageUrl: "/car36.avif",
    title: "ferrari 7",
    price: 10,
  }, {
    imageUrl: "/car37.avif",
    title: "ferrari 8",
    price: 10,
  },
  
  {
    imageUrl: "/car38.avif",
    title: "ferrari 9",
    price: 20,
  },
  // Add more NFT data objects as needed
];
export default function Home() {
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

  return (
    <div className="container">
      {data && data.address.length > 0 ? (
        <div className="connected">
          <div>Address: {data.address}</div>
          {/* <button onClick={disconnectHandler}>Disconnect</button> */}
        </div>
      ) : (
        <div className="not-connected">
          <button id="connect-button" onClick={btnhandler}>
            Connect with MetaMask
          </button>
          <h1>Waiting for connection...</h1>
        </div>
      )}
      <div className="nft-grid">
        {nftDataArray.map((nftData, index) => (
          //@ts-ignore
          <NFTCard key={index} {...nftData} />
        ))}
      </div>
      
    </div>
  );
}
