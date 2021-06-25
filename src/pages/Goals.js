import Navbar from "../components/navbar/Navbar";
import MobileNav from "../components/mobileNav/MobileNav";
import TaskList from "../components/task/TaskList";

const Goals = () => {
  const goals = [
    {
      id: 1,
      goal_id: 1,
      nominal: 25000,
      date: "Sat, 02 Jan 2021",
      status: 1,
    },
    {
      id: 2,
      goal_id: 1,
      nominal: 25000,
      date: "Sun, 03 Jan 2021",
      status: 1,
    },
    {
      id: 3,
      goal_id: 1,
      nominal: 25000,
      date: "Mon, 04 Jan 2021",
      status: 1,
    },
    {
      id: 4,
      goal_id: 1,
      nominal: 25000,
      date: "Tue, 05 Jan 2021",
      status: 1,
    },
  ];
  return (
    <div className="main">
      <Navbar setting="false" headText="Your Goal" />
      <div className="my-3 mx-6">
        <div className="grid grid-cols-2 gap-2 my-3">
          <div className="col-span-2 w-100 rounded p-5 bg-white">
            <p className="text-xs font-light text-gray-600">Make some money</p>
            <span className="font-medium text-base tracking-wider">
              Rp. 5.000.000,00
            </span>
            <hr className="my-2" />
            <p className="text-xs font-light text-gray-600">Now</p>
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm tracking-wider">
                Rp. 2.000.000
              </span>
              <p className="text-xs font-light text-gray-400 mt-1 tracking-wider">
                21 Dec 2021
              </p>
            </div>
          </div>
        </div>
        {/* <h2 className="text-base font-medium col-span-2">Other Goals</h2>
        <div className="flex overflow-x-scroll my-3">
          <div className="flex flex-nowrap">
            <div className="h-24 w-12 mr-2 bg-gray-700 rounded"></div>
            <div className="h-24 w-36 mr-2 bg-gray-700 rounded"></div>
            <div className="h-24 w-36 mr-2 bg-gray-700 rounded"></div>
          </div>
        </div> */}
      </div>
      <div className="sectionBox p-6 mt-4 bg-white rounded-lg">
        <h2 className="text-sm font-medium mb-1 ml-1 col-span-2">
          Daily tasks
        </h2>
        <TaskList data={goals} check="true" />
      </div>
      <MobileNav />
    </div>
  );
};

export default Goals;
