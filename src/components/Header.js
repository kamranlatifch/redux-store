import React from "react";

const Header = (props) => {
  console.log("Props in Home Component are", props?.cardData);
  return (
    <div>
      <div className="add-to-cart">
        <h1>Header</h1>
        <span className="cart-count">{props?.cardData?.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
    </div>
  );
};

export default Header;
