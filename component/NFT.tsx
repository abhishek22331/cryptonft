import React from "react";

const NFTCard: React.FC = () => {
  return (
    <>
      <section className="Main_NFT">
        <div className="container">
          <div className="nft_grd">
            <div className="col_gd1">
              <div className="leftTopNFT">
                <div className="topNftHeading">
                  <h2>
                    <span>Explore and Acquire Exclusive NFTs</span> Own a Piece
                    of Digital History
                  </h2>
                </div>
                <div className="topNftpara">
                  <p>
                    Introducing our stunning "Sleek Supercar" NFT, a true
                    masterpiece in the world of digital art and luxury
                    automobiles. This unique digital collectible is a
                    celebration of cutting-edge technology, design, and
                    automotive excellence, encapsulated in the form of a
                    non-fungible token (NFT).
                  </p>
                  <ul style={{ color: "#a3a7af" }}>
                    <li>
                      Impeccable Design: The Sleek Supercar is a fusion of
                      aerodynamic precision and aesthetic beauty, making it a
                      true work of art on wheels.
                    </li>
                    <li>
                      High-Performance: With [mention horsepower] horsepower and
                      [mention torque] lb-ft of torque, this car is a beast on
                      the road.
                    </li>
                    <li>
                      Exquisite Craftsmanship: Every detail, from the
                      hand-stitched leather interior to the precision-engineered
                      components, reflects unparalleled craftsmanship.
                    </li>
                    <li>
                      Limited Edition: This NFT represents a limited edition
                      release, making it a rare and exclusive digital
                      collectible.
                    </li>
                  </ul>
                </div>
                <div className="topNftButton">
                  <button
                    type="button"
                    className="green_btn d-flex btn btn-primary"
                  >
                    CLAIM NFTS
                  </button>
                </div>
                <br />
                <div className="TopNftrate">
                  <div className="rateDiv">
                    <h4>34+</h4>
                    <h6>EDITOR NFTs</h6>
                  </div>
                  <div className="rateDiv">
                    <h4>49+</h4>
                    <h6>AUCTIONS</h6>
                  </div>
                  <div className="rateDiv">
                    <h4>48+</h4>
                    <h6>SENATOR NFTs</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_gd2">
              <div className="RytTopNFT">
                <div className="NftSlider">
                  <div
                    id="nft-slide"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#nft-slide"
                        data-bs-slide-to="0"
                        className="active"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#nft-slide"
                        data-bs-slide-to="1"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="active carousel-item">
                        <div className="Sliderbanner">
                          <div className="Nftsliderimage">
                            <img
                              alt="abc"
                              decoding="async"
                              data-nimg="1"
                              className="d-block"
                              src="./car31.avif"
                              loading="lazy"
                            />
                          </div>
                          <div className="nftslidetext">
                            <div className="lft">
                              <h4>Sports Cars</h4>
                              <p>Sports</p>
                            </div>
                            <div className="ryt">
                              <h4>Super Ferrari</h4>
                              <p>
                                <span> </span>Senator NFT
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="Sliderbanner">
                          <div className="Nftsliderimage">
                            <img
                              alt="abc"
                              decoding="async"
                              data-nimg="1"
                              className="d-block"
                              src="./car30.avif"
                              loading="lazy"
                            />
                          </div>
                          <div className="nftslidetext">
                            <div className="lft">
                              <h4>Sports Cars</h4>
                              <p>Sports</p>
                            </div>
                            <div className="ryt">
                              <h4>Super Ferrari</h4>
                              <p>
                                <span> </span>Senator NFT
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#nft-slide" data-bs-slide="prev">
                                    <i className="bi bi-arrow-left-circle"></i>
                                  </button>
                                  <button className="carousel-control-next" type="button" data-bs-target="#nft-slide" data-bs-slide="next">
                                    <i className="bi bi-arrow-right-circle"></i>
                                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="TrendingDrops">
        <div className="container">
          <div className="trendHead">
            <h2>Trending Cars</h2>
          </div>
          <div className="TrendingDropsData">
            <div className="TrendDropItems1">
              <div className="TrddopinnerItems">
                <div className="ExplrCategories">
                  <div className="nftSidehead"><h4>Explore by Categories</h4></div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="All"
                      value="All"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      All
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Sports Cars"
                      value="Sports Cars"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Sports Cars
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Clasic Cars"
                      value="Clasic Cars"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Clasic Cars
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Limited Edition"
                      value="Limited Edition"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Limited Edition
                    </label>
                  </div>
                  <div className="Ftcheckbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="Concept Cars"
                      value="Concept Cars"
                    /><label
                      className="form-check-label"
                      //for"flexCheckIndeterminate"
                    >
                      Concept Cars
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="TrendDropItems2">
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                      src="./car30.avif"
                     // style=""
                      loading="lazy"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Clasic Car</h4>
                          <p>Ferrari</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>100 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      src="./car31.avif"
                      loading="lazy"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Sport car</h4>
                          <p>Ferrari Roma</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>20 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      loading="lazy"
                      src="./car32.avif"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Ferrari F8 Tributo</h4>
                          <p>Concept Cars</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>100 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      loading="lazy"
                      src="./car33.avif"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Ferrari 296 GTS</h4>
                          <p>Concept Cars</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>50 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      loading="lazy"
                      src="./car34.avif"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Ferrari Purosangue SUV</h4>
                          <p>Sports</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>50 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      loading="lazy"
                      src="./car35.avif"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Ferrari 812</h4>
                          <p>All</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>80 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      loading="lazy"
                      src="./car36.avif"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Ferrari Purosangue</h4>
                          <p>All</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>80 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      loading="lazy"
                      src="./car37.avif"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Ferrari GTC4 Lusso</h4>
                          <p>All</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>80 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="NftTrendCard">
                  <div className="NftTrendCardsdsd">
                    <img
                      width="300"
                      height="400"
                      decoding="async"
                      data-nimg="1"
                      className="nftCardImage"
                     // style=""
                      loading="lazy"
                      src="./car38.avif"
                    />
                    <div className="nftcardHover">
                      <div className="nfthovdata">
                        <div className="nfthovitem">
                          <h4>Ferrari Roma</h4>
                          <p>All</p>
                        </div>
                        <div className="nfthovitem">
                          <h4>80 Token</h4>
                          <p><span>❤</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NFTCard;
