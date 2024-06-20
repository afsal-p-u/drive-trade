import { IoMdCheckmark } from "react-icons/io";

const ExtraFeaturesItem = ({ item }: any) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="p-1 rounded-full bg-light_secondary">
        <IoMdCheckmark className="text-blue-500" />
      </div>

      <p className="text-sm font-medium">{item}</p>
    </div>
  );
};

export default ExtraFeaturesItem;
