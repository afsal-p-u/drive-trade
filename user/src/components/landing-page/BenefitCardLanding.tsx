const BenefitCardLanding = ({ text, icon: Icon }: any) => {
  return (
    <div className="py-5 px-10 max-sm:px-5 bg-primary rounded-xl shadow-sm flex items-center justify-center flex-col">
      <Icon className="text-5xl mb-3 max-lg:text-3xl" />

      <div className="px-6">
        <p className="text-md font-medium text-center max-lg:text-sm">{text}</p>
      </div>

      <p className="mt-2 text-sm text-light_gray text-center max-lg:text-xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
};

export default BenefitCardLanding;
