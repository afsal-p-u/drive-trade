import { IoIosArrowForward } from "react-icons/io";

const Faq = ({ text }: any) => {
  return (
    <div className="px-7 py-4 bg-white rounded-md shadow-sm flex items-center justify-between cursor-pointer">
      <p className="font-medium text-sm">
        {text}
      </p>

      <IoIosArrowForward className="text-2xl cursor-pointer" />
    </div>
  );
};

export default Faq;
