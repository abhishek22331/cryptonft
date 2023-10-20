import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Claim = () => {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className="centered-container-claim">
        <h1>Claim not available now </h1>
        <Link href="/">Learn more</Link>
        <br/>
        <h3>Visit telegram for more information</h3>
        <Link href="https://www.telegram.com" target="_blank">
          <img
            src="./telegram.svg"
            style={{ width: "100px", height: "100px" }}
            alt="Telegram"
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Claim;
