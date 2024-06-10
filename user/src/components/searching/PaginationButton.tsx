const PaginationButton = ({ number, icon: Icon, styles }: any) => {
  return (
    <div
      className={`w-[35px] h-[35px] shadow-lg rounded-full flex items-center 
        justify-center text-xs cursor-pointer font-medium ${styles ? styles : 'text-light_gray bg-primary'}`}
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
