import { ChatMessage, ChatUser } from "../components/chat";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  return (
    <div>
      <div className="ps-[100px] py-[30px] bg-primary flex gap-5 min-h-[100vh]">
        <div className="basis-2/6 bg-primary">
          <div className="flex gap-3 items-center justify-start">
            <p className="text-lg font-medium">Messages</p>

            <div className="px-2 py-1 bg-light_primary shadow-md rounded-full">
              <p className="text-xs font-medium">12</p>
            </div>
          </div>

          <div className="my-5">
            <input
              type="search"
              placeholder="Search messages"
              className="text-sm px-7 py-3 w-full outline-none bg-light_primary rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <ChatUser
              image=""
              lastSeen="12m"
              name="Dicaprio leonardo"
              message="Hey bro"
              online={true}
              active={false}
            />
            <ChatUser
              image=""
              lastSeen="32m"
              name="Akash"
              message="Hey bro"
              online={false}
              active={false}
            />
            <ChatUser
              image=""
              lastSeen="22m"
              name="Jazir"
              message="Hey bro"
              online={false}
              active={false}
            />
            <ChatUser
              image=""
              lastSeen="22m"
              name="Justin"
              message="Hey bro"
              online={false}
              active={true}
            />
            <ChatUser
              image=""
              lastSeen="32m"
              name="Anmariya"
              message="Hey bro"
              online={true}
              active={false}
            />
          </div>
        </div>

        <div className="basis-4/6 bg-light_primary border-l-[1px] pe-[100px]">
          <div className="py-3 border-b-[1px] ps-[15px] flex items-center  justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[45px] h-[45px] bg-blue-500 rounded-xl">
                <img src="" alt="" />
              </div>

              <div className="">
                <h5 className="font-medium">Akshay</h5>

                <div className="flex items-center gap-3">
                  <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>

                  <p className="text-xs">online</p>
                </div>
              </div>
            </div>

            <div className="">
              <button 
                className="flex gap-2 items-center justify-center rounded-md px-3 py-2 
                bg-light_secondary text-secondary"
              >
                <IoCallSharp className="text-secondary" />
                <p className="text-xs font-medium">Call</p>
              </button>
            </div>
          </div>

          <div className="py-3 ps-[15px] flex flex-col gap-2 min-h-[60vh]">
            <ChatMessage message="omg! this is amazing" type="incoming" />
            <ChatMessage message="perfect!" repeat={true} type="incoming" />
            <ChatMessage message="how are you!" type="outgoing" />
          </div>

          <div className="ps-[15px] flex items-center py-3 gap-3">
            <div className="">
              <MdOutlineCreateNewFolder className="text-2xl cursor-pointer" />
            </div>

            <div className="flex items-center w-full gap-2 border-[1px] px-4 py-2 rounded-xl">
              <input
                type="text"
                placeholder="Type a message"
                className="w-full text-sm outline-none bg-transparent" 
              />

              <IoIosSend className="text-2xl text-secondary cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
