import React from "react";

const Home = (props) => {

  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props?.cardData?.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
      <h1>HOME</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            className=""
            onClick={() =>
              props.addToCartHandler({ name: "I-Phone 14", price: 1000 })
            }
          >
            Add To Cart
          </button>
          <button
            className="remove-cart-btn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
