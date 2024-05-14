import civic from '../../assets/civic.jpg'

const ChatUserList = () => {
  return (
    <div className="border-[1px] flex items-center justify-between px-2 py-2 bg-white cursor-pointer rounded-md">
      <div className="flex gap-2">
        <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
          <img src={civic} className='w-full h-full object-cover' alt="" />
        </div>

        <div className="">
          <p className="text-sm font-medium">Akhil Thulasitharan</p>

          <p className="text-xs text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>

      <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
    </div>
  );
};

export default ChatUserList;
