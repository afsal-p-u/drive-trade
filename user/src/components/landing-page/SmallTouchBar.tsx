const SmallTouchBar = ({ active }: any) => {
  return (
    <>
        {active ? (
            <div className="w-[25px] h-[5px] bg-black rounded-xl cursor-pointer"></div>
        ) : (
            <div className="w-[18px] h-[5px] bg-light_gray rounded-xl cursor-pointer"></div>
        )}
    </>
  )
}

export default SmallTouchBar
