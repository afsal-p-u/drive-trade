import { IoCarSportOutline } from "react-icons/io5";

const CarType = ({ image, type }: any) => {
  return (
    <div className="relative">
      <div className="absolute bottom-4 left-5">
        <div className="flex gap-2 items-center px-3 py-2 bg-light_primary cursor-pointer rounded-2xl">
          <IoCarSportOutline />
          <p className="text-xs font-medium">{type}</p>
        </div>
      </div>
      
      <img src={image} alt="" />
    </div>
  );
};

export default CarType;
