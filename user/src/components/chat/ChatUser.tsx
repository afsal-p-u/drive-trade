const ChatUser = ({ image, message, name, online, lastSeen, active }: any) => {
  return (
    <div 
        className={`flex justify-between px-3 rounded-xl py-2 items-center cursor-pointer
        ${active ? 'bg-light_primary' : 'bg-primary'}
    `}>
      <div className="flex items-center gap-3">
        <div className="w-[45px] h-[45px] bg-blue-500 rounded-2xl">
          <img src={image} alt="" />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-sm">{name}</p>

                {online && (
                    <div className="w-[10px] h-[10px] rounded-full bg-green-400"></div>
                )}
            </div>

            <p className="text-xs text-light_gray font-medium">{message}</p>
          </div>
        </div>
      </div>

      <p className="text-xs font-medium text-light_gray">{lastSeen}</p>
    </div>
  );
};

export default ChatUser;
