import React from 'react'

const ChatMessage = ({ incoming }: { incoming: boolean }) => {
  return (
    <>
        {incoming ? (
        <div className="flex justify-start">
            <div className="incoming bg-white px-4 py-2 rounded-md w-[60%]">
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis nostrum quisquam incidunt totam, illum, modi
                inventore, in quia atque itaque maxime repudiandae suscipit
                libero vitae voluptatem recusandae ex. Architecto, illo!
              </p>
            </div>
          </div>
        ) : (
            <div className="flex justify-end">
                <div className="outgoing bg-gray-300 px-4 py-2 rounded-md w-[60%]">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                    hic totam quos, dolor tenetur nesciunt, iste reiciendis
                    voluptatem atque, ad ullam quod aliquid dolorum quas corrupti
                    necessitatibus voluptate dignissimos odit? Nam porro molestias
                    tenetur iusto quam, voluptatem explicabo temporibus eveniet.
                  </p>
                </div>
            </div>
        )}
    </>
  )
}

export default ChatMessage
