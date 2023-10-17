import React from "react";

const Navbar: React.FC = () => {
  // const Navbar = () => {
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
            <button className="conn_wallet">Connect Wallet</button>
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
