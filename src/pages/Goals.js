import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";
import Tasks from "../components/task/Tasks";

const Goals = () => {
  return (
    <div className="main">
      <Navbar setting="false" />
      <div className="my-3 mx-6">
        <div className="grid grid-cols-2 gap-2 my-3">
          <h1 className="text-base font-medium col-span-2">Your Goals</h1>
          <div className="col-span-2 w-100 h-32 rounded bg-gray-800"></div>
        </div>
        {/* <h2 className="text-base font-medium col-span-2">Other Goals</h2>
        <div className="flex overflow-x-scroll my-3">
          <div className="flex flex-nowrap">
            <div className="h-24 w-12 mr-2 bg-gray-700 rounded"></div>
            <div className="h-24 w-36 mr-2 bg-gray-700 rounded"></div>
            <div className="h-24 w-36 mr-2 bg-gray-700 rounded"></div>
          </div>
        </div> */}
        <Tasks />
      </div>
      <MobileNav />
    </div>
  );
};

export default Goals;
