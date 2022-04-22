import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Small Text</p>
        <h3>Mıd Text</h3>
        <img src="" alt="" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">Button Text</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>DESCRİPTİON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
