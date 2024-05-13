import React from "react";

type CustomButtonProps = {
    customStyles?: string,
    iconStyles?: string,
    divStyles?: string,
    name?: string,
    withIcon: boolean,
    Icon?: any
}

const CustomButton = ({ customStyles, name, withIcon, Icon, iconStyles, divStyles }: CustomButtonProps) => {
  return (
    <>
      {withIcon ? (
        <div className={`${divStyles} flex items-center justify-center gap-2`}>
            <Icon className={`${iconStyles}`} />
            {name && (
                <p className={`${customStyles} text-sm font-medium`}>{name}</p>
            )}
        </div>
    ) : (
        <button className={`${customStyles} text-sm font-medium`}>{name}</button>
      )}
    </>
  );
};

export default CustomButton;
