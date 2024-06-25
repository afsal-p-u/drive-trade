const ChatMessage = ({ image, message, type, repeat }: any) => {
  return (
    <div className={`flex items-center gap-2 ${type === "outgoing" ? 'justify-end' : 'justify-start'}`}>
        {type == "incoming" && (
            <div className={`w-[40px] h-[40px] bg-red-500 rounded-xl ${repeat && "opacity-0"}`}>
                <img src={image} alt="" />
            </div>
        )}

        <p 
            className={`px-4 py-2 text-sm font-medium rounded-xl
            ${type === "incoming" ? 'bg-extra_light_primary' : 'bg-blue-500 text-white'}
            `}>
            {message}
        </p>

        {type == "outgoing" && (
            <div className={`w-[40px] h-[40px] bg-blue-500 rounded-xl ${repeat && "opacity-0"}`}>
                <img src={image} alt="" />
            </div>
        )}
    </div>
  )
}

export default ChatMessage
