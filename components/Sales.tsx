import Dropdown from "@/components/Dropdown";
export default function Sales() {
  return (
    <div className="flex flex-col px-4 md:px-16 py-4 md:py-16 w-full">
      <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between w-full">
        <div>
          <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome back, John Doe
          </h1>
          <p className="text-gray-500 text-xs md:text-sm">
            Here's what's happening with your sales today.
          </p>
        </div>
        <Dropdown />
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4 mt-10">
        <div className="md:row-span-4 bg-blue-300 md:h-52 flex flex-col justify-center items-center py-8">
          <p className=" text-xs text-gray-700">Total Revenue</p>
          <p className="text-3xl text-gray-900 mt-2">10,000.00</p>
        </div>
        <div className="md:col-span-2  bg-blue-300 md:h-24 flex flex-col justify-center items-center py-8">
          <p className="text-xs text-gray-700">Number of Orders</p>
          <p className="text-3xl text-gray-900 mt-2">25</p>
        </div>
        <div className="md:row-span-2 md:col-span-2 bg-blue-300 md:h-24 flex flex-col justify-center items-center py-8">
          <p className="text-xs text-gray-700">Average Order Value</p>
          <p className="text-3xl text-gray-900 mt-2">400.00</p>
        </div>
      </div>
    </div>
  );
}
