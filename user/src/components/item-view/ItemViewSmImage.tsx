import React from "react";

type ItemViewSmImageProps = {
  image: string
}

const ItemViewSmImage = ({ image }: ItemViewSmImageProps) => {
  return (
    <div>
      <div className="w-[100px] h-[100px]">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ItemViewSmImage;
