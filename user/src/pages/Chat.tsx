import { ChatMessage, ChatUserList } from "../components";
import { IoMdMore } from "react-icons/io";
import civic from "../assets/civic.jpg";
import { LuPlusCircle } from "react-icons/lu";
import { RiFolderTransferLine } from "react-icons/ri";

const Chat = () => {
  return (
    <div className="min-h-[89vh] bg-primary">
      <div className="flex gap-5 px-[20px] py-5">
        <div className="basis-2/6 gap-1 flex flex-col">
          <ChatUserList />
          <ChatUserList />
          <ChatUserList />
        </div>

        <div className="basis-4/6">
          <div className="border-[1px] rounded-md">
            <div className="flex justify-between px-3 items-center py-2 border-b-[1px]">
              <div className="flex gap-2 items-center">
                <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                  <img
                    src={civic}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>

                <p className="text-sm font-medium">AFSAL P U</p>
              </div>

              <IoMdMore className="text-black text-2xl cursor-pointer" />
            </div>

            <div className="min-h-[65vh] max-h-[65vh] overflow-y-scroll px-2 py-5 flex flex-col gap-3 border-b-[1px]">
              <ChatMessage incoming={true} />
              <ChatMessage incoming={true} />
              <ChatMessage incoming={false} />
              <ChatMessage incoming={true} />
              <ChatMessage incoming={false} />
            </div>

            <div className="flex items-center px-4 py-2 gap-3">
              <div className="basis-1/12 flex items-center justify-center">
                <LuPlusCircle className="text-2xl cursor-pointer" />
              </div>

              <div className="flex items-center px-3 py-2 border-[1px] rounded-md basis-11/12">
                <input type="text" placeholder="Type..." className="outline-none text-sm bg-transparent w-full" />
              </div>

              <div className="basis-1/12 flex items-center justify-center">
                <RiFolderTransferLine className="text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
