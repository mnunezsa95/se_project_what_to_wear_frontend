import React from "react";
import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection() {
  return (
    <div className="clothes__section-container">
      <div className="clothes__section-header-container">
        <p className="clothes__section-text">Your Items</p>
        <button className="clothes__section-button" type="text">
          + Add New
        </button>
      </div>
      <div className="clothes__section-card-items">
        {defaultClothingItems.map((item) => (
          <ItemCard item={item} key={item?.id || item?._id} /> // optional chaining as error safety net
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
