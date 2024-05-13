import React from "react";

const SpecificationItem = ({ name, Icon } : { name: string, Icon: any }) => {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-blue-500 text-lg" />
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default SpecificationItem;
