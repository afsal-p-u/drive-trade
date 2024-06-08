const BrandImage = ({ image }: any) => {
  return (
    <div className="w-[35px] h-[35px]">
      <img src={image} alt="" className="w-full h-full object-contain" />
    </div>
  );
};

export default BrandImage;
