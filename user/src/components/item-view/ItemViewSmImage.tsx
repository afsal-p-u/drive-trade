import React from "react";

type ItemViewSmImageProps = {
  image: string
}

const ItemViewSmImage = ({ image }: ItemViewSmImageProps) => {
  return (
    <div>
      <div className="w-[125px] h-[65px] cursor-pointer">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ItemViewSmImage;
