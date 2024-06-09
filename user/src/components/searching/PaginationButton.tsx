const PaginationButton = ({ number, icon: Icon, styles }: any) => {
  return (
    <div
      className={`w-[35px] h-[35px] shadow-lg rounded-full text-light_gray bg-primary flex items-center 
        justify-center text-xs cursor-pointer font-medium ${styles}`}
    >
        {Icon  ? (
            <Icon />
        ) : (
            <>
                {number}
            </>
        )}
    </div>
  );
};

export default PaginationButton;
