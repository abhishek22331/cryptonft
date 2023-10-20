import React from "react";
import Filtergalery from "./Filtergalery";
import {stylingcss} from "@/utils/styles"

const NFTCard: React.FC = () => {
  const style=stylingcss()
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
                  <ul className="list-m">
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
                    className="green-btn d-flex btn btn-primary"
                  >
                    CLAIM NFTS
                  </button>
                </div>
                <br />
                <div className="TopNftrate">
                  <div className="rateDiv">
                    <h4>34+</h4>
                    <h6>Sports Car</h6>
                  </div>
                  <div className="rateDiv">
                    <h4>49+</h4>
                    <h6>Classic Car</h6>
                  </div>
                  <div className="rateDiv">
                    <h4>48+</h4>
                    <h6>Limited Editions</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col_gd2 bg-1">
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
                              src="./carnft7.jpg"
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
                                <span> </span>Concept Car NFT
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
                              src="./carnft11.jpg"
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
                                <span> </span>Concept Car NFT
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#nft-slide"
                      data-bs-slide="prev"
                    >
                      <i className="bi bi-arrow-left-circle"></i>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#nft-slide"
                      data-bs-slide="next"
                    >
                      <i className="bi bi-arrow-right-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="TrendingDrops"
        style={style}
      >
        <div className="container">
          <div className="trendHead">
            <h2>Trending Cars</h2>
          </div>
          {/* <div className="TrendingDropsData">
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
            <div className="TrendDropItems2">
                        <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrai2.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    <div className="me-auto">Token: <span>100</span></div>
                                    <div className="ms-auto"><i className="bi bi-heart"></i><span>80</span></div> 
                                </div>
                                                                 
                            </div>
                            
                          </div>
                           <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrai3.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
                            <img
                              width="300"
                              height="400"
                              decoding="async"
                              data-nimg="1"
                              className="nftCardImage"
                              src="./ferrai4.avif"
                            // style=""
                              loading="lazy"
                            /></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrai5.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrari6.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                   Clasic Car <a href="">Ferrari
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>100</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                          <div className="NftTrendCard nft_item common">
                            <div className="wrap-img">
							<img
							  width="300"
							  height="400"
							  decoding="async"
							  data-nimg="1"
							  className="nftCardImage"
							  src="./ferrari8.avif"
							 // style=""
							  loading="lazy"
							/></div>
                            <div className="nft_item_info">
                                <h4>
                                All <a href="">Ferrari Roma
                                </a></h4>
                               
                                <div className="nft_item_price">
                                    Token: <span>80</span>
                                </div>
                                <div className="nft_item_like">
                                    <i className="bi bi-heart"></i><span>80</span>
                                </div>                                 
                            </div>
                            
                          </div>
                    </div>
                </div> */}
          <div className="row">
            <div className="col-lg-12 text-center my-2">
              <Filtergalery></Filtergalery>
            </div>
          </div>
        </div>
      </section>
      <section className="exploreMore">
        <div className="container">
          <div className="trendHead">
            <h2>Explore More</h2>
          </div>
          <div className="explore_d-grid">
            <div className="explore-card">
              <img src="./carnf12.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnf12.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnft2.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnft6.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
            <div className="explore-card">
              <img src="./carnft8.jpg" alt="ferrari" />
              <div className="info">
                Ferrai12{" "}
                <span className="rate">
                  <i className="bi bi-heart"></i>
                  <span>60</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="inner_footer">
            <div
              className="big_btn_row aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <span>
                <a href="#">Terms and Conditions</a>
              </span>
              <span>
                <a href="#">Privacy Policy</a>
              </span>
              <span>
                <a href="#">Cookies Policy</a>
              </span>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex">
                  <div className="de-flex-col">
                    <a href="">
                      <img alt="" className="img-logo" src="./logo.svg" />
                    </a>
                  </div>
                  <div className="de-flex-col">
                    <div className="social-icons">
                      <a href="#">
                        <i className="bi bi-facebook bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-pinterest bi-lg"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-rss bi-lg"></i>
                      </a>
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
