import React from "react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Link from "next/link";
import { useRouter } from "next/router"
const Buy = () => {
  return (
    <div>
      <Navbar />

      <div className="centered-container-claim">
        <h1>Buy not available now </h1>

        <Link href="/">Learn more</Link>
        <br/>
        <h3>Visit telegram for more information</h3>
        <Link href="https://www.telegram.org" target="_blank">
          <img
            src="./telegram.svg"
            style={{ width: "100px", height: "100px" }}
            alt="Telegram"
          />
        </Link>
      </div>

      <Footer/>
    </div>
  );
};

export default Buy;
