const FeatureItem = ({ icon: Icon, label1, label2 }: any) => {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-2xl text-primary" />

      <div className="flex flex-col">
        <h5 className="text-primary font-medium max-lg:text-xs">{label1}</h5>
        <p className="text-xs text-light_primary/80">{label2}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
