const VehicleCard = ({ image, styles }: any) => {
  return (
    <div
      className={`px-3 pt-3 bg-primary shadow-md mx-auto
        rounded-3xl overflow-hidden
        ${styles ? styles : "pb-3"}
    `}
    >
      <div className="rounded-t-3xl overflow-hidden">
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="px-3 py-3 bg-third rounded-b-3xl overflow-hidden">
        <p className="font-medium text-lg max-lg:text-md">Mercedes-benz</p>

        <div className="mt-1 flex gap-2 items-baseline">
          <p className="font-medium text-sm max-lg:text-xs">$27,555.00</p>

          <p className="line-through text-xs">$30,000.00</p>
        </div>

        <div className="border-t-[2px] w-full my-1"></div>

        <div className="flex gap-3 mt-2 mb-2 flex-wrap">
          <p className="px-2 py-1 bg-primary rounded-md font-medium text-sm max-md:text-xs">
            2023
          </p>

          <p className="px-2 py-1 rounded-md font-medium text-sm max-md:text-xs">
            Automatic
          </p>

          <p className="px-2 py-1 rounded-md font-medium text-sm max-md:text-xs">
            Petrol
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
