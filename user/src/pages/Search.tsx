import { Navbar, Sidebar, VehicleCard } from "../components"


const Search = () => {
  return (
    <>
      <div className="w-full bg-[#f5f3f3] flex">
        <Sidebar />

        <div className="px-[20px] min-h-[88vh] py-5">
          <p className="mb-3 pl-[25px]">Search for: <span className="font-medium">Honda Civic</span></p>

          <div className="flex flex-wrap gap-5 pl-[25px]">
            <VehicleCard />
            <VehicleCard />
            <VehicleCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
