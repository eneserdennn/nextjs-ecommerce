import react from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>speakers</p>
      </div>
      <div className="products-container">
        {["product 1", "Product 2"].map((product) => product)}
      </div>
      FOOTER
    </>
  );
};

export default Home;
