import React from 'react';

interface NFTCardProps {
  imageUrl: string;
  title: string;
  onBuy: () => void;
  onSell: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ imageUrl, title, onBuy, onSell }) => {
  return (
    <div className="nft-card">
      <div className="nft-image-container">
        <img src={imageUrl} alt={title} className="nft-image" />
        <h3 className="nft-title">{title}</h3>
        <button className="buy-button" onClick={onBuy}>Buy</button>
        <button className="sell-button" onClick={onSell}>Claim</button>
      </div>
    </div>
  );
}

export default NFTCard;
