import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="desctiptionbox-nav-box">Description</div>
        <div className="desctiptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An eCommerce website facilitates online transactions of goods or
          services. It provides a platform for businesses to showcase products,
          enabling customers to browse, compare, and purchase items from the
          comfort of their homes. Key features often include secure payment
          gateways, product categorization, user reviews, and seamless checkout
          processes.
        </p>
        <p>
          E-commerce websites revolutionize traditional retail by offering
          unparalleled convenience and accessibility. They empower businesses of
          all sizes to reach global audiences, breaking geographical barriers.
          Through personalized recommendations and targeted marketing, they
          enhance customer experiences, fostering loyalty and driving sales.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
